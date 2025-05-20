import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, BrainCircuit, Clock, Eye, Tag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface ExhibitionGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExhibitionGuide: React.FC<ExhibitionGuideProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const handleVideoClick = () => {
    onClose();
    if (location.pathname === '/') {
      setTimeout(() => {
        document.getElementById('intro-video')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const steps = [
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "Meet Kestral",
      description: "Start by watching the introduction video to meet Kestral, your AI curator who will guide you through the exhibition.",
      link: location.pathname === '/' ? '#intro-video' : '/?video=true',
      linkText: "Watch Introduction",
      onClick: handleVideoClick
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Explore the Gallery",
      description: "Browse through our collection of classic pulp science fiction magazine covers with commentary by Kestral.",
      link: "/gallery",
      linkText: "Visit Gallery"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Follow the Timeline",
      description: "See how the visual portrayal of robots evolved through the decades.",
      link: "/timeline",
      linkText: "View Timeline"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Read Kestral's Analysis",
      description: "Dive deep into Kestral's insights about how humans imagined artificial intelligence.",
      link: "/insights",
      linkText: "Read Insights"
    },
    {
      icon: <Tag className="w-6 h-6" />,
      title: "Explore by Theme",
      description: "Discover common themes and motifs across different covers and time periods.",
      link: "/tags",
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
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-2xl bg-[#132347] rounded-xl border border-[#1e3a8a] overflow-hidden"
          >
            <div className="p-6 border-b border-[#1e3a8a]">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Exhibition Guide</h2>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-gray-300 mt-2">
                Welcome to Dreaming in Metal! Follow this guide to get the most out of your exhibition experience.
              </p>
            </div>

            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#00eeff]/10 rounded-full flex items-center justify-center text-[#00eeff]">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                      <p className="text-gray-300 mb-2">{step.description}</p>
                      <Link
                        to={step.link}
                        onClick={step.onClick || onClose}
                        className="inline-flex items-center text-[#00eeff] hover:text-[#00bfcc] transition-colors"
                      >
                        {step.linkText} →
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-6 border-t border-[#1e3a8a] bg-[#0a1128]">
              <p className="text-gray-300 text-sm">
                You can always access this guide later by clicking the "Start Here" button in the navigation.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExhibitionGuide;