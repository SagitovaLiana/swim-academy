import { useLanguage } from "../../../hooks/useLanguage";
import "./Faq.css";

const Faq = () => {
  const { t } = useLanguage();
  return (
    <section className="faq">
      <div className="container faq_container">
        <h2 className="faq__title title-h2">{t("faq")}</h2>
        <div className="faq__list">
          <details className="faq__accordion">
            <summary className="faq__accordion-control">
              <h3 className="faq__accordion-title title-h3">{t("faq_q_1")}</h3>
              <span className="faq__accordion-icon"></span>
            </summary>
            <p className="faq__accordion-text text-small">{t("faq_a_1")}</p>
          </details>

          <details className="faq__accordion">
            <summary className="faq__accordion-control">
              <h3 className="faq__accordion-title title-h3">{t("faq_q_2")}</h3>
              <span className="faq__accordion-icon"></span>
            </summary>
            <p className="faq__accordion-text text-small">{t("faq_a_2")}</p>
          </details>

          <details className="faq__accordion">
            <summary className="faq__accordion-control">
              <h3 className="faq__accordion-title title-h3">{t("faq_q_3")}</h3>
              <span className="faq__accordion-icon"></span>
            </summary>
            <p className="faq__accordion-text text-small">{t("faq_a_3")}</p>
          </details>

          <details className="faq__accordion">
            <summary className="faq__accordion-control">
              <h3 className="faq__accordion-title title-h3">{t("faq_q_4")}</h3>
              <span className="faq__accordion-icon"></span>
            </summary>
            <p className="faq__accordion-text text-small">
              {t("faq_a_4_part1")}{" "}
              <a
                href="https://maps.app.goo.gl/iwgpnRTFV78NLDT47"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pronoia Community
              </a>{" "}
              {t("faq_a_4_part2")}{" "}
              <a
                href="https://maps.app.goo.gl/MiNVP55CzniFAJkZA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bethesda Swimming Pool
              </a>{" "}
              {t("faq_a_4_part3")}
            </p>
          </details>
                    <details className="faq__accordion">
            <summary className="faq__accordion-control">
              <h3 className="faq__accordion-title title-h3">{t("faq_q_5")}</h3>
              <span className="faq__accordion-icon"></span>
            </summary>
            <p className="faq__accordion-text text-small">{t("faq_a_5")}</p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;
