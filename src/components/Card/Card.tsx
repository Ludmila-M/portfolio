import React from "react";
import "./Card.scss";

interface CardProps {
  photo?: string;
  title: string;
  subtitle?: string;
  description: string;
}

const Card = ({ photo, title, subtitle, description }: CardProps) => {
  return (
    <div className="card">
      {photo && <img src={photo} alt={title} className="card-img-top" />}
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <h5 className="card-title">{subtitle}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;
