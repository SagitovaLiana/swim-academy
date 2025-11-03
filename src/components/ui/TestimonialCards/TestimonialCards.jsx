import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import './TestimonialCards.css';
import "swiper/css";
import "swiper/css/pagination";

const TestimonialCards = ({ testimonials = [] }) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      className="testimonial__slider"
      breakpoints={{
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    992: {
      slidesPerView: 2.5,
    },
    1200: {
      slidesPerView: 3,
    },
  }}
    >
      {testimonials.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="testimonial__card">
            <div className="testimonial__author">
              <img
                src={item.img}
                alt={item.name}
                className="testimonial__author-img"
              />
              <div className="testimonial__author-desc">
                <h3 className="testimonial__author-name title-h3">{item.name}</h3>
                <p className="testimonial__author-age text-default">{item.age}</p>
              </div>
            </div>
            <p className="testimonial__text text-small">{item.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialCards;
