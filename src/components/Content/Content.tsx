import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Company from "./Company/Company";
import Application from "./Application/Application"
import Customers from "./Customers/Customers";
import Blog from "./Blog/Blog";

const Content: React.FC = () => {
  return (
    <main>
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