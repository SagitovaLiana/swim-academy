import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./ImagesGallery.css";

const defaultImages = [
  { thumb: "/images/gallery/thumbs/image1.webp", full: "/images/gallery/full/image1.jpg" },
  { thumb: "/images/gallery/thumbs/image2.webp", full: "/images/gallery/full/image2.jpg" },
  { thumb: "/images/gallery/thumbs/image3.webp", full: "/images/gallery/full/image3.jpg" },
  { thumb: "/images/gallery/thumbs/image4.webp", full: "/images/gallery/full/image4.jpg" },
  { thumb: "/images/gallery/thumbs/image5.webp", full: "/images/gallery/full/image5.jpg" },
  { thumb: "/images/gallery/thumbs/image6.webp", full: "/images/gallery/full/image6.jpg" },
];

const aspectRatios = [
  2000 / 3000, //  1
  1000 / 1000, //  3
  3000 / 1500, //  5
  3000 / 1500, //  2
  1000 / 1000, //  4
  2000 / 3000, //  6
];

const ImagesGallery = ({ limit, imagesSource }) => {
  const [data, setData] = useState({ img: "", i: 0, open: false });
  const images = (imagesSource || defaultImages).slice(0, limit || defaultImages.length);
  const viewImage = (img, i) => setData({ img, i, open: true });
  const imgAction = (action) => {
    let i = data.i;
    if (action === "next" && i < images.length - 1) setData({ img: images[i + 1].full, i: i + 1, open: true });
    else if (action === "prev" && i > 0) setData({ img: images[i - 1].full, i: i - 1, open: true });
    else if (action === "close") setData({ img: "", i: 0, open: false });
  };
  return (
    <>
      {data.open && (
        <div className="overlay"
          onClick={() => imgAction("close")}
        >
            <div className="overlay__content" onClick={(e) => e.stopPropagation()}>
              <button className="overlay__content-btn prev" onClick={() => imgAction("prev")}>
                ‹
              </button>
              <img src={data.img} className="overlay__content-img" />
              <button className="overlay__content-btn next" onClick={() => imgAction("next")}>
                ›
              </button>
            </div>

        </div>
      )}
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry>
              {images.map((image, i) => {
                const ratio = aspectRatios[i % aspectRatios.length];
                return (
                  <div
                    key={i}
                    className="imgGallery"
                    style={{
                      aspectRatio: ratio,
                    }}
                  >
                    <img
                      src={image.thumb}
                      loading="lazy"
                      onClick={() => viewImage(image.full, i)}
                      className="imgGallery-img"
                    />
                  </div>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
    </>
  );
};

export default ImagesGallery;
