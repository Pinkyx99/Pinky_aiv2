





import React, { useState, useEffect, useRef } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Sidebar } from './components/ui/Navbar';
import { ObjectChangerPage } from './pages/ObjectChangerPage';
import { BackgroundRemoverPage } from './pages/BackgroundRemoverPage';
import { FaceSwapperPage } from './pages/FaceSwapperPage';
import { AnimatePresence } from 'framer-motion';
import { Button } from './components/ui/Common';
import { MenuIcon, LogoIcon } from './components/ui/Icons';
import { KolorsImageToImagePage } from './pages/KolorsImageToImagePage';
import { VirtualTryOnPage } from './pages/VirtualTryOnPage';
import { TextToSongPage } from './pages/TextToSongPage';
import { ImageGeneratorPage } from './pages/ImageGeneratorPage';
import { FluxImageGeneratorPage } from './pages/FluxImageGeneratorPage';
import { AnyCoderPage } from './pages/AnyCoderPage';
import { AiChatPage } from './pages/AiChatPage';
import { ScrollProvider } from './contexts/ScrollContext';
import { PhotoColorizationPage } from './pages/PhotoColorizationPage';
import { ImageStylizerPage } from './pages/ImageStylizerPage';
import { InstantCoderPage } from './pages/InstantCoderPage';
import { QwenCoderPage } from './pages/QwenCoderPage';
import { VideoFaceSwapperPage } from './pages/VideoFaceSwapperPage';
import { DoodleAnimatorPage } from './pages/DoodleAnimatorPage';
import { GeminiCoDrawingPage } from './pages/GeminiCoDrawingPage';
import { ProfilePhotoMakerPage } from './pages/ProfilePhotoMakerPage';
import { BackgroundRemoverBackupPage } from './pages/BackgroundRemoverBackupPage';
import { QrCodeGeneratorPage } from './pages/QrCodeGeneratorPage';
import { YouTubeDownloaderPage } from './pages/YouTubeDownloaderPage';
import { InstagramDownloaderPage } from './pages/InstagramDownloaderPage';
import { TwitterDownloaderPage } from './pages/TwitterDownloaderPage';
import { TikTokDownloaderPage } from './pages/TikTokDownloaderPage';
import { YouTubeThumbnailDownloaderPage } from './pages/YouTubeThumbnailDownloaderPage';
import { WebpToJpgPage } from './pages/WebpToJpgPage';
import { JpgToPngPage } from './pages/JpgToPngPage';
import { PngToJpgPage } from './pages/PngToJpgPage';
import { VideoToTextGeneratorPage } from './pages/VideoToTextGeneratorPage';
import { VideoToAnimeGeneratorPage } from './pages/VideoToAnimeGeneratorPage';
import { AudioSilenceRemoverPage } from './pages/AudioSilenceRemoverPage';
import { BackgroundChangerPage } from './pages/BackgroundChangerPage';
import { TextBehindImagePage } from './pages/TextBehindImagePage';
import { AiFoodGeneratorPage } from './pages/AiFoodGeneratorPage';
import { ActionFigureGeneratorPage } from './pages/ActionFigureGeneratorPage';
import { AnimeArtGeneratorPage } from './pages/AnimeArtGeneratorPage';
import { AiCarGeneratorPage } from './pages/AiCarGeneratorPage';
import { FurryArtGeneratorPage } from './pages/FurryArtGeneratorPage';
import { HeadshotGeneratorPage } from './pages/HeadshotGeneratorPage';
import { ImageToVideoPage } from './pages/ImageToVideoPage';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/image-generator" element={<ImageGeneratorPage />} />
                <Route path="/image-generator-flux" element={<FluxImageGeneratorPage />} />
                <Route path="/object-changer" element={<ObjectChangerPage />} />
                <Route path="/background-remover" element={<BackgroundRemoverPage />} />
                <Route path="/face-swapper" element={<FaceSwapperPage />} />
                <Route path="/image-to-image-ai" element={<KolorsImageToImagePage />} />
                <Route path="/virtual-try-on" element={<VirtualTryOnPage />} />
                <Route path="/text-to-song" element={<TextToSongPage />} />
                <Route path="/anycoder" element={<AnyCoderPage />} />
                <Route path="/ai-chat" element={<AiChatPage />} />
                <Route path="/photo-colorizer" element={<PhotoColorizationPage />} />
                <Route path="/image-stylizer" element={<ImageStylizerPage />} />
                <Route path="/instant-coder" element={<InstantCoderPage />} />
                <Route path="/qwen-coder" element={<QwenCoderPage />} />
                <Route path="/video-face-swapper" element={<VideoFaceSwapperPage />} />
                <Route path="/doodle-animator" element={<DoodleAnimatorPage />} />
                <Route path="/image-to-video" element={<ImageToVideoPage />} />
                <Route path="/gemini-codrawing" element={<GeminiCoDrawingPage />} />
                <Route path="/profile-photo-maker" element={<ProfilePhotoMakerPage />} />
                <Route path="/background-remover-backup" element={<BackgroundRemoverBackupPage />} />
                <Route path="/qr-code-generator" element={<QrCodeGeneratorPage />} />
                <Route path="/yt-video-downloader" element={<YouTubeDownloaderPage />} />
                <Route path="/youtube-thumbnail-downloader" element={<YouTubeThumbnailDownloaderPage />} />
                <Route path="/instagram-downloader" element={<InstagramDownloaderPage />} />
                <Route path="/twitter-downloader" element={<TwitterDownloaderPage />} />
                <Route path="/tiktok-downloader" element={<TikTokDownloaderPage />} />
                <Route path="/webp-to-jpg" element={<WebpToJpgPage />} />
                <Route path="/jpg-to-png" element={<JpgToPngPage />} />
                <Route path="/png-to-jpg" element={<PngToJpgPage />} />
                <Route path="/video-to-text-generator" element={<VideoToTextGeneratorPage />} />
                <Route path="/video-to-anime-generator" element={<VideoToAnimeGeneratorPage />} />
                <Route path="/audio-silence-remover" element={<AudioSilenceRemoverPage />} />
                <Route path="/ai-background-changer" element={<BackgroundChangerPage />} />
                <Route path="/text-behind-image" element={<TextBehindImagePage />} />
                <Route path="/ai-food-generator" element={<AiFoodGeneratorPage />} />
                <Route path="/action-figure-generator" element={<ActionFigureGeneratorPage />} />
                <Route path="/anime-art-generator" element={<AnimeArtGeneratorPage />} />
                <Route path="/ai-car-generator" element={<AiCarGeneratorPage />} />
                <Route path="/furry-art-generator" element={<FurryArtGeneratorPage />} />
                <Route path="/headshot-generator" element={<HeadshotGeneratorPage />} />
            </Routes>
        </AnimatePresence>
    );
};

