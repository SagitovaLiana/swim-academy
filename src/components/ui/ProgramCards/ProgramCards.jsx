import { Link } from "react-router-dom";
import "./ProgramCards.css";

const ProgramCards = ({ img, title, desc, link }) => {
  return (
    <Link to={link} className="program-card__link">
      <div className="program-card">
        <div className="program-card__img-wrapper">
          <img src={img} alt={title} className="program-card__img" />
        </div>
        <div className="program-card__content">
          <h2 className="program-card__title subtitle">{title}</h2>
          <p className="program-card__desc text-default">{desc}</p>
        </div>
        <div className="program-card__arrow">
          <svg
            viewBox="0 0 24 24"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#0d103d"
              d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ProgramCards;
