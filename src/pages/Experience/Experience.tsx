import React from "react";
import { Card } from "../../components";
import { experienceData } from "../../data";

const rolesList = [
  {
    role: experienceData.firstRole,
    company: experienceData.companyName,
    description: experienceData.firstRoleDescription,
  },
  {
    role: experienceData.secondRole,
    company: experienceData.companyName,
    description: experienceData.secondRoleDescription,
  },
];

const Experience = () => {
  return (
    <div className="app__category resume row justify-content-center p-5">
      <div className="col-4">
        {rolesList.map(({ company, role, description }, index: number) => (
          <Card
            key={index}
            title={role}
            subtitle={company}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
