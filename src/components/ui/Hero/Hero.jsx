import React from "react";
import Button from "../Button/Button";
import "./Hero.css";
import heroBcg from "../../../assets/images/hero-bcg.jpg";

const HeroContent = ({ title, subtitle, buttonText, buttonLink, imageBcg }) => {
  return (
    <section className="hero" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
          url(${imageBcg || heroBcg})
        `
      }}>
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
