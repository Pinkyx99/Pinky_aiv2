
import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const FluxImageGeneratorPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="Image Generator"
            description="Generate images using the FLUX.1-schnell model."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-200px)] mt-4"
            >
                <iframe
                    src="https://llamameta-fake-flux-pro-unlimited.hf.space?__theme=dark"
                    className="w-full h-full border-0 rounded-2xl"
                    title="Image Generator"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { FluxImageGeneratorPage };