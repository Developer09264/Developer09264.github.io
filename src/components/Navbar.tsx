import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavButton from './NavButton';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 || !isHome) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  return (
    <nav id="navbar" className={show ? 'show' : ''}>
      <Link to="/" className="logo">
        <img src="/favicon.svg" alt="Logo" />
      </Link>
      <div className="dropdown">
        <NavButton to="/about">关于</NavButton>
      </div>
    </nav>
  );
};

export default Navbar;
