import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import imagesData from "./gallery.json"; // 👈 импортируем JSON, который создаёт resize.js
import "./ImagesGallery.css";

// Пример соотношений сторон для визуального разнообразия
const aspectRatios = [
  2000 / 3000, //  1
  1000 / 1000, //  2
  3000 / 1500, //  3
  3000 / 1500, //  4
  1000 / 1000, //  5
  2000 / 3000, //  6
];

const ImagesGallery = ({ limit, imagesSource }) => {
  const [data, setData] = useState({ img: "", i: 0, open: false });

  // Берём изображения из пропса или из JSON
  const images = (imagesSource || imagesData).slice(0, limit || imagesData.length);

  const viewImage = (img, i) => setData({ img, i, open: true });

  const imgAction = (action) => {
    let i = data.i;
    if (action === "next" && i < images.length - 1)
      setData({ img: images[i + 1].full, i: i + 1, open: true });
    else if (action === "prev" && i > 0)
      setData({ img: images[i - 1].full, i: i - 1, open: true });
    else if (action === "close")
      setData({ img: "", i: 0, open: false });
  };

  return (
    <>
      {data.open && (
        <div className="overlay" onClick={() => imgAction("close")}>
          <div className="overlay__content" onClick={(e) => e.stopPropagation()}>
            <button className="overlay__content-btn prev" onClick={() => imgAction("prev")}>
              ‹
            </button>
            <img src={data.img} className="overlay__content-img" alt="full-size" />
            <button className="overlay__content-btn next" onClick={() => imgAction("next")}>
              ›
            </button>
          </div>
        </div>
      )}

<div className="imggallery-container">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="10px">
            {images.map((image, i) => {
              const ratio = aspectRatios[i % aspectRatios.length];
              return (
                <div
                  key={i}
                  className="imgGallery"
                  style={{ aspectRatio: ratio }}
                >
                  <img
                    src={image.thumb}
                    loading="lazy"
                    onClick={() => viewImage(image.full, i)}
                    className="imgGallery-img"
                    alt={`gallery item ${i + 1}`}
                  />
                </div>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
</div>
    </>
  );
};

export default ImagesGallery;
