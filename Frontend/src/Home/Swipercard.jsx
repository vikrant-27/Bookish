import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './swiper.css';

// import required modules
import { EffectCards } from 'swiper/modules';

function Swipercard() {
  return (
    <div><Swiper
    effect={'cards'}
    grabCursor={true}
    modules={[EffectCards]}
    className="mySwiper"
  >
    <SwiperSlide></SwiperSlide>
    <SwiperSlide></SwiperSlide>
    <SwiperSlide></SwiperSlide>
    <SwiperSlide></SwiperSlide>
    <SwiperSlide></SwiperSlide>
  </Swiper>
  </div>
  )
}

export default Swipercard