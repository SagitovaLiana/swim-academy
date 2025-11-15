import { useLanguage } from "../../../hooks/useLanguage";
import Hero from "../../ui/Hero/Hero";
import "./InterislandSwim.css";

const InterislandSwim = () => {
  const { t } = useLanguage();
  return (
    <main className="main">
      <Hero title={t("interisland_swim")} />
    </main>
  );
};

export default InterislandSwim;
