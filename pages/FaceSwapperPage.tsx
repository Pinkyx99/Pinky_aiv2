
import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

export const FaceSwapperPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };

    return (
        <PageWrapper
            title="AI Face Swapper"
            description="Swap faces between two images with a single click, powered by AI."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-200px)] mt-4"
            >
                <iframe
                    src="https://felixrosberg-face-swap.hf.space?__theme=dark"
                    className="w-full h-full border-0 rounded-2xl"
                    title="AI Face Swapper"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};
