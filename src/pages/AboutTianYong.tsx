import React from 'react';
import './AboutTianYong.css';

const AboutTianYong: React.FC = () => {
  return (
    <div className="container about-tianyong-page">
      <h2>安徽省濉溪中学</h2>
      <h1>- 田勇 -</h1>
      <div className='cards-wrapper'>
        <div className="card liquid-glass-card">
          <h2>荣誉称号</h2>
          <ul className="nickname-list">
            <li><b>八哥</b></li>
            <li>濉中达尔文</li>
            <li>濉中狄仁杰</li>
            <li>癞蛤蟆</li>
          </ul>
        </div>

        <div className="card liquid-glass-card">
          <h2>身份</h2>
          <div className="identity-list">
            <p><b>濉溪中学语文老师</b></p>
            <p><b>安徽师范大学</b>毕业生</p>
            <p><b>副教授级别</b>的老师</p>
            <p>高考阅卷<b>专家组</b></p>
            <p><b>最受学生欢迎</b>的老师</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutTianYong;
