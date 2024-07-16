import React from "react";

export interface ArticleProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  text: string;
}

const Article: React.FC<ArticleProps> = ({ imgSrc, imgAlt, title, text }) => {
  return (
    <div>
      <img src={imgSrc} alt={imgAlt} />
      <h1>{title}</h1>
      <p>{text}</p>
      <a>Read more  →</a>
    </div>
  )
};

export default Article;