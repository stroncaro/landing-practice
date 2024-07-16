import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Company from "./Company/Company";
import Application from "./Application/Application"
import Customers from "./Customers/Customers";
import Blog from "./Blog/Blog";

import styles from "./Content.module.css";

const Content: React.FC = () => {
  return (
    <main className={styles.content}>
      <Hero />
      <Services />
      <Company />
      <Application />
      <Customers />
      <Blog />
    </main>
  )
}

export default Content;