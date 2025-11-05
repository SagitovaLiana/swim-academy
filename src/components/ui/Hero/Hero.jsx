import React from "react";
import Button from "../Button/Button";
import "./Hero.css";

const HeroContent = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="hero">
      <div className="container hero__container">
        <h1 className="hero__title title-h1">{title}</h1>
        {subtitle && <h2 className="hero__subtitle title-h3">{subtitle}</h2>}

        {buttonText && buttonLink && (
          <Button href={buttonLink} external>
            {buttonText}
          </Button>
        )}
      </div>
    </section>
  );
};

export default HeroContent;
