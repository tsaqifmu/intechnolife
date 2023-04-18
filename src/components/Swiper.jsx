import React, { useState, useEffect } from 'react';
import styles from '../style';
import { Link } from 'react-router-dom';
import { swiperContents } from '../constants';

import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={isWideScreen}
      modules={isWideScreen ? [Autoplay, Pagination, Navigation] : [Autoplay]}
      className={`h-full w-full`}
    >
      {swiperContents.map((content) => (
        <SwiperSlide
          key={content.id}
          className={`${styles.flexCenter} h-screen  bg-white lg:h-[405px] `}
        >
          <div className="absolute h-full w-full bg-gradient-to-t from-gray-500"></div>
          <img src={content.img} className="h-full w-full object-contain" />
          <Link className="absolute left-0 bottom-7 cursor-pointer px-5 text-4xl text-white transition-all hover:text-amber-300 sm:bottom-10 sm:left-14 sm:w-2/3 md:text-5xl md:leading-snug xl:w-1/2">
            <h1 className="mb-5 w-2/3 text-3xl font-bold lg:text-5xl ">
              {content.title}
            </h1>
            <p className="text-sm font-medium lg:text-lg">{`${content.author} - ${content.time}`}</p>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperHome;
