import type { Tool } from '../types';
import {
  FaceSmileIcon, PhotoIcon, ImageIcon, ImageMagicIcon, TShirtIcon, MusicNoteIcon,
  CodeBracketIcon,
  ChatBubbleIcon,
  ObjectRemoverIcon,
  SwatchIcon,
  PencilIcon,
  UserIcon,
  QrCodeIcon,
  DownloadIcon,
  ArrowPathIcon,
  BookOpenIcon,
  FilmIcon,
  SparklesIcon,
} from '../components/ui/Icons';

export const TOOLS: Tool[] = [
  // --- AI Tools ---
  { id: 'image-generator', title: 'AI Image Generator', description: 'Create stunning images from text with Gemini.', path: '/image-generator', Icon: SparklesIcon, superCategory: 'AI Tools' },
  { id: 'image-generator-flux', title: 'Image Generator (Flux)', description: 'Alternative image generation via FLUX Pro.', path: '/image-generator-flux', Icon: ImageIcon, superCategory: 'AI Tools' },
  { id: 'image-to-image-ai', title: 'Image to Image AI', description: 'Re-imagine images with a text prompt', path: '/image-to-image-ai', Icon: ImageMagicIcon, superCategory: 'AI Tools', isBeta: true },
  { id: 'face-swapper', title: 'Face-swapper', description: 'Instantly swap faces between photos', path: '/face-swapper', Icon: FaceSmileIcon, superCategory: 'AI Tools' },
  { id: 'video-face-swapper', title: 'Video Face Swapper', description: 'Swap faces in video clips', path: '/video-face-swapper', Icon: FaceSmileIcon, superCategory: 'AI Tools' },
  { id: 'image-stylizer', title: 'Image Stylizer', description: 'Transfer the style of one image to another', path: '/image-stylizer', Icon: SwatchIcon, superCategory: 'AI Tools' },
  { id: 'photo-colorizer', title: 'Photo Colorizer', description: 'Bring B&W photos to life with color', path: '/photo-colorizer', Icon: SwatchIcon, superCategory: 'AI Tools' },
  { id: 'ai-background-changer', title: 'AI Background Changer', description: 'Change the background of any image using generative AI.', path: '/ai-background-changer', Icon: PhotoIcon, superCategory: 'AI Tools' },
  { id: 'text-behind-image', title: 'Text Behind Image', description: 'Create stunning images with text artfully placed behind subjects.', path: '/text-behind-image', Icon: PencilIcon, superCategory: 'AI Tools' },
  { id: 'ai-food-generator', title: 'AI Food Generator', description: 'Generate mouth-watering, realistic images of any food you can imagine.', path: '/ai-food-generator', Icon: SparklesIcon, superCategory: 'AI Tools' },
  { id: 'action-figure-generator', title: 'Action Figure Generator', description: 'Turn yourself or any character concept into a detailed action figure.', path: '/action-figure-generator', Icon: UserIcon, superCategory: 'AI Tools' },
  { id: 'anime-art-generator', title: 'Anime Art Generator', description: 'Create beautiful, high-quality anime-style artwork and characters.', path: '/anime-art-generator', Icon: FaceSmileIcon, superCategory: 'AI Tools' },
  { id: 'ai-car-generator', title: 'AI Car Generator', description: 'Design and visualize custom cars, from concepts to photorealistic renders.', path: '/ai-car-generator', Icon: ImageIcon, superCategory: 'AI Tools' },
  { id: 'furry-art-generator', title: 'Furry Art Generator', description: 'Generate unique SFW furry and anthropomorphic character art.', path: '/furry-art-generator', Icon: FaceSmileIcon, superCategory: 'AI Tools' },
  { id: 'headshot-generator', title: 'AI Headshot Generator', description: 'Create professional and realistic AI-generated headshots.', path: '/headshot-generator', Icon: UserIcon, superCategory: 'AI Tools' },
  { id: 'virtual-try-on', title: 'Virtual Try-On', description: 'See how clothes look on a model', path: '/virtual-try-on', Icon: TShirtIcon, superCategory: 'AI Tools' },
  { id: 'text-to-song', title: 'Text To Song', description: 'Generate melodies from text prompts', path: '/text-to-song', Icon: MusicNoteIcon, superCategory: 'AI Tools' },
  { id: 'doodle-animator', title: 'Doodle Animator', description: 'Animate your simple doodles and sketches', path: '/doodle-animator', Icon: PencilIcon, superCategory: 'AI Tools' },
  { id: 'image-to-video', title: 'Image to Video', description: 'Animate a still image with a text prompt.', path: '/image-to-video', Icon: FilmIcon, superCategory: 'AI Tools', isBeta: true },
  { id: 'video-to-text-generator', title: 'Video to Text', description: 'Transcribe spoken words from video files.', path: '/video-to-text-generator', Icon: BookOpenIcon, superCategory: 'AI Tools' },
  { id: 'video-to-anime-generator', title: 'Video to Anime', description: 'Convert real-life videos into various anime styles.', path: '/video-to-anime-generator', Icon: FilmIcon, superCategory: 'AI Tools' },
  { id: 'audio-silence-remover', title: 'Audio Silence Remover', description: 'Automatically remove silent parts from audio files.', path: '/audio-silence-remover', Icon: MusicNoteIcon, superCategory: 'AI Tools' },
  { id: 'anycoder', title: 'AnyCoder', description: 'Advanced AI coding assistant.', path: '/anycoder', Icon: CodeBracketIcon, superCategory: 'AI Tools' },
  { id: 'instant-coder', title: 'Instant Coder', description: 'Get code snippets instantly from a prompt', path: '/instant-coder', Icon: CodeBracketIcon, superCategory: 'AI Tools' },
  { id: 'qwen-coder', title: 'Qwen Coder', description: 'Code generation with Qwen2.5', path: '/qwen-coder', Icon: CodeBracketIcon, superCategory: 'AI Tools' },
  { id: 'ai-chat', title: 'AI Chat', description: 'Chat with a versatile AI model.', path: '/ai-chat', Icon: ChatBubbleIcon, superCategory: 'AI Tools' },
  { id: 'gemini-codrawing', title: 'Gemini Co-Drawing', description: 'Draw and create images together with a Gemini-powered AI.', path: '/gemini-codrawing', Icon: PencilIcon, superCategory: 'AI Tools' },
  
  // --- Utilities ---
  { id: 'obj-remover', title: 'AI Object Remover', description: 'Remove objects, people, or text', path: '/object-changer', Icon: ObjectRemoverIcon, superCategory: 'Utilities' },
  { id: 'bg-remover', title: 'Background remover', description: 'Instantly remove image backgrounds', path: '/background-remover', Icon: PhotoIcon, superCategory: 'Utilities' },
  { id: 'bg-remover-backup', title: 'Background Remover (Backup)', description: 'Alternative tool to instantly remove image backgrounds.', path: '/background-remover-backup', Icon: PhotoIcon, superCategory: 'Utilities' },
  { id: 'profile-photo-maker', title: 'Image Editor', description: 'A simple online image editor to make quick adjustments.', path: '/profile-photo-maker', Icon: PencilIcon, superCategory: 'Utilities' },
  { id: 'qr-code-generator', title: 'QR Code Generator', description: 'Create QR codes for URLs, text, and more.', path: '/qr-code-generator', Icon: QrCodeIcon, superCategory: 'Utilities' },

  // --- Converters ---
  { id: 'webp-to-jpg', title: 'WebP to JPG Converter', description: 'Convert WEBP image files to JPG format.', path: '/webp-to-jpg', Icon: ArrowPathIcon, superCategory: 'Converters' },
  { id: 'jpg-to-png', title: 'JPG to PNG Converter', description: 'Convert JPG image files to PNG format.', path: '/jpg-to-png', Icon: ArrowPathIcon, superCategory: 'Converters' },
  { id: 'png-to-jpg', title: 'PNG to JPG Converter', description: 'Convert PNG image files to JPG format.', path: '/png-to-jpg', Icon: ArrowPathIcon, superCategory: 'Converters' },

  // --- Social ---
  { id: 'yt-video-downloader', title: 'YouTube Downloader', description: 'Download videos from YouTube.', path: '/yt-video-downloader', Icon: DownloadIcon, superCategory: 'Social' },
  { id: 'youtube-thumbnail-downloader', title: 'YouTube Thumbnail Downloader', description: 'Download high-quality thumbnails from any YouTube video.', path: '/youtube-thumbnail-downloader', Icon: DownloadIcon, superCategory: 'Social' },
  { id: 'instagram-downloader', title: 'Instagram Downloader', description: 'Download videos, photos, and stories from Instagram.', path: '/instagram-downloader', Icon: DownloadIcon, superCategory: 'Social' },
  { id: 'twitter-downloader', title: 'Twitter Downloader', description: 'Download videos and GIFs from Twitter.', path: '/twitter-downloader', Icon: DownloadIcon, superCategory: 'Social' },
  { id: 'tiktok-downloader', title: 'TikTok Downloader', description: 'Download TikTok videos without watermarks.', path: '/tiktok-downloader', Icon: DownloadIcon, superCategory: 'Social' },
];