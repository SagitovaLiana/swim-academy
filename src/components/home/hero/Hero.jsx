import { useLanguage } from "../../../hooks/useLanguage";
import Button from "../../ui/Button/Button";
import "./Hero.css";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="hero">
      <div className="container hero__container">
        <h1 className="hero__title title-h1">{t("hero_title")}</h1>
        <h2 className="hero__subtitle title-h3">{t("hero_subtitle")}</h2>
        <Button  href="https://api.whatsapp.com/send?phone=6281337186534&text=Hi%2CI%20would%20like%20to%20know%20more%20about%20We%20Will%20Swim%20Swimming%20Lesson." external>
          {t("book_trial")}
        </Button>
      </div>
    </section>
  );
};

export default Hero;
