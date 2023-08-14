import React from "react";
import { Icon } from "@iconify/react";
import { contactData } from "../../data";

const contactsList = [
  {
    icon: "mdi:github",
    name: contactData.githubName,
    link: contactData.githubLink,
  },
  {
    icon: "ic:outline-email",
    name: contactData.mailName,
    link: contactData.mailAdress,
  },
];

const Contact = () => {
  return (
    <div className="app__category contact row justify-content-center p-5">
      <div className="col-4 ">
        {contactsList.map(({ icon, name, link }, index) => (
          <a
            key={index}
            href={link === contactData.mailAdress ? `mailto:${link}` : link}
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center text-decoration-none"
          >
            <Icon icon={icon} />
            <span>{name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
