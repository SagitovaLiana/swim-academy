import React from "react";
import { useLanguage } from "../hooks/useLanguage";
import ImagesGallery from "../components/ui/ImagesGallery/ImagesGallery";
import Hero from "../components/ui/Hero/Hero";

const Gallery = () => {
  const { t } = useLanguage();
  return (
    <>
      <Hero title={t("gallery")} />
      <ImagesGallery />
    </>
  );
};

export default Gallery;
