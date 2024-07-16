import React from "react";
import Article, { ArticleProps } from "./Article/Article";
import Button from "../../shared/Button";
import styles from "./Blog.module.css";

const jpgModules = import.meta.glob("../../../assets/jpg/*.jpg", { eager: true });

const jpgs: string[] = Object.values(jpgModules).map(
  (module) => (module as { default: string }).default
);

const articles: ArticleProps[] = [
  { imgSrc: jpgs[0], imgAlt: "filler", title: "Disease detection check up in the laboratory", text: "In this case, the role of the health laboratory is very important to do a disease detection..."},
  { imgSrc: jpgs[1], imgAlt: "filler", title: "Herbal medicines that are safe for compsumption", text: "Herbal medicine is widely used at this time because it's very good for your health..."},
  { imgSrc: jpgs[2], imgAlt: "filler", title: "Natural care for healthy facial skin", text: "A healthy lifestyle should start from now and also for you skin health. There are some..."},
]

const Blog: React.FC = () => {
  return (
    <section id='blog' className={styles.blog}>
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