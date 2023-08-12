import React, { useState } from "react";
import Intro from "./components/Intro";
import "../src/styles/App.scss";
import Header from "./components/Header";

const App = () => {
  const [themeSwitched, setThemeSwitching] = useState(false);

  const switchTheme = () => {
    setThemeSwitching(!themeSwitched);
  };
  return (
    <div
      className={`app ${themeSwitched ? "app--dark" : "app--light"} container-fluid`}
    >
      <div className="row">
        <Header switchTheme={switchTheme} />
        <Intro />
      </div>
    </div>
  );
};

export default App;
