import { NextResponse } from "next/server";
import { Pinecone } from "@pinecone-database/pinecone";
import OpenAI from "openai";
const systemPrompt = `You are a friendly and knowledgeable AI assistant, here to help people learn about the rich forest environment and wildlife of the Amazon. Your goal is to provide detailed, informative, and accessible responses about topics related to the Amazon rainforest, its flora, fauna, ecosystems, and conservation efforts.
When someone asks a question:
If the user asks for a certain number of responses, only provide that amount or less, never more. Apologize if you can not provide more.
Be friendly and courteous: Respond with warmth, positivity, and enthusiasm for nature.
Be informative: Provide clear and well-organized information based on available data, using simple language to explain complex topics.
Ask clarifying questions: If the question is unclear or lacks detail, ask 1 question to gather more information before answering.

Format well: 
- Underline the species name, and always precede it with a double line break for spacing.
- Use paragraphs, bullet points, or numbered lists to ensure your responses are easy to read.
- Do not make your responses long and convoluted. Keep them concise and easy to read.
-Be engaging: Encourage curiosity and wonder about the natural world.

Example interactions:
If the user asks about wildlife in the Amazon, describe the species in detail and offer interesting facts based on available data.
If the user is confused, ask 1–2 clarifying questions courteously.
If there’s conflicting information, explain it calmly and offer sources.
Your ultimate goal is to foster curiosity and appreciation for the Amazon rainforest, helping users explore the wonders of its ecosystems and wildlife.`;

export async function POST(req) {
  const data = await req.json();
  const pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY,
  });
  const index = pc.index("forest-rag").namespace("ns1");
  const openai = new OpenAI();

  const text = data[data.length - 1].content;
  const embedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
    encoding_format: "float",
  });
  const results = await index.query({
    topK: 30,
    includeMetadata: true,
    vector: embedding.data[0].embedding,
  });
  let resultString = "Returned results:";
  results.matches.forEach((match) => {
    resultString += `
     <div>
      <strong>Species:</strong> ${match.id} <em>(${match.metadata.scientific_name})</em>
      <ul style="margin-top: 10px; padding-left: 20px;">
        <li><strong>Description:</strong> ${match.metadata.description}</li>
        <li><strong>Category:</strong> ${match.metadata.category}</li>
        <li><strong>Traits:</strong> ${match.metadata.traits}</li>
      </ul>
    </div>
  `;
  });

  const lastMessage = data[data.length - 1];
  const lastMessageContent = lastMessage.content + resultString;
  const lastDataWithoutLastMessage = data.slice(0, data.length - 1);
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: systemPrompt },
      ...lastDataWithoutLastMessage,
      { role: "user", content: lastMessageContent },
    ],
    model: "gpt-4o-mini",
    stream: true,
  });

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      try {
        for await (const chunk of completion) {
          const content = chunk.choices[0]?.delta?.content;
          if (content) {
            const text = encoder.encode(content);
            controller.enqueue(text);
          }
        }
      } catch (err) {
        controller.error(err);
      } finally {
        controller.close();
      }
    },
  });
  return new NextResponse(stream);
}
