import { useLanguage } from "../../../hooks/useLanguage";
import aboutImg from "../../../assets/images/about-img4.jpg";
import ProgramCards from "../../ui/ProgramCards/ProgramCards";
import "./HomePrograms.css";

const HomePrograms = () => {
  const { t } = useLanguage();

  const programs = [
    {
      img: aboutImg,
      title: t("mini_groups"),
      desc: t("mini_groups_desc"),
      link: "/programs/mini-groups/MiniGroups",
    },
    {
      img: aboutImg,
      title: t("personal_lessons"),
      desc: t("personal_lessons_desc"),
      link: "/programs/personal-lessons/PersonalLessons",
    },
    {
      img: aboutImg,
      title: t("camp_in_amed"),
      desc: t("camp_in_amed_desc"),
      link: "/programs/camp-in-amed/CampInAmed",
    },
    {
      img: aboutImg,
      title: t("childrens_group"),
      desc: t("childrens_group_desc"),
      link: "/programs/childrens-group/ChildrensGroup",
    },
    {
      img: aboutImg,
      title: t("interisland_swim"),
      desc: t("interisland_swim_desc"),
      link: "/programs/interisland-swim/InterislandSwim",
    },
  ];

  return (
    <section className="programs">
      <div className="container">
        <h1 className="programs__title title-h2">{t("programs")}</h1>
        <div className="programs__container">
          {programs.map((item, index) => (
            <ProgramCards key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePrograms;
