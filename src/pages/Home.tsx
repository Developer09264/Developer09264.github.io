import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  //useState状态钩子
  //const [变量, 修改变量的函数] = useState(初始值);
  const [quotes, setQuotes] = useState<string[]>([]);
  const [currentQuote, setCurrentQuote] = useState('田语');
  const [fade, setFade] = useState(true);

  //useEffect 是 React 的钩子函数，专门用来做 “副作用” 操作
  //组件渲染完后，要执行的异步操作、请求数据、定时器、读取文件… 全都放这里
  //useEffect 关键知识点
  // 第一个参数：要执行的函数（请求、读取文件等）
  // 第二个参数 []：依赖数组
  //     空数组 [] = 只执行一次（组件刚加载时）

  //组件一加载完，就立刻去读取 quotes.txt 文件，把里面的所有名言读出来，存到 quotes 状态里
  useEffect(() => {
    // '/'指的是/public/
    fetch('/quotes.txt')
      .then(res => res.text())
      .then(data => {
        const lines = data.split('\n').filter(q => q.trim() !== '');
        setQuotes(lines);
      })
      .catch(err => console.error('Failed to load quotes', err));
  }, []);

  useEffect(() => {
    if (quotes.length === 0) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);
        setFade(true);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [quotes]);

  return (
    <div className="home-container">
      <div className="welcome-page">
        <div className="liquid-glass-card welcome-card ma-shan-zheng-regular">
          <div className={`quote ${fade ? 'fade-in' : 'fade-out'}`}>
            <div dangerouslySetInnerHTML={{ __html: currentQuote }} />
          </div>
        </div>
      </div>

      <div id="more-contents">
        <div className="card-container">
          <Link to="/all-quotes" className="card nav-card liquid-glass-card">
            <div className="card-icon">📜</div>
            <div className="card-text">
              <h3>所有田语</h3>
              <p>查看历史语录归档</p>
            </div>
            <div className="arrow">→</div>
          </Link>

          <Link to="/articles" className="card nav-card liquid-glass-card">
            <div className="card-icon">✍️</div>
            <div className="card-text">
              <h3>关于文章</h3>
              <p>阅读精选文章与随笔</p>
            </div>
            <div className="arrow">→</div>
          </Link>

          <Link to="/about-tian-yong" className="card nav-card liquid-glass-card">
            <div className="card-icon">🧑‍💻</div>
            <div className="card-text">
              <h3>关于田勇</h3>
              <p>了解作者</p>
            </div>
            <div className="arrow">→</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
