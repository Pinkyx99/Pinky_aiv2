
import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const AudioSilenceRemoverPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="Audio Silence Remover"
            description="Automatically remove silent parts from audio files."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-200px)] mt-4"
            >
                <iframe
                    src="https://huggingface.co/spaces/NeuralFalcon/Remove-Silence-From-Audio?__theme=dark"
                    className="w-full h-full border-0 rounded-2xl"
                    title="Audio Silence Remover"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { AudioSilenceRemoverPage };
