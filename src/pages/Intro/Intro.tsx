import React from "react";
import data from "../../data.json";
import './Intro.scss';


const Intro = () => {
  return (
    <div className="app__category intro">
      <div className="intro__name">
        <span>{data.intro}</span>{' '}
        <span>{data.name}.</span>
      </div>
      <div className="intro__role">
        <span>{data.role}.</span>
      </div>
      <div className="intro__contact">
        <button className="intro__button">{data.contact}</button>
      </div>
    </div>
  );
};

export default Intro;
