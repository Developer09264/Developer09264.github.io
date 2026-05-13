import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../utils/articleData';
import './Articles.css';

const Articles: React.FC = () => {
  return (
    <div className="container articles-page">
      <h1>- 相关文章 -</h1>
      <div className="articles-list">
        {articles.map(article => (
          <Link key={article.id} to={`/articles/${article.id}`} className="article-card card liquid-glass-card">
            <div className="card-text">
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Articles;
