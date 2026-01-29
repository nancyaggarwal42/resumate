import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.REACT_APP_GEMINI_API_KEY);

export async function askGemini(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}
