"use server";

import OpenAI from "openai";

export async function evaluate(input: string): Promise<string> {
  console.log(input);
  const openai = new OpenAI(process.env.OPENAI_API_KEY as string);
  console.log(openai);

  const gptResponse = await openai.chat.completions.create({
    model: "gpt-4-0613",
    messages: [
      {
        role: "system",
        content: "You are a bot called AndyBot",
      },
      {
        role: "user",
        content: input,
      },
    ],
  });
  console.log(gptResponse.choices[0].message);
  return gptResponse.choices[0].message.content as string;
}
