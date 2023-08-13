import React, { useState } from "react";
import Switch from "react-switch";
import "./Header.scss";
import { Categories } from "../../enums/categories";

const navCategories = [
  Categories.BIO,
  Categories.EXPIERENCE,
  Categories.CONTACT,
];

interface HeaderProps {
  switchTheme: () => void;
  setPickedCategory: (category: string) => void;
}

const Header: React.FC<HeaderProps> = ({ switchTheme, setPickedCategory }) => {
  const [isChecked, setChecked] = useState(false);
  const handleClick = () => {
    switchTheme();
    setChecked(!isChecked);
  };
  return (
    <div className="app__header header col-12">
      <span
        onClick={() => setPickedCategory(Categories.INTRO)}
        className="header__button"
      >
        LM
      </span>
      <ul className="header__nav">
        {navCategories.map((category: string, index: number) => (
          <li
            key={index}
            className="header__nav-category"
            onClick={() => setPickedCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
      <Switch
        className="header__switch"
        onChange={handleClick}
        checked={isChecked}
        onColor="#e53170"
        offColor="#ff8906"
      />
    </div>
  );
};

export default Header;
