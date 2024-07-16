import React from "react";
import Card, { CardProps } from "./Card/Card";
import Button from "../../shared/Button";
import styles from "./Services.module.css";

const svgModules = import.meta.glob("../../../assets/svg/*.svg", { eager: true });

const svgs: string[] = Object.values(svgModules).map(
  (module) => (module as { default: string }).default
);

const cards: CardProps[] = [
  { imgSrc: svgs[0], imgAlt: "filler", title: "Search doctor", text: "Choose your doctor from thousands of specialist, general, and trusted hospitals"},
  { imgSrc: svgs[1], imgAlt: "filler", title: "Online Pharmacy", text: "Buy your medicines with our mobile application with a simple delivery system"},
  { imgSrc: svgs[2], imgAlt: "filler", title: "Consultation", text: "Free consultation with our trusted doctors and get the best recomendations"},
  { imgSrc: svgs[3], imgAlt: "filler", title: "Details info", text: "Free consultation with our trusted doctors and get the best recomendations"},
  { imgSrc: svgs[4], imgAlt: "filler", title: "Emergency care", text: "You can get 24/7 urgent care for yourself or your children and your lovely family"},
  { imgSrc: svgs[5], imgAlt: "filler", title: "Tracking", text: "Track and save your medical history and health data"},
]

const Services: React.FC = () => {
  return (
    <section id="services" className={styles.services}>
      <h1>Our services</h1>
      <p>
        We provide to you the best
        choiches for you. Adjust it to your
        health needs and make sure your
        undergo treatment with our highly
        qualified doctors you can consult
        with us which type of service is
        suitable for your health
      </p>
      <div>
        {cards.map((card) => (
          <Card
            imgSrc={card.imgSrc}
            imgAlt={card.imgAlt}
            title={card.title}
            text={card.text} />
        ))}
      </div>
      <Button backgroundStyle="white" text="Learn more" />
    </section>
  )
};

export default Services;