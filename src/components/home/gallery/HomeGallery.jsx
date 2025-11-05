import React from "react";
import ImagesGallery from "../../ui/ImagesGallery/ImagesGallery";
import "./HomeGallery.css";
const HomeGallery = () => {
  return (
    <section className="gallery">
      <div className="container">
        <ImagesGallery limit={6} />
      </div>
    </section>
  );
};

export default HomeGallery;
