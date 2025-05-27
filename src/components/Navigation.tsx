import React, { useState } from 'react';
import { Home, Grid, Clock, Tag, Users, MapPin } from 'lucide-react';
import { NavLink } from './UI/NavLink';
import ExhibitionGuide from './ExhibitionGuide';

const Navigation: React.FC = () => {
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  const handleNavigation = () => {
    window.scrollTo(0, 0);
    // Focus the main content area after navigation
    document.getElementById('main-content')?.focus();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsGuideOpen(true);
    }
  };

  return (
    <>
      <nav 
        className="fixed bottom-0 w-full border-t border-[#1e3a8a] backdrop-blur-md bg-[#0a1128]/90 py-2 px-4 z-10"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto">
          <div className="flex justify-around items-center">
            <NavLink to="/" icon={<Home />} label="Home" onClick={handleNavigation} />
            <button
              onClick={() => setIsGuideOpen(true)}
              onKeyDown={handleKeyPress}
              className="flex flex-col items-center text-[#00eeff] hover:text-[#00bfcc] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#00eeff] rounded-lg"
              aria-label="Open exhibition guide"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <MapPin aria-hidden="true" />
              </div>
              <span className="text-xs mt-1">Start Here</span>
            </button>
            <NavLink to="/gallery" icon={<Grid />} label="Gallery" onClick={handleNavigation} />
            <NavLink to="/timeline" icon={<Clock />} label="Timeline" onClick={handleNavigation} />
            <NavLink to="/tags" icon={<Tag />} label="Tags" onClick={handleNavigation} />
            <NavLink to="/contributors" icon={<Users />} label="Contributors" onClick={handleNavigation} />
          </div>
        </div>
      </nav>

      <ExhibitionGuide isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
    </>
  );
};

export default Navigation;