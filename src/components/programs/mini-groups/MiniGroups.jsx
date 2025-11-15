import { useLanguage } from "../../../hooks/useLanguage";
import Hero from "../../../components/ui/Hero/Hero";
import "./MiniGroups.css";

const MiniGroups = () => {
  const { t } = useLanguage();
  return (
    <main className="main">
      <Hero title={t("mini_groups")} />

    </main>
  );
};

export default MiniGroups;