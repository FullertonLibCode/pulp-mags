import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  icon: ReactNode;
  label: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ to, icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`flex flex-col items-center ${
        isActive 
          ? 'text-[#00eeff]' 
          : 'text-gray-400 hover:text-gray-200'
      } transition-colors duration-200`}
    >
      <div className="w-10 h-10 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
};