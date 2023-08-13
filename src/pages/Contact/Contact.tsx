import React from "react";
import { Icon } from "@iconify/react";

const contactsList = [
  { icon: "mdi:github", name: "github" },
  { icon: "ic:outline-email", name: "mail" },
];

const Contact = () => {
  return (
    <div className="app__category contact row justify-content-center p-5">
      <div className="col-4">
        {contactsList.map(({ icon, name }, index) => (
          <div key={index}>
            <Icon icon={icon} />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
