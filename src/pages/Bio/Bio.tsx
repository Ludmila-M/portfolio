import React from "react";
import { basicData } from "../../data";

const Bio = () => {
  return (
    <div className="app__category bio row justify-content-center p-5">
      <div className="col-lg-4">
        <div>{basicData.bioContent}</div>
        <div>{basicData.bioContent}</div>
      </div>
    </div>
  );
};

export default Bio;
