import { useLanguage } from "../../../hooks/useLanguage";
import TestimonialCards from "../../ui/TestimonialCards/TestimonialCards";
import "./Testimonial.css";


const Testimonial = () => {
    const { t } = useLanguage();
  return (
    <section className="testimonial">
<div className="container">
  <h2 className="testimonial__title title-h2">{t("what_people_say")}</h2>
        <TestimonialCards
    testimonials={[
      {
        img: "/images/testimonial/anna.png",
        name: t("liza"),
        age: `41 ${t("yo")}`,
        text: t("liza_text")
      },
      {
        img: "/images/testimonial/dimitri.png",
        name: t("dimitri"),
        age: `40 ${t("yo")}`,
        text: t("dimitri_text")
      },
      {
        img: "/images/testimonial/anna.png",
        name: t("liza"),
        age: `41 ${t("yo")}`,
        text: t("liza_text")
      },
      {
        img: "/images/testimonial/dimitri.png",
        name: t("dimitri"),
        age: `40 ${t("yo")}`,
        text: t("dimitri_text")
      },
    ]}
  />
</div>
</section>
  )
}

export default Testimonial