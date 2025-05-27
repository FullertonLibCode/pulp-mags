import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ to, icon, label, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (onClick) {
        onClick();
      }
      // Create a new click event and dispatch it on the link element
      const clickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      e.currentTarget.dispatchEvent(clickEvent);
    }
  };
  
  return (
    <Link 
      to={to} 
      onClick={onClick}
      onKeyDown={handleKeyPress}
      className={`flex flex-col items-center focus:outline-none focus:ring-2 focus:ring-[#00eeff] rounded-lg p-1 ${
        isActive 
          ? 'text-[#00eeff] after:content-[""] after:block after:w-full after:h-0.5 after:bg-[#00eeff] after:mt-1' 
          : 'text-gray-400 hover:text-gray-200'
      } transition-colors duration-200`}
      aria-current={isActive ? 'page' : undefined}
      role="link"
      tabIndex={0}
    >
      <div className="w-10 h-10 flex items-center justify-center" aria-hidden="true">
        {icon}
      </div>
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
};