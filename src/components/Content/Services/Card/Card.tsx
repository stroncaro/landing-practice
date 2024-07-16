import React from "react";

export interface CardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, imgAlt, title, text }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={imgAlt}></img>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
}

export default Card;