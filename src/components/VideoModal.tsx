import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        // Stop video playback
        videoRef.current?.contentWindow?.postMessage(
          JSON.stringify({ event: 'pause' }),
          'https://player.cloudinary.com'
        );
        setIsPlaying(false);
        onClose();
      }

      // Handle video playback controls when video is focused
      if (document.activeElement === videoRef.current) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          
          // Toggle play/pause
          videoRef.current?.contentWindow?.postMessage(
            JSON.stringify({
              event: isPlaying ? 'pause' : 'play'
            }),
            'https://player.cloudinary.com'
          );
          
          setIsPlaying(!isPlaying);
        }
      }
    };

    // Listen for player events
    const handleMessage = (event: MessageEvent) => {
      if (event.origin === 'https://player.cloudinary.com') {
        try {
          const data = JSON.parse(event.data);
          if (data.event === 'play') {
            setIsPlaying(true);
            videoRef.current?.setAttribute('aria-label', 'Video is playing. Press Space or Enter to pause');
          } else if (data.event === 'pause') {
            setIsPlaying(false);
            videoRef.current?.setAttribute('aria-label', 'Video is paused. Press Space or Enter to play');
          }
        } catch (e) {
          // Ignore invalid JSON
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('message', handleMessage);
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('message', handleMessage);
    };
  }, [isOpen, onClose, isPlaying]);

  const handleClose = () => {
    // Stop video playback
    videoRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'pause' }),
      'https://player.cloudinary.com'
    );
    setIsPlaying(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-title"
          ref={modalRef}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full h-full flex items-center justify-center focus:outline-none"
            tabIndex={-1}
          >
            <button
              ref={closeButtonRef}
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-white hover:text-[#00eeff] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00eeff] rounded-lg z-10"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center">
              <iframe 
                ref={videoRef}
                src="https://player.cloudinary.com/embed/?cloud_name=dn0ugggvb&public_id=Exhibit_-_Intro_-_Kestral_z7ut3e&profile=cld-default"
                className="w-full h-full aspect-video"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                title="Meet Kestral: AI Curator Introduction"
                id="video-title"
                tabIndex={0}
                aria-label="Video player. Press Space or Enter to play or pause"
                role="application"
                onLoad={() => {
                  videoRef.current?.focus();
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;