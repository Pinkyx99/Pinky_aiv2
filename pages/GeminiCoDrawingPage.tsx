
import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const GeminiCoDrawingPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="Gemini Co-Drawing"
            description="Draw and create images together with a Gemini-powered AI."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-200px)] mt-4"
            >
                <iframe
                    src="https://trudy-gemini-codrawing.hf.space?__theme=dark"
                    className="w-full h-full border-0 rounded-2xl"
                    title="Gemini Co-Drawing"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { GeminiCoDrawingPage };