const SpotlightEffect = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            document.documentElement.style.setProperty('--x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--y', `${e.clientY}px`);
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <div className="relative isolate">{children}</div>;
};


const MainAppLayout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const mainScrollRef = useRef<HTMLDivElement>(null);

    return (
        <div className="flex h-screen bg-[#05040a]/80 text-gray-200 font-sans relative">
             <div 
                className="pointer-events-none fixed inset-0 z-30 transition duration-300"
                style={{
                  background: 'radial-gradient(600px at var(--x) var(--y), rgba(168, 85, 247, 0.15), transparent 80%)'
                }}
            />
            <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="flex-1 flex flex-col min-w-0">
                <header className="md:hidden sticky top-0 bg-[#05040a]/60 backdrop-blur-lg z-20 flex items-center justify-between h-20 px-4 border-b border-white/10">
                    <Button variant="secondary" onClick={() => setSidebarOpen(true)} className="!p-2" aria-label="Open menu">
                        <MenuIcon className="h-6 w-6" />
                    </Button>
                    <div className="flex items-center space-x-2">
                        <LogoIcon className="h-7 w-7" />
                        <h1 className="text-lg font-bold text-white tracking-tight">
                            Pinky AI
                        </h1>
                    </div>
                    <div className="w-10"></div>
                </header>
                
                <main ref={mainScrollRef} className="flex-1 overflow-y-auto">
                    <ScrollProvider scrollableRef={mainScrollRef}>
                        <div className="p-4 sm:p-6 lg:p-8">
                            <AnimatedRoutes />
                        </div>
                    </ScrollProvider>
                </main>
            </div>
        </div>
    );
};

function App() {
  return (
    <HashRouter>
      <SpotlightEffect>
          <MainAppLayout />
      </SpotlightEffect>
    </HashRouter>
  );
}

export default App;