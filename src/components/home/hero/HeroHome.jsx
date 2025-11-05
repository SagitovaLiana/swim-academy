import { useLanguage } from "../../../hooks/useLanguage";
import Hero from "../../ui/Hero/Hero";

const HeroHome = () => {
  const { t } = useLanguage();
  return (
      <Hero
        title={t("hero_title")}
        subtitle={t("hero_subtitle")}
        buttonText={t("book_trial")}
        buttonLink="https://api.whatsapp.com/send?phone=6281337186534&text=Hi%2CI%20would%20like%20to%20know%20more%20about%20We%20Will%20Swim%20Swimming%20Lesson."
      />
  );
};

export default HeroHome;
