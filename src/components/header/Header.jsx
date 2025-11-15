import { useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import logoIcon from "../../assets/images/We Will Swim.svg";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { t, language, switchLanguage } = useLanguage();
  const [isOpen, setOpen] = useState(false);
  const handleToggle = () => {
    const newLang = language === "ru" ? "en" : "ru";
    switchLanguage(newLang);
  };

  return (
    <header className="header">
      <div className="container header__container">
        <NavLink to="/" className="header__logo">
          <img src={logoIcon} alt="Logo" />
        </NavLink>
        <div
          className={`header__right ${isOpen ? "header__right--active" : ""}`}
        >
          <nav className="header__nav nav">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="/" className="nav__link">
                  {t("home")}
                </NavLink>
              </li>

              <li className="nav__item nav__item--dropdown">
                <button className="nav__link nav__link--dropdown">
                  {t("programs")}
                </button>

                <ul className="nav__dropdown">
                  <li>
                    <NavLink
                      to="/programs/mini-groups/MiniGroups"
                      className="nav__dropdown-link text-small"
                    >
                      {t("mini_groups")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/programs/personal-lessons/PersonalLessons"
                      className="nav__dropdown-link text-small"
                    >
                      {t("personal_lessons")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/programs/camp-in-amed/CampInAmed"
                      className="nav__dropdown-link text-small"
                    >
                      {t("camp_in_amed")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/programs/childrens-group/ChildrensGroup"
                      className="nav__dropdown-link text-small"
                    >
                      {t("childrens_group")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/programs/interisland-swim/InterislandSwim"
                      className="nav__dropdown-link text-small"
                    >
                      {t("interisland_swim")}
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav__item">
                <NavLink to="/gallery" className="nav__link">
                  {t("gallery")}
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="header__toggle">
            <button
              className="header__toggle-btn"
              onClick={handleToggle}
              data-lang={language}
            >
              <span className="header__toggle-text">
                {language === "ru" ? t("language_ru") : t("language_en")}
              </span>
              <span className="header__toggle-slider"></span>
            </button>
          </div>
        </div>
        <button
          className={`header__menu-button ${
            isOpen ? "header__menu-button--active" : ""
          }`}
          onClick={() => setOpen(!isOpen)}
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        >
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
