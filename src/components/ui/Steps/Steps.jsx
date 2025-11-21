import React from "react";
import "./Steps.css";

const Steps = ({ title, items }) => {
  return (
    <section className="steps">
<div className="container steps__container">
        <h2 className="steps__title title-h2 title-margin">{title}</h2>
        <ul className="steps__list">
          {items.map((item, index) => (
            <li className="steps__item" key={index}>
              <div className="steps__left">
                <span className="steps__left-text title-h3">{item.leftText}</span>
              </div>
  
              <div className="steps__center">
                <span className="steps__center-dot"></span>
                <div className="steps__center-line"></div>
              </div>
  
              <div className="steps__right">
                <h4 className="steps__right-title title-h3">{item.rightTitle}</h4>
                <p className="steps__right-text text-default">{item.rightText}</p>
              </div>
            </li>
          ))}
        </ul>
</div>
    </section>
  );
};

export default Steps;
