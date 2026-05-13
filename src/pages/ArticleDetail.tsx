import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { articles } from '../utils/articleData';
import './ArticleDetail.css';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return <Navigate to="/articles" />;
  }

  return (
    <div className="container article-detail-page">
      <div className="article-content card liquid-glass-card">
        <h1>{article.title}</h1>
        <div 
          className="content-body" 
          dangerouslySetInnerHTML={{ __html: article.content }} 
        />
      </div>
    </div>
  );
};

export default ArticleDetail;
