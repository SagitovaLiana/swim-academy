import { useLanguage } from "../hooks/useLanguage";
import Hero from "./ui/Hero/Hero";
import Description from "./ui/Description/Description";
import aboutImg from "../assets/images/about-img4.jpg";
import Steps from "./ui/Steps/Steps";
import Video from "./ui/Video/Video";
import myVideo from "../assets/video/video.mp4";
import Faq from "./ui/Faq/Faq";

const CampInAmed = () => {
  const { t } = useLanguage();
  const amedProgram = [
    {
      leftText: t("day1"),
      rightTitle: t("amed_day1_title"),
      rightText: t("amed_day1_desc"),
    },
    {
      leftText: t("day2"),
      rightTitle: t("amed_day2_title"),
      rightText: t("amed_day2_desc"),
    },
    {
      leftText: t("day3"),
      rightTitle: t("amed_day3_title"),
      rightText: t("amed_day3_desc"),
    },
    {
      leftText: t("departure"),
      rightTitle: t("amed_departure_title"),
      rightText: t("amed_departure_desc"),
    },
  ];
  const amedFaq = [
    {
      question: t("amed_q_1"),
      answer: t("amed_a_1"),
    },
    {
      question: t("amed_q_2"),
      answer: t("amed_a_2"),
    },
    {
      question: t("amed_q_3"),
      answer: t("amed_a_3"),
    },
    {
      question: t("amed_q_4"),
      answer: t("amed_a_4"),
    },
    {
      question: t("amed_q_5"),
      answer: t("amed_a_5"),
    },
  ];
  return (
    <main className="main">
      <Hero title={t("camp_in_amed")} />
      <Description
        title={t("about_program")}
        text1={t("amed_desc_1")}
        text2={t("amed_desc_2")}
        imgSrc={aboutImg}
      />
      <Steps title={t("program_title")} items={amedProgram} />
      <Video src={myVideo} />
      <Faq items={amedFaq} />
      <Hero
        title={t("amed_contact")}
        subtitle={t("amed_text")}
        buttonText={t("get_details")}
        buttonLink="https://api.whatsapp.com/send?phone=6281337186534&text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Amed."
        imageBcg="/images/gallery/full/image12.jpg"
      />
    </main>
  );
};

export default CampInAmed;
