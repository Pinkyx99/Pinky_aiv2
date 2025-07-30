
import React, { useState } from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { Button } from '../components/ui/Common';
import { PlayCircleIcon, SparklesIcon } from '../components/ui/Icons';

const panelClass = "bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 sm:p-8";
const inputClasses = "block w-full rounded-lg border-0 py-2.5 bg-white/5 text-gray-200 shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

const VideoGeneratorPage = () => {
    const [prompt, setPrompt] = useState('');
    const [aspectRatio, setAspectRatio] = useState('16:9');
    
    return (
        <PageWrapper title="AI Video Generator" description="Generate high-quality, real video clips from a text prompt.">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                <div className="lg:col-span-2">
                    <div className="aspect-video w-full bg-[#0d111c] rounded-3xl flex items-center justify-center border-2 border-dashed border-white/10 relative overflow-hidden">
                         <div className="text-center text-gray-500 p-8">
                            <PlayCircleIcon className="w-20 h-20 mx-auto text-gray-600"/>
                            <h3 className="font-bold mt-4 text-xl text-gray-400">Coming Soon</h3>
                            <p className="font-semibold mt-2">The future of creation is on its way.</p>
                        </div>
                    </div>
                </div>
                <div className={`${panelClass} flex flex-col space-y-6`}>
                     <div>
                        <label htmlFor="prompt" className="block text-sm font-medium leading-6 text-gray-300 mb-2">Prompt</label>
                        <div className="relative">
                            <textarea id="prompt" rows={5} value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="e.g., 'An astronaut riding a horse on Mars, cinematic, hyperrealistic'" className={inputClasses} disabled />
                            <Button 
                                variant="secondary" 
                                disabled
                                className="absolute bottom-2.5 right-2.5 !px-2 !py-1 text-xs"
                                title="Enhance Prompt"
                            >
                                <SparklesIcon className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                    <div>
                         <label className="text-sm font-medium leading-6 text-gray-300 mb-2">Aspect Ratio</label>
                        <div className="grid grid-cols-3 gap-2">
                            {['16:9', '1:1', '9:16'].map(ratio => (
                                <Button key={ratio} onClick={() => setAspectRatio(ratio)} variant={aspectRatio === ratio ? 'primary' : 'secondary'} disabled>{ratio}</Button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="mt-auto">
                        <Button disabled className="w-full">
                           <PlayCircleIcon className="w-5 h-5 mr-2" />Generate Video
                        </Button>
                    </div>
                </div>
            </div>
             <div className="mt-8 p-4 bg-purple-900/50 backdrop-blur-sm border-l-4 border-purple-500 text-purple-300 rounded-r-lg">
                <p className="font-semibold">A Note on Text-to-Video Technology</p>
                <p className="text-sm mt-1">
                    True text-to-video generation is a cutting-edge technology that requires immense computational power, making it very expensive to operate. While we are excited to integrate it, we are currently waiting for state-of-the-art models, like Google's Veo, to become widely available through a public API. This page is a preview of the user experience we're building for that future. Thank you for your patience!
                </p>
            </div>
        </PageWrapper>
    );
};
export { VideoGeneratorPage };