import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './swiper.css';
import { EffectCards } from 'swiper/modules';

function Swipercard() {
    return (
        <div className="swipercard-container">
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide className="swipercard-slide"></SwiperSlide>
                <SwiperSlide className="swipercard-slide"></SwiperSlide>
                <SwiperSlide className="swipercard-slide"></SwiperSlide>
                <SwiperSlide className="swipercard-slide"></SwiperSlide>
                <SwiperSlide className="swipercard-slide"></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Swipercard;
