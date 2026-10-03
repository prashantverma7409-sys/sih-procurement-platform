import { NextResponse } from "next/server";
import Groq from "groq-sdk";

export async function POST(req: Request) {
  try {
    const { rawText } = await req.json();
    
    if (!process.env.GROQ_API_KEY) {
       // Mock response if no API key is provided yet
       return NextResponse.json({
         title: "Smart Traffic Management & Dynamic Signals",
         department: "Pune Smart City Dev Corp (PSCDCL)",
         tldr: "Deploy edge-AI camera vision to dynamically modulate 42 traffic signals during peak hours and automate ambulance green corridors with zero latency.",
         budget: "₹50.00 Lakhs",
         timelineDays: 90,
         emdRequired: false
       });
    }

    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
    
    const completion = await groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content: `You are an AI Tender Sanitizer for the Indian Government. 
                Read this jargon-heavy bureaucratic tender and extract the core details into a clean JSON format.
                Strip out unfair vendor-specific biases and focus on the technical KPIs.
                
                You MUST return ONLY a JSON object with the following exact keys:
                - "title": A clean, modern title for the project (string)
                - "department": The issuing department or authority (string)
                - "tldr": A 1-2 sentence jargon-free summary of what needs to be built (string)
                - "budget": The budget, e.g. '₹50 Lakhs' (string)
                - "timelineDays": Number of days for the timeline (integer)
                - "emdRequired": Is an EMD (Earnest Money Deposit) required? (boolean)`
            },
            {
                role: "user",
                content: rawText
            }
        ],
        model: "qwen-2.5-32b", // Using Qwen on Groq
        response_format: { type: "json_object" },
    });

    const result = JSON.parse(completion.choices[0]?.message?.content || "{}");
    return NextResponse.json(result);
    
  } catch (error) {
    console.error("Groq API Error:", error);
    return NextResponse.json({ error: "Failed to process tender" }, { status: 500 });
  }
}
