// import { useLanguage } from '../hooks/useLanguage';

import Hero from "./home/hero/HeroHome";
import About from "./home/about/about";
import Choose from "./home/choose/Choose";
import Programs from "./home/programs/programs";
import HomeGallery from "./home/gallery/HomeGallery";
import Faq from "./home/faq/Faq";
import Testimonial from "./home/testimonial/Testimonial";

const Home = () => {
  // const { t } = useLanguage();

  return (
    <main className="main">
      < Hero />
      < About/>
      <Choose/>
      <Programs/>
      <HomeGallery/>
      <Faq/>
      <Testimonial/>
    </main>
  );
};

export default Home;