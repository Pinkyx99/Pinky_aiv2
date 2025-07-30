
import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { Tool } from '../types';

export const ComingSoonPage: React.FC<{ tool: Tool }> = ({ tool }) => {
    return (
        <PageWrapper title={tool.title} description={tool.description}>
            <div className="flex flex-col items-center justify-center text-center bg-gray-950/40 backdrop-blur-xl border border-blue-500/20 p-12 rounded-3xl min-h-[400px] mt-8">
                <div className={`w-24 h-24 rounded-2xl flex items-center justify-center mb-8 shadow-lg bg-blue-600/10`}>
                    <tool.Icon className="w-12 h-12 text-blue-400" />
                </div>
                <h2 className="text-4xl font-bold text-white">Coming Soon!</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-md">
                    We're working hard to bring this feature to you. Stay tuned for updates!
                </p>
            </div>
        </PageWrapper>
    );
};