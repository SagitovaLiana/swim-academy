import React from "react";
import Button from "../Button/Button";
import "./Description.css";

const Description = ({
  title,
  text1,
  text2,
  text3,
  imgSrc,
  imgAlt,
  buttonText,
  buttonLink,
  reverse = false,
  external = false,
}) => {
  return (
    <section className="description">
     <div className={`container description__container ${reverse ? "description__container--reverse" : ""}`}>
        <div className="description__img">
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <div className="description__content">
          <h2 className="description__title title-h2">{title}</h2>
          <p className="description__text text-large">{text1}</p>
          <p className="description__text text-large">{text2}</p>
          <p className="description__text text-large">{text3}</p>
          {buttonText && (
            <Button
              href={buttonLink}
              external={external}
              className="description__btn"
            >
              {buttonText}
            </Button>
          )}
        </div>
     </div>
    </section>
  );
};

export default Description;
