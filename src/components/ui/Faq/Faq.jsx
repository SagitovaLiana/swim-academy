import { useLanguage } from "../../../hooks/useLanguage";
import "./Faq.css";

const Faq = ({ items }) => {
  const { t } = useLanguage();
  return (
    <section className="faq">
      <div className="container faq__container">
        <h2 className="faq__title title-h2">{t("faq")}</h2>
        <div className="faq__list">
          {items.map((item, index) => (
            <details className="faq__accordion" key={index}>
              <summary className="faq__accordion-control">
                <h3 className="faq__accordion-title title-h3">
                  {item.question}
                </h3>
                <span className="faq__accordion-icon"></span>
              </summary>
              <p className="faq__accordion-text text-small">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
