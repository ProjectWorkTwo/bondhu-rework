import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const slides = [
  `https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  `https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  `https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  `https://images.unsplash.com/photo-1543564004-87cb2ebd4f80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  `https://images.unsplash.com/photo-1468109320504-a5e48f17cfb7?q=80&w=1537&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  `https://images.unsplash.com/photo-1569173675610-42c361a86e37?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
];

const LoginSignUpSlider = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper h-full overflow-hidden rounded-md"
      >
        {slides.map((item, i) => (
          <SwiperSlide className="w-full h-full" key={i}>
            <div className="shadow-2xl h-[400px]">
              <img src={item} alt="" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LoginSignUpSlider;
