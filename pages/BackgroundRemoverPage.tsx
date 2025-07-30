
import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const BackgroundRemoverPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="AI Background Remover"
            description="Instantly remove the background from any image using state-of-the-art AI."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-200px)] mt-4"
            >
                <iframe
                    src="https://kenjiedec-rembg.hf.space?__theme=dark"
                    className="w-full h-full border-0 rounded-2xl"
                    title="AI Background Remover"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { BackgroundRemoverPage };
