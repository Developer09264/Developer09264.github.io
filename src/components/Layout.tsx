import React, { useEffect } from 'react';
import Navbar from './Navbar';
import SubNavbar from './SubNavbar';
import Footer from './Footer';
import BackToTop from './BackToTop';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        document.title = '人在做，天在看';
      } else {
        document.title = '田语 | 朴实无华，意蕴悠长';
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <>
      {isHome ? <Navbar /> : <SubNavbar />}
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Layout;
