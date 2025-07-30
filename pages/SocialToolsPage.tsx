import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const SocialToolsPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="Social Media Tools"
            description="A suite of tools for social media management."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-200px)] mt-4 rounded-2xl overflow-hidden"
            >
                <iframe
                    src="https://100freeonlinetools.vercel.app/tools/social-tools"
                    className="w-full h-[calc(100%+500px)] -translate-y-[70px] md:h-[calc(100%+700px)] md:-translate-y-[105px] border-0"
                    title="Social Media Tools"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { SocialToolsPage };