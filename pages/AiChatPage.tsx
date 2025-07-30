
import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const AiChatPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="AI Chat"
            description="Chat with a versatile AI model powered by the community."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-200px)] mt-4"
            >
                <iframe
                    src="https://umint-ai.hf.space?__theme=dark"
                    className="w-full h-full border-0 rounded-2xl"
                    title="AI Chat"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { AiChatPage };
