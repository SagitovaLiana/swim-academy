import { useLanguage } from "../../../hooks/useLanguage";
import Button from "../../ui/Button/Button";
import aboutImg from "../../../assets/images/about-img4.jpg";
import gridImg from "../../../assets/images/about-img.jpg";
import "./Programs.css";

const Programs = () => {
  const { t } = useLanguage();
  return (
    <section className="programs">
      <div className="container programs__container">
                <div className="programs__text">
          <h2 className="programs__title title-h2">{t("our_programs")}</h2>
          <p className="programs__desc text-large">{t("programs_desc")}</p>
          <Button
            href="/#"
          >
            {t("more")}
          </Button>
        </div>
        <div className="programs__imgs">
          <img src={aboutImg} alt="Наша школа плавания" className="img-1"/>
          <img src={aboutImg} alt="Наша школа плавания" className="img-2" />
          <img src={gridImg} alt="Наша школа плавания"  className="img-3"/>
        </div>
      </div>
    </section>
  );
};

export default Programs;
