import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
    title?: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl, title = "Demo Video" }) => {
    const [showSpinner, setShowSpinner] = React.useState(false);

    const { t } = useTranslation();
    const videoRef = useRef<HTMLVideoElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    // Handle ESC key press
    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscKey);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';


            setShowSpinner(true);
            const timeout = setTimeout(() => setShowSpinner(false), 4000);
            return () => clearTimeout(timeout);

        } else {
            document.body.style.overflow = 'unset';
            setShowSpinner(false);
        }

        return () => {
            document.removeEventListener('keydown', handleEscKey);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    // Handle video play/pause based on modal state
    useEffect(() => {
        if (videoRef.current) {
            if (isOpen) {
                // Small delay to ensure modal is fully rendered
                setTimeout(() => {
                    videoRef.current?.play().catch(error => {
                        console.log('Autoplay prevented by browser:', error);
                    });
                }, 300);
            } else {
                videoRef.current.pause();
                videoRef.current.currentTime = 0; // Reset video to beginning
            }
        }
    }, [isOpen]);

    // Handle click outside modal
    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    // Focus management for accessibility
    useEffect(() => {
        if (isOpen && modalRef.current) {
            modalRef.current.focus();
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-black/90 backdrop-blur-sm animate-fade-in"
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
        >
            <div
                ref={modalRef}
                className="relative w-full max-w-4xl bg-primary-white rounded-2xl shadow-2xl animate-slide-up overflow-hidden"
                tabIndex={-1}
                style={{ aspectRatio: 'auto' }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-primary-black/50 hover:bg-primary-black/70 text-primary-white rounded-full transition-all duration-300 hover:scale-110"
                    aria-label="Close video modal"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Video Container */}
                <div className="relative w-full h-full">
                    <video
                        ref={videoRef}
                        className="w-full h-full object-contain bg-black"
                        preload="metadata"
                        playsInline
                        autoPlay
                        onEnded={onClose}
                        aria-label={title}
                    >
                        <source src={videoUrl} type="video/mp4" />
                        <source src={videoUrl.replace('.mp4', '.webm')} type="video/webm" />
                        <source src={videoUrl.replace('.mp4', '.ogg')} type="video/ogg" />
                        <p className="p-8 text-center text-neutral-600">
                            Your browser doesn't support video playback.
                            <a href={videoUrl} className="text-accent-pink hover:underline ml-1">
                                Download the video instead
                            </a>
                        </p>
                    </video>

                    {/* Loading Overlay */}
                    {showSpinner && (
                        <div className="absolute inset-0 flex items-center justify-center bg-neutral-transparent rounded-2xl">
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 border-4 border-accent-gold border-t-transparent rounded-full animate-spin mb-4"></div>
                                <p className="text-accent-gold text-lg sm:text-xl font-semibold tracking-wide animate-pulse">{t('hero.loadingYourTransformation')}</p>
                            </div>
                        </div>)}
                </div>

                {/* Video Title */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-black/80 to-transparent p-6">
                    <h3 id="video-modal-title" className="text-primary-white font-semibold text-lg">
                        {title}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default VideoModal;