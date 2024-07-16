import React from "react";
import Article, { ArticleProps } from "./Article/Article";
import Button from "../../shared/Button";

const jpgModules = import.meta.glob("../../../assets/jpg/*.jpg", { eager: true });

const jpgs: string[] = Object.values(jpgModules).map(
  (module) => (module as { default: string }).default
);

const articles: ArticleProps[] = [
  { imgSrc: jpgs[0], imgAlt: "filler", title: "Search doctor", text: "Choose your doctor from thousands of specialist, general, and trusted hospitals"},
  { imgSrc: jpgs[1], imgAlt: "filler", title: "Online Pharmacy", text: "Buy your medicines with our mobile application with a simple delivery system"},
  { imgSrc: jpgs[2], imgAlt: "filler", title: "Consultation", text: "Free consultation with our trusted doctors and get the best recomendations"},
]

const Blog: React.FC = () => {
  return (
    <section>
      <h1>Check out our latest article</h1>
      <hr></hr>
      <div className="articles">
        {articles.map((article) => (
          <Article
            imgSrc={article.imgSrc}
            imgAlt={article.imgAlt}
            title={article.title}
            text={article.text} />
        ))}
      </div>
      <Button backgroundStyle="white" text="View all" />
    </section>
  )
};

export default Blog;