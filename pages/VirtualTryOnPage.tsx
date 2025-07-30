
import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const VirtualTryOnPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="Virtual Try-On"
            description="See how clothes look on a model before you buy, powered by WeShopAI."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-200px)] mt-4"
            >
                <iframe
                    src="https://weshopai-weshopai-virtual-try-on.hf.space?__theme=dark"
                    className="w-full h-full border-0 rounded-2xl"
                    title="Virtual Try-On"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { VirtualTryOnPage };
