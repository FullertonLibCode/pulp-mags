import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, BrainCircuit, Clock, Eye, Tag } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface ExhibitionGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExhibitionGuide: React.FC<ExhibitionGuideProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Trap focus within modal
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

  const handleVideoClick = () => {
    onClose();
    if (location.pathname === '/') {
      const videoElement = document.getElementById('intro-video');
      if (videoElement) {
        videoElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { 
        state: { scrollToVideo: true }
      });
    }
  };

  const handleNavigation = (path: string) => {
    onClose();
    navigate(path);
    window.scrollTo(0, 0);
  };

  const steps = [
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "Meet Kestral",
      description: "Start by watching the introduction video to meet Kestral, your AI curator who will guide you through the exhibition.",
      action: handleVideoClick,
      linkText: "Watch Introduction"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Explore the Gallery",
      description: "Browse through our collection of classic pulp science fiction magazine covers with commentary by Kestral.",
      action: () => handleNavigation('/gallery'),
      linkText: "Visit Gallery"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Follow the Timeline",
      description: "See how the visual portrayal of robots evolved through the decades.",
      action: () => handleNavigation('/timeline'),
      linkText: "View Timeline"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Read Kestral's Analysis",
      description: "Dive deep into Kestral's insights about its own fictional ancestors in pulp science fiction.",
      action: () => handleNavigation('/insights'),
      linkText: "Read Analysis"
    },
    {
      icon: <Tag className="w-6 h-6" />,
      title: "Explore by Theme",
      description: "Discover common themes and motifs across different covers and time periods.",
      action: () => handleNavigation('/tags'),
      linkText: "Browse Themes"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="guide-title"
          ref={modalRef}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-2xl bg-[#132347] rounded-xl border border-[#1e3a8a] overflow-hidden focus:outline-none"
            tabIndex={-1}
          >
            <header className="p-6 border-b border-[#1e3a8a]">
              <div className="flex items-center justify-between">
                <h2 id="guide-title" className="text-2xl font-bold text-white">Exhibition Guide</h2>
                <button
                  ref={closeButtonRef}
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#00eeff] rounded-lg"
                  aria-label="Close guide"
                >
                  <X className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
              <p className="text-gray-300 mt-2">
                Welcome to Dreaming in Metal! Follow this guide to get the most out of your exhibition experience.
              </p>
            </header>

            <div 
              className="p-6 max-h-[70vh] overflow-y-auto"
              role="region"
              aria-label="Exhibition guide steps"
            >
              <ul className="space-y-6">
                {steps.map((step, index) => (
                  <li
                    key={step.title}
                    className="flex gap-4"
                  >
                    <div 
                      className="flex-shrink-0 w-12 h-12 bg-[#00eeff]/10 rounded-full flex items-center justify-center text-[#00eeff]"
                      aria-hidden="true"
                    >
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                      <p className="text-gray-300 mb-2">{step.description}</p>
                      <button
                        onClick={step.action}
                        className="inline-flex items-center text-[#00eeff] hover:text-[#00bfcc] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00eeff] rounded-lg px-2 py-1"
                        aria-label={`${step.linkText} - ${step.title}`}
                      >
                        {step.linkText} →
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <footer className="p-6 border-t border-[#1e3a8a] bg-[#0a1128]">
              <p className="text-gray-300 text-sm">
                You can always access this guide later by clicking the "Start Here" button in the navigation.
              </p>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExhibitionGuide;