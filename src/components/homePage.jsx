// import { useLanguage } from '../hooks/useLanguage';

import Hero from "./home/hero/hero";
import About from "./home/about/about";
import Choose from "./home/choose/Choose";
import Programs from "./home/programs/programs";

const HomePage = () => {
  // const { t } = useLanguage();

  return (
    <div className="home-page">
      < Hero />
      < About/>
      <Choose/>
      <Programs/>
    </div>
  );
};

export default HomePage;