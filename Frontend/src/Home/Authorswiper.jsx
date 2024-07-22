import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './authswiper.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

function Authorswiper() {
    return (
        <div className="authorswiper-container">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className="authorswiper-slide">
                    <img src="https://m.media-amazon.com/images/I/71Xa9x-w1FL._SY466_.jpg" alt="Nature 1" />
                </SwiperSlide>
                <SwiperSlide className="authorswiper-slide">
                    <img src="https://m.media-amazon.com/images/I/41nOdfX7vCL._SY445_SX342_.jpg" alt="Nature 2" />
                </SwiperSlide>
                <SwiperSlide className="authorswiper-slide">
                    <img src="https://m.media-amazon.com/images/I/51LVhVIkYuL._SY445_SX342_.jpg" alt="Nature 3" />
                </SwiperSlide>
                <SwiperSlide className="authorswiper-slide">
                    <img src="https://m.media-amazon.com/images/I/41rfx4710XL._SY445_SX342_.jpg" alt="Nature 4" />
                </SwiperSlide>
                <SwiperSlide className="authorswiper-slide">
                    <img src="https://m.media-amazon.com/images/I/41d62RPQ9eL._SY445_SX342_.jpg" alt="Nature 5" />
                </SwiperSlide>
                <SwiperSlide className="authorswiper-slide">
                    <img src="https://m.media-amazon.com/images/I/41PpbPGWyTL._SY445_SX342_.jpg" alt="Nature 6" />
                </SwiperSlide>
                <SwiperSlide className="authorswiper-slide">
                    <img src="https://m.media-amazon.com/images/I/71ma6z5QU0L._SY466_.jpg" alt="Nature 7" />
                </SwiperSlide>
                <SwiperSlide className="authorswiper-slide">
                    <img src="https://m.media-amazon.com/images/I/71-aiV4FY7L._SY466_.jpg" alt="Nature 8" />
                </SwiperSlide>
                <SwiperSlide className="authorswiper-slide">
                    <img src="https://m.media-amazon.com/images/I/41mg7831nfL._SY445_SX342_.jpg" alt="Nature 9" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Authorswiper;
