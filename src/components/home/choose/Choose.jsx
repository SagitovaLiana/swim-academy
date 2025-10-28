import { useLanguage } from "../../../hooks/useLanguage";
import "./Choose.css";

const Choose = () => {
  const { t } = useLanguage();
  return (
    <section className="choose">
      <div className="container choose__container">
        <h2 className="choose__title title-h2">{t("choose")}</h2>
        <div className="choose__cards">
                    <div class="choose__card">
            <div class="choose__card-number title-h3">10+</div>
            <h3 class="choose__card-title title-h3">{t("choose_title_1")}</h3>
                        <p class="choose__card-desc text-default">
              {t("choose_desc_1")}
            </p></div>
                    <div class="choose__card">
            <div class="choose__card-number title-h3">500+</div>
            <h3 class="choose__card-title title-h3">{t("choose_title_2")}</h3>
            <p class="choose__card-desc text-default">
              {t("choose_desc_2")}
            </p>
          </div>
                    <div class="choose__card">
            <div class="choose__card-number title-h3">98%</div>
            <h3 class="choose__card-title title-h3">{t("choose_title_3")}</h3>
            <p class="choose__card-desc text-default">{t("choose_desc_3")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
