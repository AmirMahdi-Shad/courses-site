import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";

SwiperCore.use([Navigation]);

const Partners = () => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef && swiperRef.current && swiperRef.current.slideNext) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef && swiperRef.current && swiperRef.current.slidePrev) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <>
      <div className="w-full flex justify-center items-center p-5 mt-[2vw] relative">
        <h3 className="text-[1.5vw] font-bold text-[#D9ECFF] font-inter absolute top-[0vw] left-[8vw] ">
          Our Course Partners
        </h3>
        <div className="absolute flex justify- items-center w-[84vw]  px-[4vw]">
          <img
            src="/images/prevArrow.png"
            alt=""
            onClick={handlePrev}
            className="swiper-button-prev"
          />
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
          >
            <SwiperSlide>
              <img src="/images/partner1.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/partner2.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/partner3.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/partner4.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/partner5.png" alt="" />
            </SwiperSlide>
          </Swiper>
          <img
            src="/images/nextArrow.png"
            alt=""
            onClick={handleNext}
            className="swiper-button-next"
          />
        </div>
        <img src="/images/Vector822.png" alt="Our Course Partners" className="w-" />
      </div>
      <img src="/images/Ellipse1200" alt="shadow" className="partners-shadow" />
    </>
  );
};

export default Partners;
