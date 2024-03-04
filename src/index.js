import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const App = () => {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
};

const Avatar = () => {
  return (
    <img src="../Ahmed-hossam.jpg" alt="profile-pic" className="avatar"></img>
  );
};

const Intro = () => {
  return (
    <div className="data">
      <h2> Ahmed Hossam - FullStack Developer </h2>
      <p>
        {' '}
        Experienced in both front-end and back-end development using React and
        Node.js. Skilled in building dynamic and scalable web applications with
        a focus on user experience and efficient APIs. Proficient in both
        front-end frameworks like React and back-end technologies like Node.js
        and its ecosystem. Possess strong debugging and testing skills to ensure
        application stability and functionality. Thrive in collaborative
        environments, bridging the gap between front-end and back-end
        development for seamless user experiences.{' '}
      </p>
    </div>
  );
};

const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill name="html+css 🤯" color="#FFA000" />
      <Skill name="JavaScript 😎" color="#C6295E" />
      <Skill name="nodeJs 👻" color="#83B085" />
      <Skill name="TypeScript 👾" color="#6B9FC8" />
      <Skill name="React 😈" color="#1976D2" />
      <Skill name="mongoDB 👽" color="#2E7D32" />
    </div>
  );
};

const Skill = (props) => {
  return (
    <span className="skill" style={{ backgroundColor: props.color }}>
      {props.name}
    </span>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
