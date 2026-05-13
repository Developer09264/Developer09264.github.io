import React, { useState, useEffect } from 'react';
import './AllQuotes.css';

const AllQuotes: React.FC = () => {
  const [quotes, setQuotes] = useState<string[]>([]);

  useEffect(() => {
    fetch('/quotes.txt')
      .then(res => res.text())
      .then(data => {
        const lines = data.split('\n').filter(q => q.trim() !== '');
        setQuotes(lines);
      })
      .catch(err => console.error('Failed to load quotes', err));
  }, []);

  return (
    <div className="container">
      <h1>- 所有田语 -</h1>
      <div className="quotes-list liquid-glass-card all-quotes-page">
        {quotes.map((quote, index) => (
          <div key={index} className="quote-item">
            <p className="ma-shan-zheng-regular">
              <div dangerouslySetInnerHTML={{ __html: quote }} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllQuotes;
