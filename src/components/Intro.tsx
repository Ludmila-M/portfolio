import React from "react";
import data from "../data.json";
import '../styles/Intro.scss';
// import { ReactComponent as Logo } from "../assets/github-mark.svg";

const Intro = () => {
  return (
    <div className="app__intro">
      <div className="app__intro-name">
        <span>{data.intro}</span>{' '}
        <span>{data.name}.</span>
      </div>
      <div className="app__intro-role">
        <span>{data.role}.</span>
      </div>
      {/* <Logo /> */}
      <div className="app__intro-contact">
        <button className="app__intro-button">{data.contact}</button>
      </div>
    </div>
  );
};

export default Intro;
