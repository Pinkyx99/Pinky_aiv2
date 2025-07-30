import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Enhances a user's prompt for better image generation results.
 * @param prompt - The user's original prompt.
 * @returns A promise that resolves to an enhanced prompt string.
 */
export const enhancePrompt = async (prompt: string): Promise<string> => {
    try {
        const systemInstruction = "You are a creative assistant that expands and enriches user prompts for an AI image generator. Given a user's idea, elaborate on it with vivid details, cinematic lighting, and a specific art style to create a more compelling and visually interesting prompt. Respond only with the enhanced prompt text, without any preamble or explanation.";

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Enhance this prompt: "${prompt}"`,
            config: {
                systemInstruction: systemInstruction,
                temperature: 0.8,
                topP: 0.9,
            }
        });
        
        const enhancedText = response.text;
        if (!enhancedText) {
            throw new Error("The model returned an empty response for prompt enhancement.");
        }
        return enhancedText.trim();

    } catch (error) {
        console.error("Error enhancing prompt:", error);
        throw new Error(`Failed to enhance prompt: ${error instanceof Error ? error.message : 'An unknown error occurred'}`);
    }
};


/**
 * Generates images based on a text prompt using the Imagen 3 model.
 * @param prompt - The text prompt to generate images from.
 * @param numberOfImages - The number of images to generate.
 * @returns A promise that resolves to an array of base64 encoded image URLs.
 */
export const generateImages = async (prompt: string, numberOfImages: number = 1): Promise<string[]> => {
    try {
        const response = await ai.models.generateImages({
            model: 'imagen-3.0-generate-002',
            prompt: prompt,
            config: {
              numberOfImages: numberOfImages,
              outputMimeType: 'image/jpeg',
              aspectRatio: '1:1',
            },
        });
        
        if (response.generatedImages && response.generatedImages.length > 0) {
            return response.generatedImages.map(img => `data:image/jpeg;base64,${img.image.imageBytes}`);
        } else {
            throw new Error("Image generation returned no images. The prompt may have been blocked or the service is unavailable.");
        }

    } catch (error) {
        console.error("Error generating images:", error);
        throw new Error(`Image generation failed: ${error instanceof Error ? error.message : 'An unknown error occurred'}`);
    }
};
