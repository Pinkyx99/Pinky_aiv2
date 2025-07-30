import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const QrCodeGeneratorPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="QR Code Generator"
            description="Create QR codes for URLs, text, and more."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-200px)] mt-4 rounded-2xl overflow-hidden"
            >
                <iframe
                    src="https://100freeonlinetools.vercel.app/tools/image-tools/qr-generator.html"
                    className="w-full h-[calc(100%+400px)] -translate-y-[75px] md:h-[calc(100%+450px)] md:-translate-y-[110px] border-0"
                    title="QR Code Generator"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { QrCodeGeneratorPage };