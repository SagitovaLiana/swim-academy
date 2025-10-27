import { useLanguage } from "../../../hooks/useLanguage";
import Button from "../../ui/Button/Button";
import aboutImg from "../../../assets/images/about-img4.jpg";
import "./About.css";

const About = () => {
  const { t } = useLanguage();
  return (
    <section className="about">
      <div className="container about__container">
          <div className="about__img"><img src={aboutImg} alt="Наша школа плавания"/></div>
<div className="about__text">
          <h2 className="about__title title-h2">{t("about_us")}</h2>
          <p className="about__desc text-large">{t("about_desc")}</p>
          <Button
            href="https://api.whatsapp.com/send?phone=6281337186534&text=Hi%2CI%20would%20like%20to%20know%20more%20about%20We%20Will%20Swim%20Swimming%20Lesson."
            external
          >
            {t("book_trial")}
          </Button>
</div>
      </div>
    </section>
  );
};

export default About;
