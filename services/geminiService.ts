
import { GoogleGenAI } from "@google/genai";

// Correctly initialize with the environment variable directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBio = async (name: string, degrees: string[], interests: string[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a professional 2-sentence academic bio for Dr. ${name}. 
      Degrees: ${degrees.join(', ')}. Research interests: ${interests.join(', ')}.`,
    });
    // Use .text property instead of calling it as a function.
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "An educator dedicated to excellence in teaching and research.";
  }
};
