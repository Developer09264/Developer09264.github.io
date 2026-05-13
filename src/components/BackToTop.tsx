import React, { useState, useEffect } from 'react';
import './BackToTop.css';

const BackToTop: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button 
      id="back-to-top" 
      className={show ? 'show' : ''} 
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
};

export default BackToTop;
