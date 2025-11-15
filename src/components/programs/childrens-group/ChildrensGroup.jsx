import { useLanguage } from "../../../hooks/useLanguage";
import Hero from "../../ui/Hero/Hero";
import "./ChildrensGroup.css";

const ChildrensGroup = () => {
  const { t } = useLanguage();
  return (
    <main className="main">
      <Hero title={t("childrens_group")} />
    </main>
  );
};

export default ChildrensGroup;
