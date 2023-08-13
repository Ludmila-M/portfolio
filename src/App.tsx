import React, { useEffect, useState } from "react";
import { Intro, Bio, Experience, Contact } from "./pages";
import { Header } from "./components";
import { Categories } from "./enums/categories";
import "./App.scss";

const App = () => {
  const [themeSwitched, setThemeSwitching] = useState(false);
  const [pickedCategory, setPickedCategory] = useState("");

  function pickCategory(pickedCategory: string) {
    switch (pickedCategory) {
      case Categories.INTRO:
        return <Intro />;
      case Categories.BIO:
        return <Bio />;
      case Categories.EXPIERENCE:
        return <Experience />;
      case Categories.CONTACT:
        return <Contact />;
      default:
        return <Intro />;
    }
  }

  const switchTheme = () => {
    setThemeSwitching(!themeSwitched);
  };
  return (
    <div
      className={`app ${
        themeSwitched ? "app--dark" : "app--light"
      } container-fluid`}
    >
      <div className="row">
        <Header
          switchTheme={switchTheme}
          setPickedCategory={setPickedCategory}
        />
        {pickCategory(pickedCategory)}
      </div>
    </div>
  );
};

export default App;
