import React from 'react';
import { Home, Grid, Clock, Tag, Users } from 'lucide-react';
import { NavLink } from './UI/NavLink';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed bottom-0 w-full border-t border-[#1e3a8a] backdrop-blur-md bg-[#0a1128]/90 py-2 px-4 z-10">
      <div className="container mx-auto">
        <div className="flex justify-around items-center">
          <NavLink to="/" icon={<Home />} label="Home" />
          <NavLink to="/gallery" icon={<Grid />} label="Gallery" />
          <NavLink to="/timeline" icon={<Clock />} label="Timeline" />
          <NavLink to="/tags" icon={<Tag />} label="Tags" />
          <NavLink to="/contributors" icon={<Users />} label="Contributors" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;