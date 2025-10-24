import { useLanguage } from "../../../hooks/useLanguage";
import "./Hero.css";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="hero">
      <div className="container">
      </div>
    </section>
  )
}

export default Hero;