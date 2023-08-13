import React from "react";
import data from "../../data.json";

const Bio = () => {
  return (
    <div className="app__category bio row justify-content-center p-5">
      <div className="col-lg-4">
        <div>{data.bioContent}</div>
        <div>{data.bioContent}</div>
      </div>
    </div>
  );
};

export default Bio;
