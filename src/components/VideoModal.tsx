import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-4xl mx-4"
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 p-2 text-white hover:text-[#00eeff] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="relative aspect-video bg-[#132347] rounded-lg overflow-hidden border border-[#1e3a8a]">
              <div className="absolute inset-0 flex items-center justify-center">
                <video
                  className="w-full h-full"
                  controls
                  autoPlay
                  onEnded={onClose}
                >
                  <source src="/path-to-your-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;