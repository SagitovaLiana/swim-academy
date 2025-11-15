import { useLanguage } from "../../../hooks/useLanguage";
import Hero from "../../ui/Hero/Hero";
import "./CampInAmed.css";

const CampInAmed = () => {
  const { t } = useLanguage();
  return (
    <main className="main">
      <Hero title={t("camp_in_amed")} />
    </main>
  );
};

export default CampInAmed;
