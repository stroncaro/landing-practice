import React from "react";
import Button from "../../shared/Button";
import ambulance from "../../../assets/svg/Ambulance.svg"

const Hero: React.FC = () => {
  return (
    <section id='hero'>
      <div>
        <h1>Virtual Healthcare for you</h1>
        <p>
          Trafalgar provides progressive, and
          affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <Button backgroundStyle="primary" text="Consult today" />
      </div>
      <img src={ambulance} alt="Ambulance ready to aid you!"/>
    </section>
  )
}

export default Hero;