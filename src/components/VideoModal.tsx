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

  useEffect(() => {
    if (!isOpen) return;

    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements?.[0] as HTMLElement;
    const lastFocusable = focusableElements?.[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Handle video playback controls when video iframe is focused
      if (document.activeElement === videoRef.current) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          // Send play/pause message to iframe
          videoRef.current?.contentWindow?.postMessage(
            JSON.stringify({ event: 'command', func: 'togglePlay' }), 
            'https://player.cloudinary.com'
          );
        }
      }

      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable?.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
            className="relative w-full max-w-4xl mx-4 focus:outline-none"
            tabIndex={-1}
          >
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="absolute -top-12 right-0 p-2 text-white hover:text-[#00eeff] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00eeff] rounded-lg"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="relative bg-[#132347] rounded-lg overflow-hidden border border-[#1e3a8a]">
              <iframe 
                ref={videoRef}
                src="https://player.cloudinary.com/embed/?cloud_name=dn0ugggvb&public_id=Exhibit_-_Intro_-_Kestral_z7ut3e&profile=cld-default"
                style={{
                  width: '100%',
                  aspectRatio: '16 / 9'
                }}
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                title="Meet Kestral: AI Curator Introduction"
                id="video-title"
                tabIndex={0}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;