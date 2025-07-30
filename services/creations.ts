import { supabase } from './supabase';
import { v4 as uuidv4 } from 'uuid';

// Helper to convert base64 to blob
const base64ToBlob = (base64: string, contentType: string = 'image/jpeg'): Blob | null => {
    try {
        const byteCharacters = atob(base64.split(',')[1]);
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += 512) {
            const slice = byteCharacters.slice(offset, offset + 512);
            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        return new Blob(byteArrays, { type: contentType });
    } catch (e) {
        console.error("Failed to convert base64 to blob", e);
        return null;
    }
};

export const saveCreation = async (userId: string, prompt: string, imageBase64: string): Promise<void> => {
    try {
        const blob = base64ToBlob(imageBase64);
        if (!blob) {
            console.error("Could not convert image to blob for upload.");
            return;
        }

        const fileName = `${userId}/${uuidv4()}.jpg`;
        
        const { error: uploadError } = await supabase.storage
            .from('creations')
            .upload(fileName, blob, {
                cacheControl: '3600',
                upsert: false
            });
        
        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
            .from('creations')
            .getPublicUrl(fileName);
            
        if (!publicUrl) throw new Error("Could not get public URL for the uploaded image.");

        const { error: insertError } = await supabase
            .from('creations')
            .insert({ user_id: userId, prompt, image_url: publicUrl });
            
        if (insertError) throw insertError;
    } catch (error) {
        // This is a non-critical background task. Don't surface the error to the user,
        // but log it for debugging. The main function (image generation) was successful.
        console.error("Error saving creation:", error);
    }
};
