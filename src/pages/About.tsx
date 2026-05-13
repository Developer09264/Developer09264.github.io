import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="container about-page">
      <h1>关于...</h1>
      <div className="card liquid-glass-card">
        <h2>关于田语</h2>
        <p>
          《田语》者，今世思想家、教育家田氏之门人，录其言行而辑成之语录也。辑于二〇二三年，具体日期未详。以语录体为主，集中显现田氏及其学派之教育主张、伦理思想、道德观念、生活态度等。然《田语》之编著，曾遭严酷压制，故编撰转入地下。《田语》不独为田氏之象征，亦乃一班级、一时代之象征，实为田学之瑰宝焉。
        </p>
      </div>
    </div>
  );
};

export default About;
