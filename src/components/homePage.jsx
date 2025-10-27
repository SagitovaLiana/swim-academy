// import { useLanguage } from '../hooks/useLanguage';

import Hero from "./home/hero/hero";
import About from "./home/about/about";

const HomePage = () => {
  // const { t } = useLanguage();

  return (
    <div className="home-page">
      < Hero />
      < About/>
    </div>
  );
};

export default HomePage;