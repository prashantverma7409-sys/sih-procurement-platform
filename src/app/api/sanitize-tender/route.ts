import { NextResponse } from "next/server";
import Groq from "groq-sdk";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    let rawText = formData.get("rawText") as string | null;
    
    // 1. LlamaParse Step (if a file was uploaded)
    if (file && process.env.LLAMA_CLOUD_API_KEY) {
      console.log("Uploading file to LlamaParse...");
      
      const parseFormData = new FormData();
      parseFormData.append("file", file);
      
      // Initiate LlamaParse Job
      const uploadRes = await fetch("https://api.cloud.llamaindex.ai/api/parsing/upload", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.LLAMA_CLOUD_API_KEY}`,
          "Accept": "application/json"
        },
        body: parseFormData
      });
      
      if (!uploadRes.ok) {
        throw new Error(`LlamaParse Upload Failed: ${uploadRes.statusText}`);
      }
      
      const uploadData = await uploadRes.json();
      const jobId = uploadData.id;
      
      console.log(`LlamaParse Job ID: ${jobId}, polling for results...`);
      
      // Poll for completion (Max 15 times, 2 seconds each = 30s)
      let parsedMarkdown = null;
      for (let i = 0; i < 15; i++) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        const statusRes = await fetch(`https://api.cloud.llamaindex.ai/api/parsing/job/${jobId}/result/markdown`, {
          headers: {
            "Authorization": `Bearer ${process.env.LLAMA_CLOUD_API_KEY}`
          }
        });
        
        if (statusRes.ok) {
          const resultData = await statusRes.json();
          parsedMarkdown = resultData.markdown;
          break; // Parsing complete!
        }
      }
      
      if (parsedMarkdown) {
        rawText = parsedMarkdown;
        console.log("LlamaParse extraction complete!");
      } else {
        throw new Error("LlamaParse timeout - took too long to parse.");
      }
    }

    // Fallback if no API key or file
    if (!process.env.GROQ_API_KEY) {
       return NextResponse.json({
         title: "Smart Traffic Management & Dynamic Signals",
         department: "Pune Smart City Dev Corp (PSCDCL)",
         tldr: "Deploy edge-AI camera vision to dynamically modulate 42 traffic signals during peak hours and automate ambulance green corridors with zero latency.",
         budget: ",150.00 Lakhs",
         timelineDays: 90,
         emdRequired: false
       });
    }

    if (!rawText) {
      return NextResponse.json({ error: "No text or file provided" }, { status: 400 });
    }

    // 2. Groq Extraction Step
    console.log("Sending parsed text to Groq...");
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
    
    const completion = await groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content: `You are an AI Tender Sanitizer for the Indian Government. 
                Read this jargon-heavy bureaucratic tender (which may be formatted in Markdown from a PDF extraction) and extract the core details into a clean JSON format.
                Strip out unfair vendor-specific biases and focus on the technical KPIs.
                
                You MUST return ONLY a JSON object with the following exact keys:
                - "title": A clean, modern title for the project (string)
                - "department": The issuing department or authority (string)
                - "tldr": A 1-2 sentence jargon-free summary of what needs to be built (string)
                - "budget": The budget, e.g. ',150 Lakhs' (string)
                - "timelineDays": Number of days for the timeline (integer)
                - "emdRequired": Is an EMD (Earnest Money Deposit) required? (boolean)`
            },
            {
                role: "user",
                content: rawText
            }
        ],
        model: "qwen-2.5-32b",
        response_format: { type: "json_object" },
    });

    const result = JSON.parse(completion.choices[0]?.message?.content || "{}");
    
    // 3. Persist to Supabase Database (if configured)
    const { supabase } = await import('@/lib/supabase');
    if (supabase) {
      try {
        console.log("Persisting sanitized tender to Supabase Database...");
        await supabase.from('sanitized_tenders').insert([
          {
            title: result.title || 'Untitled Project',
            department: result.department || 'Unknown',
            budget: result.budget || 'N/A',
            tldr: result.tldr || 'No description provided.',
            timeline_days: result.timelineDays || 0,
            raw_text: rawText.substring(0, 5000), // save first 5000 chars for audit
            created_at: new Date().toISOString()
          }
        ]);
        console.log("Successfully saved to Supabase.");
      } catch (dbError) {
        // We log but don't fail the API request if the DB insert fails (graceful degradation)
        console.error("Supabase Persistence Error:", dbError);
      }
    }

    return NextResponse.json(result);
    
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json({ error: error.message || "Failed to process tender" }, { status: 500 });
  }
}
