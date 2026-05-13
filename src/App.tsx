import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import AllQuotes from './pages/AllQuotes';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import AboutTianYong from './pages/AboutTianYong';
import './styles/global.css';

//根组件
// React.FC这是一个React函数组件
const App: React.FC = () => {
  return (
    <Router>         {/* 开启路由功能 */}
      <Layout>       {/* 公共布局：导航栏、页脚等所有页面共用 */}
        <Routes>     {/* 路由规则容器 */}

          {/* 路径 = 网址，element = 对应要显示的页面组件 */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/all-quotes" element={<AllQuotes />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/about-tian-yong" element={<AboutTianYong />} />

        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
