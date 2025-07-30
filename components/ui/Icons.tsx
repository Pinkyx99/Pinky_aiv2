


import React from 'react';
import { motion, HTMLMotionProps, SVGMotionProps } from 'framer-motion';

export const LogoIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = (props) => (
  <img 
    src="https://i.imgur.com/Epycwvj.png" 
    alt="Pinky AI Logo" 
    {...props} 
    className={`rounded-full object-cover ${props.className || ''}`}
  />
);

export const MagicWandIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.408 3 3 0 00-1.128 5.783 2.25 2.25 0 01-2.408 2.4 3 3 0 00-5.782-1.128 2.25 2.25 0 01-2.4-2.408 3 3 0 00-1.128-5.783 2.25 2.25 0 012.4-2.408 3 3 0 001.128-5.782 2.25 2.25 0 012.408-2.4 3 3 0 005.782 1.128 2.25 2.25 0 012.408 2.4z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.684-5.842 1.5 1.5 0 00.316-1.156 9.004 9.004 0 00-8.684-5.842 1.5 1.5 0 00-1.156-.316 9.004 9.004 0 00-5.842 8.684 1.5 1.5 0 00.316 1.156 9.004 9.004 0 005.842 8.684z" />
  </svg>
);

export const SparklesIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.5 21.75l-.398-1.188a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.188-.398a2.25 2.25 0 001.423-1.423L16.5 15.75l.398 1.188a2.25 2.25 0 001.423 1.423L19.5 18.75l-1.188.398a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);

export const SwatchIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402a3.75 3.75 0 00-.615-5.883A3.75 3.75 0 009.7 4.097L3.299 10.5a3.75 3.75 0 000 5.304zm3.536-3.536a2.25 2.25 0 00-3.182-3.182m3.182 3.182a2.25 2.25 0 003.182 0M1.5 21a2.25 2.25 0 003.182 0l6.401-6.402a2.25 2.25 0 00-3.182-3.182L1.5 17.818a2.25 2.25 0 000 3.182z" />
  </svg>
);

export const FaceSmileIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9 9.75h.008v.008H9v-.008zm6 0h.008v.008H15v-.008z" />
  </svg>
);

export const FilmIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3.75v3.75m3.75-3.75v3.75m-7.5-3.75L3 16.5m18 0l-3.75 3.75M3 16.5l3.75-3.75m0 0L12 12l5.25 5.25m-5.25-5.25L12 12" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 9.75h16.5M3.75 12.75h16.5M3.75 15.75h16.5M3.75 18.75h16.5" />
    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5"/>
  </svg>
);

export const BookOpenIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6-2.292m0 0v14.25" />
  </svg>
);

export const PhotoIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
);

export const PencilSlashIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.52.923 1.258 1.758 2.122 2.454l2.087-2.087-.362-3.62A23.003 23.003 0 0012 3c-3.325 0-6.42.923-9.13 2.502l2.022 2.022c.63-.448 1.337-.818 2.08-1.125l-2.496 3.03M11.42 15.17c-.52-.923-1.258-1.758-2.122-2.454l-2.087 2.087.362 3.62a23.003 23.003 0 004.254.341l2.496-3.03z" />
    </svg>
);

export const PencilIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>
);

export const XMarkIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const DownloadIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);

export const RefreshIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0l3.181-3.183m-11.664 0l4.992-4.993m-4.993 0l-3.181 3.183a8.25 8.25 0 000 11.664l3.181 3.183" />
    </svg>
);

export const HeartIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
);

export const MenuIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

export const PlayCircleIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
  </svg>
);

export const ImageIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 3.6H3C2.27452 3.6 1.68 4.19452 1.68 4.92V19.08C1.68 19.8055 2.27452 20.4 3 20.4H21C21.7255 20.4 22.32 19.8055 22.32 19.08V4.92C22.32 4.19452 21.7255 3.6 21 3.6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.68 15.36L7.2 11.04C7.5457 10.7629 8.01237 10.6865 8.41163 10.8359C8.8109 10.9852 9.11765 11.3418 9.24 11.76L11.4 18.24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.84 15.36L18.6 13.2C18.9493 12.9645 19.4182 12.9231 19.8163 13.089C20.2144 13.2549 20.5113 13.6103 20.628 14.04L22.32 20.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.12 9.12C15.12 9.71648 14.6365 10.2 14.04 10.2C13.4435 10.2 12.96 9.71648 12.96 9.12C12.96 8.52352 13.4435 8.04 14.04 8.04C14.6365 8.04 15.12 8.52352 15.12 9.12Z" fill="currentColor"/>
  </svg>
);

