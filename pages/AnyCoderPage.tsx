
import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const AnyCoderPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="AnyCoder"
            description="An advanced AI coding assistant to help you write, debug, and learn code."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-200px)] mt-4"
            >
                <iframe
                    src="https://akhaliq-anycoder.hf.space?__theme=dark"
                    className="w-full h-full border-0 rounded-2xl"
                    title="AnyCoder"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { AnyCoderPage };
