import React, { useState, useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper';

// import contents
import { swiperContents } from '../constants';
const SwiperHome = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 780);

  useEffect(() => {
    const handleResize = () => setIsWideScreen(window.innerWidth > 780);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={isWideScreen}
      modules={isWideScreen ? [Autoplay, Pagination, Navigation] : []}
      className="mySwiper"
    >
      {swiperContents.map((content) => (
        <SwiperSlide key={content.id} className="h-screen">
          {content.content}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperHome;
