import React, { useState } from "react";
import Switch from "react-switch";
import "../styles/Header.scss";

interface HeaderProps {
  switchTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ switchTheme }) => {
  const [isChecked, setChecked] = useState(false);
  const handleClick = () => {
    switchTheme();
    setChecked(!isChecked);
  };
  return (
    <div className="app__header col-12">
      <Switch onChange={handleClick} checked={isChecked} className="app__header-switch" />
    </div>
  );
};

export default Header;
