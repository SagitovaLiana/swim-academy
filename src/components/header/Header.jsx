import { useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import logoIcon from "../../assets/images/We Will Swim.svg";
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
        <a href="/" className="header__logo">
          <img src={logoIcon} alt="Logo" />
        </a>
        <div className={ 
          `header__right ${isOpen?"header__right--active":""}`}>
          <nav className="header__nav nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="/" className="nav__link">
                  {t("home")}
                </a>
              </li>
              <li className="nav__item">
                <a href="#!" className="nav__link">
                  {t("programs")}
                </a>
              </li>
              <li className="nav__item">
                <a href="#!" className="nav__link">
                  {t("gallery")}
                </a>
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
          className={`header__menu-button ${isOpen ? "header__menu-button--active" : ""}`}
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
