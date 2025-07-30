import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const BackgroundRemoverBackupPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="Background Remover (Backup)"
            description="Alternative tool to instantly remove image backgrounds."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-200px)] mt-4 rounded-2xl overflow-hidden"
            >
                <iframe
                    src="https://100freeonlinetools.vercel.app/tools/image-tools/background-remover.html"
                    className="w-full h-[calc(100%+400px)] -translate-y-[80px] md:h-[calc(100%+450px)] md:-translate-y-[120px] border-0"
                    title="Background Remover (Backup)"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { BackgroundRemoverBackupPage };