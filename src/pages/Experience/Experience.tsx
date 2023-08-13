import React from "react";
import { Card } from "../../components"; 
import mark from "../../assets/github-mark.svg";

const projectsList = [
  { photo: mark, name: "X", description: "X desc" },
  { photo: mark, name: "Y", description: "Y desc" },
  { photo: mark, name: "Z", description: "Z desc" },
];

const Resume = () => {
  return (
    <div className="app__category resume row justify-content-center p-5">
      <div className="col-4">
        {projectsList.map(({ photo, name, description }, index: number) => (
          <Card photo={photo} name={name} description={description} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Resume;
