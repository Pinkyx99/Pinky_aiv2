import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const WebpToJpgPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="WebP to JPG Converter"
            description="Convert WEBP image files to JPG format."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-200px)] mt-4 rounded-2xl overflow-hidden"
            >
                <iframe
                    src="https://seostudio.tools/webp-to-jpg"
                    className="w-full h-[calc(100%+600px)] -translate-y-[200px] border-0"
                    title="WebP to JPG Converter"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { WebpToJpgPage };
