import React from "react";
import { Card } from "../../components";
import mark from "../../assets/github-mark.svg";
import { projectsData } from "../../data";

const projectsList = [
  {
    photo: mark,
    name: projectsData.firstProjectName,
    description: projectsData.firstProjectDescription,
  },
  {
    photo: mark,
    name: projectsData.secondProjectName,
    description: projectsData.secondProjectDescription,
  },
  {
    photo: mark,
    name: projectsData.thirdProjectName,
    description: projectsData.thirdProjectDescription,
  },
];

const Projects = () => {
  return (
    <div className="app__category projects row justify-content-center p-5">
      <div className="col-4">
        {projectsList.map(({ photo, name, description }, index: number) => (
          <Card
            key={index}
            photo={photo}
            title={name}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
