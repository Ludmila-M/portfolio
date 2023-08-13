import React from "react";
import "./Card.scss";

interface CardProps {
  photo: string;
  name: string;
  description: string;
}

const Card = ({ photo, name, description }: CardProps) => {
  return (
    <div className="card">
      <img src={photo} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;