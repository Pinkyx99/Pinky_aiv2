
import React, { useState } from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { Button, ImageUploader } from '../components/ui/Common';
import { PhotoIcon, BookOpenIcon } from '../components/ui/Icons';

const ComicPanel: React.FC<{ index: number, onImageUpload: (index: number, file: File) => void, image: string | null }> = ({ index, onImageUpload, image }) => {
    const [text, setText] = useState('');

    return (
        <div className="bg-gray-950/40 backdrop-blur-xl border border-blue-500/20 flex flex-col rounded-2xl overflow-hidden">
            <ImageUploader onImageUpload={(file) => onImageUpload(index, file)}>
                <div className="aspect-square w-full bg-black/20 flex items-center justify-center cursor-pointer hover:bg-black/40 transition-colors">
                    {image ? <img src={image} alt={`Panel ${index + 1}`} className="w-full h-full object-cover"/> : <PhotoIcon className="w-12 h-12 text-gray-600" />}
                </div>
            </ImageUploader>
            <div className="p-2 border-t-2 border-blue-500/20">
                <input 
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add text..."
                    className="w-full bg-transparent text-center text-sm focus:ring-0 border-0 font-semibold text-white placeholder:text-gray-500"
                    style={{ fontFamily: '"Comic Sans MS", "Comic Neue", cursive' }}
                />
            </div>
        </div>
    );
};

const ComicStripMakerPage = () => {
    const [panels, setPanels] = useState<(string | null)[]>([null, null, null, null]);

    const handleImageUpload = (index: number, file: File) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const newPanels = [...panels];
            newPanels[index] = reader.result as string;
            setPanels(newPanels);
        };
        reader.readAsDataURL(file);
    };

    return (
        <PageWrapper title="Comic Strip Maker" description="Turn your photos into a fun comic strip.">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {panels.map((p, i) => (
                    <ComicPanel key={i} index={i} onImageUpload={handleImageUpload} image={p} />
                ))}
            </div>
            <div className="text-center mt-8">
                <Button>
                    <BookOpenIcon className="w-5 h-5 mr-2"/>
                    Generate Comic Style (Demo)
                </Button>
            </div>
            <div className="mt-8 p-4 bg-indigo-900/50 border-l-4 border-indigo-500 text-indigo-300 rounded-r-lg">
                <p className="font-semibold">Feature Demonstration</p>
                <p className="text-sm">This UI showcases the UI for assembling a comic strip. A full implementation would use an AI model to apply a consistent comic book art style across all panels and potentially auto-generate speech bubble layouts.</p>
            </div>
        </PageWrapper>
    );
};

export { ComicStripMakerPage };