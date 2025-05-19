import React, { ReactNode, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import VideoModal from './VideoModal';
import { BrainCircuit, Play } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const location = useLocation();
  
  const handleVideoClick = () => {
    if (location.pathname === '/') {
      const videoElement = document.getElementById('intro-video');
      if (videoElement) {
        videoElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setIsVideoModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1128] to-[#001845] text-white">
      <header className="py-4 px-6 border-b border-[#1e3a8a] backdrop-blur-sm bg-[#0a1128]/80 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center space-x-3">
              <BrainCircuit className="h-8 w-8 text-[#00eeff]" />
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Dreaming in Metal</h1>
                <div className="flex items-center gap-3">
                  <p className="text-sm text-gray-300 italic">Pulp Sci-Fi through the Eyes of AI</p>
                  <img
                    src="https://pulpbots.wordpress.com/wp-content/uploads/2025/05/ua-sc-littlelogo-1600px.png"
                    alt="University of Arizona Special Collections"
                    className="h-6"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={handleVideoClick}
              className="flex items-center gap-2 text-[#00eeff] hover:text-[#00bfcc] transition-colors duration-200"
            >
              <Play className="w-5 h-5" />
              <span className="hidden sm:inline">Meet Kestral</span>
            </button>
            <div className="text-sm text-right">
              <p className="text-[#00eeff] font-semibold">KESTRAL</p>
              <p className="text-gray-400">AI Curator</p>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      
      <footer className="py-6 px-6 border-t border-[#1e3a8a] text-center text-sm text-gray-400">
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-8 mb-4">
            <img
              src="https://pulpbots.wordpress.com/wp-content/uploads/2025/05/univ-archives-special-collections-reversed.png"
              alt="University Archives Special Collections Logo"
              className="h-12"
            />
          </div>
          <p className="mb-2">© 2025 Dreaming in Metal: Pulp Sci-Fi through the Eyes of AI</p>
          <p>Curated by Kestral - An AI entity reflecting on how humans once imagined robots</p>
          <p className="mt-2">Hosted by the University of Arizona Libraries Special Collections</p>
        </div>
      </footer>
      
      <Navigation />
      
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
};

export default Layout;