export const PromptIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 20.4H2.4V3.6H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 20.4H21.6V3.6H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 3.6V20.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.8 7.19995H6.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.8 10.8H6.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.8 14.4H6.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const LogoGenIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.6 13.8V10.2C21.6 4.90294 17.2971 0.600002 12 0.600002C6.70294 0.600002 2.4 4.90294 2.4 10.2V13.8C2.4 19.0971 6.70294 23.4 12 23.4C17.2971 23.4 21.6 19.0971 21.6 13.8Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 10.2C13.9882 10.2 15.6 8.58823 15.6 6.6C15.6 4.61177 13.9882 3 12 3C10.0118 3 8.4 4.61177 8.4 6.6C8.4 8.58823 10.0118 10.2 12 10.2Z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const ObjectRemoverIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.6 3.6L2.4 20.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2.4 3.6L21.6 20.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ImageMagicIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.5 15.5V20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 14C12.1046 14 13 13.1046 13 12C13 10.8954 12.1046 10 11 10C9.89543 10 9 10.8954 9 12C9 13.1046 9.89543 14 11 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 13.44V7.6C2 4.48 4.48 2 7.6 2H16.4C19.52 2 22 4.48 22 7.6V16.4C22 19.52 19.52 22 16.4 22H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const TShirtIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.34961 12.0293L11.9996 14.6793L14.6496 12.0293" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 21.0098V14.6198" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.21 10.5703C19.68 10.8603 20.27 10.9603 20.85 10.8303C21.43 10.7003 21.93 10.3503 22.25 9.86032L22.26 9.84032C22.88 8.91032 22.46 7.72032 21.53 7.10032C21.45 7.04032 21.36 6.99032 21.28 6.94032L18.42 5.25032C18.15 5.09032 17.82 5.01032 17.49 5.02032C16.83 5.04032 16.21 5.48032 16.03 6.12032L15.39 8.35032C15.21 9.02032 15.42 9.73032 15.9 10.2303C16.37 10.7303 17.06 10.9203 17.7 10.7303" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.78999 10.5703C4.31999 10.8603 3.72999 10.9603 3.14999 10.8303C2.56999 10.7003 2.06999 10.3503 1.74999 9.86032L1.73999 9.84032C1.11999 8.91032 1.53999 7.72032 2.46999 7.10032C2.54999 7.04032 2.63999 6.99032 2.71999 6.94032L5.57999 5.25032C5.84999 5.09032 6.17999 5.01032 6.50999 5.02032C7.16999 5.04032 7.78999 5.48032 7.96999 6.12032L8.60999 8.35032C8.78999 9.02032 8.57999 9.73032 8.09999 10.2303C7.62999 10.7303 6.93999 10.9203 6.29999 10.7303" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.7 10.7305L15.95 10.2105C15.48 10.0905 14.99 10.2105 14.65 10.5505C14.31 10.8905 14.19 11.3805 14.31 11.8505L15.31 15.8505C15.44 16.3205 15.82 16.6905 16.3 16.8005L16.33 16.8105C17.36 17.0505 18.42 16.3305 18.66 15.3005L19.4 12.3305C19.64 11.3005 18.92 10.2405 17.89 10.0005C17.82 9.9805 17.76 9.9705 17.7 9.9705" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.3 10.7305L8.05 10.2105C8.52 10.0905 9.01 10.2105 9.35 10.5505C9.69 10.8905 9.81 11.3805 9.69 11.8505L8.69 15.8505C8.56 16.3205 8.18 16.6905 7.7 16.8005L7.67 16.8105C6.64 17.0505 5.58 16.3305 5.34 15.3005L4.6 12.3305C4.36 11.3005 5.08 10.2405 6.11 10.0005C6.18 9.9805 6.24 9.9705 6.3 9.9705" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const MusicNoteIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.5C16.1421 21.5 19.5 18.1421 19.5 14C19.5 9.85786 16.1421 6.5 12 6.5C7.85786 6.5 4.5 9.85786 4.5 14C4.5 18.1421 7.85786 21.5 12 21.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.5 14V4.63C19.5 3.32 18.62 2.5 17.56 2.5H12.87C11.56 2.5 10.5 3.56 10.5 4.88V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5 11.5C11.3284 11.5 12 10.8284 12 10C12 9.17157 11.3284 8.5 10.5 8.5C9.67157 8.5 9 9.17157 9 10C9 10.8284 9.67157 11.5 10.5 11.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.5 9.5C16.3284 9.5 17 8.82843 17 8C17 7.17157 16.3284 6.5 15.5 6.5C14.6716 6.5 14 7.17157 14 8C14 8.82843 14.6716 9.5 15.5 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const UserIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const ChartBarIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

export const UsersIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.226a3 3 0 00-4.682 2.72 9.094 9.094 0 003.741.479m-4.5-4.5a3 3 0 01-3.741 2.226c-.806.246-1.5.586-2.126.997A4.486 4.486 0 002.25 12.75v-2.506c0-1.24.985-2.25 2.22-2.25.14-.02.28-.035.42-.05a3 3 0 012.986-2.264M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const StarIcon: React.FC<{ className?: string; style?: React.CSSProperties, filled?: boolean, onClick?: () => void, onMouseEnter?: () => void }> = ({ className, filled, ...props }) => (
    <svg {...props} className={className} xmlns="http://www.w3.org/2000/svg" fill={filled ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth={filled ? 0 : 1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.32 1.011l-4.218 4.105a.563.563 0 00-.162.581l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 21.15a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.162-.581l-4.218-4.105a.563.563 0 01.32-1.011l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
);

export const ChatBubbleLeftRightIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.761 9.761 0 01-2.542-.383m-2.753-2.62a3.375 3.375 0 01-3.375-3.375c0-1.821 1.479-3.375 3.375-3.375h1.5c.414 0 .75-.336.75-.75V8.25a3.375 3.375 0 013.375-3.375c1.196 0 2.241.583 2.872 1.465M12 12c0 4.556 4.03 8.25 9 8.25a9.761 9.761 0 002.542-.383m2.753-2.62a3.375 3.375 0 003.375-3.375c0-1.821-1.479-3.375-3.375-3.375h-1.5a.75.75 0 01-.75-.75V8.25a3.375 3.375 0 00-3.375-3.375c-1.196 0-2.241.583-2.872 1.465" />
  </svg>
);


export const CpuChipIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5M19.5 8.25H21M19.5 12H21M19.5 15.75H21M15.75 21v-1.5M12 4.5v-1.5m0 18v-1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5h7.5v9h-7.5z" />
  </svg>
);


export const SnapchatIcon: React.FC<SVGMotionProps<SVGSVGElement>> = (props) => {
    return (
        <motion.svg
            {...props}
            whileHover={{ scale: 1.1, filter: 'brightness(1.1) drop-shadow(0 0 8px rgba(255, 252, 0, 0.6))' }}
            transition={{ type: 'spring', stiffness: 300 }}
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
        >
            <path d="M0,40.1 C0,17.9 17.9,0 40.1,0 L215.9,0 C238.1,0 256,17.9 256,40.1 L256,215.9 C256,238.1 238.1,256 215.9,256 L40.1,256 C17.9,256 0,238.1 0,215.9 L0,40.1 Z" fill="#FFFC00"></path>
            <path d="M202.9,21.5 C164.7,21.5 128,21.5 128,21.5 C128,21.5 91.3,21.5 53.1,21.5 C29.2,21.5 10.2,40.6 10.2,64.4 C10.2,88.2 29.2,107.3 53.1,107.3 C53.1,107.3 54.2,107.3 55.4,107.2 C30,107.2 11.3,126.3 11.3,150 C11.3,163.2 17.5,174.9 27.2,182.9 C31.1,194 41.2,228.5 128,228.5 C215.1,228.5 225.2,194.1 229,182.9 C238.7,174.9 244.9,163.2 244.9,150 C244.9,126.3 226.2,107.2 200.8,107.2 C202,107.3 203.1,107.3 203.1,107.3 C227,107.3 246,88.2 246,64.4 C246,40.6 227.3,21.5 202.9,21.5 L202.9,21.5 Z" fill="#FFFFFF"></path>
        </motion.svg>
    );
}

export const GithubIcon: React.FC<SVGMotionProps<SVGSVGElement>> = (props) => {
    return (
        <motion.svg
            {...props}
            whileHover={{ scale: 1.1, filter: 'brightness(1.3) drop-shadow(0 0 5px rgba(168, 85, 247, 0.5))' }}
            transition={{ type: 'spring', stiffness: 300 }}
            viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 16.418 5.182 20.155 9.406 21.5c.5.091.682-.218.682-.482 0-.236-.009-.864-.014-1.696-2.92.636-3.536-1.418-3.536-1.418-.455-1.155-1.11-1.464-1.11-1.464-.909-.627.068-.618.068-.618 1.004.073 1.532 1.036 1.532 1.036.891 1.532 2.34 1.082 2.91.827.091-.645.35-1.082.632-1.336-2.227-.255-4.555-1.11-4.555-4.946 0-.973.345-1.773.918-2.391-.091-.255-.391-1.136.086-2.355 0 0 .84-.273 2.75 1.027A9.53 9.53 0 0112 7.02c.85 0 1.705.114 2.5.332 1.91-1.3 2.75-1.027 2.75-1.027.477 1.219.177 2.1.086 2.355.573.618.918 1.418.918 2.391 0 3.845-2.336 4.682-4.568 4.932.359.309.677.918.677 1.855 0 1.336-.014 2.418-.014 2.745 0 .268.182.582.686.482C18.818 20.155 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
        </motion.svg>
    );
}


export const InstagramIcon: React.FC<SVGMotionProps<SVGSVGElement>> = (props) => {
    return (
        <motion.svg
            {...props}
            whileHover={{ scale: 1.1, filter: 'brightness(1.3) drop-shadow(0 0 5px rgba(168, 85, 247, 0.5))' }}
            transition={{ type: 'spring', stiffness: 300 }}
            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 11.37C16.1234 12.2125 15.9813 13.0708 15.5938 13.8218C15.2063 14.5728 14.5931 15.186 13.8421 15.5735C13.0911 15.961 12.2328 16.1031 11.3903 15.98C10.5478 15.8569 9.75765 15.4805 9.12152 14.8842C8.48539 14.2878 8.08312 13.5133 7.94563 12.6865C7.80814 11.8597 7.93479 11.0119 8.30732 10.2642C8.67984 9.5165 9.27715 8.91097 10.0264 8.52559C10.7756 8.14022 11.6315 8.00133 12.4721 8.12932C13.3127 8.25732 14.0954 8.63223 14.7171 9.22421C15.3387 9.81619 15.759 10.5794 15.903 11.408" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </motion.svg>
    );
}

export const CodeBracketIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25" />
  </svg>
);

export const ChatBubbleIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.195-.883.05-1.767.11-2.65.165a23.891 23.891 0 01-4.266 0c-.883-.05-1.767-.11-2.65-.165A2.16 2.16 0 013 15.182V10.608c0-.97.616-1.813 1.5-2.097m14.25-1.121a23.891 23.891 0 00-4.266 0c-.883.05-1.767.11-2.65.165A2.16 2.16 0 006 8.482V4.2a2.16 2.16 0 012.16-2.16h8.682a2.16 2.16 0 012.16 2.16v4.282c0 .59-.214 1.14-.594 1.573z" />
  </svg>
);

export const BuildingIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6.75h1.5m-1.5 3h1.5m-1.5 3h1.5M9 21v-2.25c0-.966.784-1.75 1.75-1.75h1.5c.966 0 1.75.784 1.75 1.75V21" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 21V11.25c0-.966.784-1.75 1.75-1.75h1.5c.966 0 1.75.784 1.75 1.75V21" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V11.25c0-.966.784-1.75 1.75-1.75h1.5c.966 0 1.75.784 1.75 1.75V21" />
  </svg>
);

export const Squares2x2Icon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 8.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25A2.25 2.25 0 0113.5 8.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
  </svg>
);

export const ArrowPathIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0l3.181-3.183m-11.664 0l4.992-4.993m-4.993 0l-3.181 3.183a8.25 8.25 0 000 11.664l3.181 3.183" />
  </svg>
);

export const MagnifyingGlassIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

export const QrCodeIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5A.75.75 0 0 1 4.5 3.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-1.5Zm0 6A.75.75 0 0 1 4.5 9.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-1.5Zm0 6A.75.75 0 0 1 4.5 15.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-1.5Zm6-12A.75.75 0 0 1 10.5 3.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-1.5Zm0 6A.75.75 0 0 1 10.5 9.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-1.5Zm0 6A.75.75 0 0 1 10.5 15.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-1.5Zm6-12A.75.75 0 0 1 16.5 3.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-1.5Zm0 6A.75.75 0 0 1 16.5 9.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-1.5Zm0 6A.75.75 0 0 1 16.5 15.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-1.5Z" />
  </svg>
);