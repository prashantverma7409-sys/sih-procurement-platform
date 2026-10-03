import { NextResponse } from "next/server";
import Groq from "groq-sdk";

export async function POST(req: Request) {
  try {
    const { datasetType } = await req.json();
    
    if (!process.env.GROQ_API_KEY) {
       // Mock response if no API key is provided
       const mockData = Array.from({ length: 3 }).map((_, i) => ({
         id: `SYN-TRF-${1000 + i}`,
         timestamp: new Date().toISOString(),
         intersection_id: ["PUN-01", "PUN-42", "PUN-08"][i],
         vehicle_count: Math.floor(Math.random() * 50) + 10,
         avg_speed_kmh: Math.floor(Math.random() * 40) + 20,
         anomaly_detected: Math.random() > 0.8
       }));

       // Artificial delay to simulate AI generation
       await new Promise((resolve) => setTimeout(resolve, 1500));

       return NextResponse.json({ data: mockData });
    }

    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
    
    const completion = await groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content: `Generate a highly realistic, synthetic JSON array dataset of 3 records for a government software sandbox.
                Make the fields look exactly like what an Indian municipal API would return (include timestamps, IDs, realistic metrics, and occasional anomalies).
                You MUST return a JSON object with a single root key called "data" containing the array. Example: { "data": [...] }`
            },
            {
                role: "user",
                content: `The requested dataset type is: ${datasetType}`
            }
        ],
        model: "qwen-2.5-32b", // Using Qwen on Groq
        response_format: { type: "json_object" },
    });

    const result = JSON.parse(completion.choices[0]?.message?.content || '{"data":[]}');
    
    // Ensure it returns as { data: [...] }
    if (!result.data && Array.isArray(result)) {
        return NextResponse.json({ data: result });
    }
    
    return NextResponse.json(result);
    
  } catch (error) {
    console.error("Groq API Error:", error);
    return NextResponse.json({ error: "Failed to generate synthetic data" }, { status: 500 });
  }
}
