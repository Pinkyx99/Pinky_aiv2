import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const JpgToPngPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="JPG to PNG Converter"
            description="Convert JPG image files to PNG format."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-200px)] mt-4 rounded-2xl overflow-hidden"
            >
                <iframe
                    src="https://seostudio.tools/jpg-to-png"
                    className="w-full h-[calc(100%+600px)] -translate-y-[200px] border-0"
                    title="JPG to PNG Converter"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { JpgToPngPage };
