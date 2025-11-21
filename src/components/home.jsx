import Hero from "./home/hero/HeroHome";
import About from "./home/about/about";
import Choose from "./home/choose/Choose";
import HomePrograms from "./home/programs/HomePrograms";
import HomeGallery from "./home/gallery/HomeGallery";
import HomeFaq from "./home/faq/HomeFaq";
import Testimonial from "./home/testimonial/Testimonial";

const Home = () => {

  return (
    <main className="main">
      < Hero />
      < About/>
      <Choose/>
      <HomePrograms/>
      <HomeGallery/>
      <HomeFaq/>
      <Testimonial/>
    </main>
  );
};

export default Home;