import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const AiCarGeneratorPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="AI Car Generator"
            description="Design and visualize custom cars, from concepts to photorealistic renders."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-300px)] mt-4 rounded-2xl overflow-hidden"
            >
                <iframe
                    src="https://vheer.com/app/ai-car-generator"
                    className="w-full h-[calc(100%+160px)] -translate-y-40 border-0"
                    title="AI Car Generator"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { AiCarGeneratorPage };
