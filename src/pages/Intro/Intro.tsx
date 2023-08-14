import React from "react";
import { basicData } from "../../data";
import './Intro.scss';


const Intro = () => {
  return (
    <div className="app__category intro">
      <div className="intro__name">
        <span>{basicData.intro}</span>{' '}
        <span>{basicData.name}.</span>
      </div>
      <div className="intro__role">
        <span>{basicData.role}.</span>
      </div>
      <div className="intro__contact">
        <button className="intro__button">{basicData.contact}</button>
      </div>
    </div>
  );
};

export default Intro;
