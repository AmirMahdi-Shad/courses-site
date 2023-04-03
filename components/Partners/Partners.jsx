import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Partners = () => {
  return (
    <>
      <div className='w-full flex justify-center items-center p-5 mt-[2vw] relative'>
        <h3 className='text-[1.5vw] font-bold text-[#D9ECFF] font-inter absolute top-[0vw] left-[12.4vw] '>
          Our Course Partners
        </h3>
        <div className='absolute flex justify- items-center w-[84vw]  px-[4vw]'>
          <img src='/images/prevArrow.png' alt='' />
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <img src='/images/partner1.png' alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/images/partner2.png' alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/images/partner3.png' alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/images/partner4.png' alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/images/partner5.png' alt='' />
            </SwiperSlide>
          </Swiper>
          <img src='/images/nextArrow.png' alt='' />
        </div>
        <img
          src='/images/Vector822.png'
          alt='Our Course Partners'
          className='w-'
        />
      </div>
      <img src='/images/Ellipse1200' alt='shadow' className='partners-shadow' />
    </>
  );
};

export default Partners;
