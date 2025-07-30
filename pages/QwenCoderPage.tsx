
import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const QwenCoderPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="Qwen Coder"
            description="Code generation and problem-solving with Qwen2.5."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-200px)] mt-4"
            >
                <iframe
                    src="https://qwen-qwen2-5-coder-artifacts.hf.space?__theme=dark"
                    className="w-full h-full border-0 rounded-2xl"
                    title="Qwen Coder"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { QwenCoderPage };
