import { useLanguage } from "../hooks/useLanguage";
import ImagesGallery from "../components/ui/ImagesGallery/ImagesGallery";
import Hero from "../components/ui/Hero/Hero";

const Gallery = () => {
  const { t } = useLanguage();
  return (
    <main className="main">
      <Hero title={t("gallery")} />
      <ImagesGallery />
    </main>
  );
};

export default Gallery;
