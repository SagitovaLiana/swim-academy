import { useLanguage } from "../../../hooks/useLanguage";
import Faq from "../../ui/Faq/Faq";
import "./HomeFaq.css";

const HomeFaq = () => {
  const { t } = useLanguage();
  const HomeFaq = [
    {
      question: t("faq_q_1"),
      answer: t("faq_a_1"),
    },
    {
      question: t("faq_q_2"),
      answer: t("faq_a_2"),
    },
    {
      question: t("faq_q_3"),
      answer: t("faq_a_3"),
    },
    {
      question: t("faq_q_4"),
      answer: t("faq_a_4"),
    },
    {
      question: t("faq_q_5"),
      answer: t("faq_a_5"),
    },
  ];
  return (
        <Faq items={HomeFaq} />
  );
};

export default HomeFaq;
