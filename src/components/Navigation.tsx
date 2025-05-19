import React, { useState } from 'react';
import { Home, Grid, Clock, Tag, Users, MapPin } from 'lucide-react';
import { NavLink } from './UI/NavLink';
import ExhibitionGuide from './ExhibitionGuide';

const Navigation: React.FC = () => {
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  return (
    <>
      <nav className="fixed bottom-0 w-full border-t border-[#1e3a8a] backdrop-blur-md bg-[#0a1128]/90 py-2 px-4 z-10">
        <div className="container mx-auto">
          <div className="flex justify-around items-center">
            <NavLink to="/" icon={<Home />} label="Home" />
            <button
              onClick={() => setIsGuideOpen(true)}
              className="flex flex-col items-center text-[#00eeff] hover:text-[#00bfcc] transition-colors duration-200"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <MapPin />
              </div>
              <span className="text-xs mt-1">Start Here</span>
            </button>
            <NavLink to="/gallery" icon={<Grid />} label="Gallery" />
            <NavLink to="/timeline" icon={<Clock />} label="Timeline" />
            <NavLink to="/tags" icon={<Tag />} label="Tags" />
            <NavLink to="/contributors" icon={<Users />} label="Contributors" />
          </div>
        </div>
      </nav>

      <ExhibitionGuide isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
    </>
  );
};

export default Navigation;