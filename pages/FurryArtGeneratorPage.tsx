import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const FurryArtGeneratorPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="Furry Art Generator"
            description="Generate unique SFW furry and anthropomorphic character art."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-300px)] mt-4 rounded-2xl overflow-hidden"
            >
                <iframe
                    src="https://vheer.com/app/furry-art-generator"
                    className="w-full h-[calc(100%+160px)] -translate-y-40 border-0"
                    title="Furry Art Generator"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { FurryArtGeneratorPage };
