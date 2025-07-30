
import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const KolorsImageToImagePage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="Image to Image AI"
            description="Re-imagine images with a text prompt using the Kolors Character with Flux model."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-200px)] mt-4"
            >
                <iframe
                    src="https://kwai-kolors-kolors-character-with-flux.hf.space?__theme=dark"
                    className="w-full h-full border-0 rounded-2xl"
                    title="Image to Image AI"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { KolorsImageToImagePage };
