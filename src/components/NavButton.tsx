import React from 'react';
import { Link } from 'react-router-dom';
import './NavButton.css';

interface NavButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const NavButton: React.FC<NavButtonProps> = ({ to, children, className }) => {
  return (
    <Link to={to} className={`nav-button ${className || ''}`}>
      {children}
    </Link>
  );
};

export default NavButton;
