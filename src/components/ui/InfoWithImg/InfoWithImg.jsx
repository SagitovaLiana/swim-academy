import React from "react";
import Button from "../Button/Button";
import "./InfoWithImg.css";

const InfoWithImg = ({
  title,
  text,
  imgSrc,
  imgAlt,
  buttonText,
  buttonLink,
  reverse = false,
  external = false,
}) => {
  return (
    <section className={`InfoWithImg ${reverse ? "InfoWithImg--reverse" : ""}`}>
      <div className="InfoWithImg__img">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className="InfoWithImg__content">
        <h2 className="InfoWithImg__title title-h2">{title}</h2>
        <p className="InfoWithImg__text text-large">{text}</p>
        {buttonText && (
          <Button
            href={buttonLink}
            external={external}
            className="InfoWithImg__btn"
          >
            {buttonText}
          </Button>
        )}
      </div>
    </section>
  );
};

export default InfoWithImg;
