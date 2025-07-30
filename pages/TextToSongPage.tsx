
import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const TextToSongPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="Text To Song"
            description="Generate melodies from text prompts using songsLabAi."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-200px)] mt-4"
            >
                <iframe
                    src="https://gpagejr12-songslabai-melody.hf.space?__theme=dark"
                    className="w-full h-full border-0 rounded-2xl"
                    title="Text To Song"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { TextToSongPage };
