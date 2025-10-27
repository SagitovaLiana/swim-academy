// import { useLanguage } from '../hooks/useLanguage';

import Hero from "./home/hero/hero";
import About from "./home/about/about";
import Programs from "./home/programs/programs";

const HomePage = () => {
  // const { t } = useLanguage();

  return (
    <div className="home-page">
      < Hero />
      < About/>
      <Programs/>
    </div>
  );
};

export default HomePage;