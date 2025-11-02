import React from 'react'
import ImagesGallery from "../../ui/ImagesGallery/ImagesGallery";
import "./Gallery.css";
const Gallery = () => {
  return (
    <section className='gallery'>
      <div className="container">
        <ImagesGallery/>
      </div>
    </section>
  )
}

export default Gallery;