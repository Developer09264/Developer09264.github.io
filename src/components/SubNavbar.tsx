import React from 'react';
import { useLocation } from 'react-router-dom';
import NavButton from './NavButton';
import './SubNavbar.css';

const SubNavbar: React.FC = () => {
  const location = useLocation();

  // Determine back link and text based on current path
  const isArticleDetail = location.pathname.startsWith('/articles/');
  const backLink = isArticleDetail ? '/articles' : '/';
  const backText = isArticleDetail ? '返回相关文章' : '返回田语';

  return (
    <nav className="sub-navbar">
      <div className="container">
        <NavButton to={backLink}>{backText}</NavButton>
      </div>
    </nav>
  );
};

export default SubNavbar;
