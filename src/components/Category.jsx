import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import './styles.css';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import img1 from '../assets/home/slide1.jpg'
import img2 from '../assets/home/slide2.jpg'
import img3 from '../assets/home/slide3.jpg'
import img4 from '../assets/home/slide4.jpg'
import img5 from '../assets/home/slide5.jpg'
const Category = () => {
    return (
        <div className='my-4'>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper lg:my-24"
      >
        <SwiperSlide>
             <img src={img1} />
             <h1 className='lg:text-4xl uppercase text-center lg:-mt-16 text-white hidden lg:block'>salads</h1>
        </SwiperSlide>
        <SwiperSlide>
             <img src={img2} />
             <h1 className='lg:text-4xl uppercase text-center lg:-mt-16 text-white hidden lg:block'>soups</h1>
        </SwiperSlide>
        <SwiperSlide>
             <img src={img3} />
             <h1 className='lg:text-4xl uppercase text-center lg:-mt-16 text-white hidden lg:block'>pizzas</h1>
        </SwiperSlide>
        <SwiperSlide>
             <img src={img4} />
             <h1 className='lg:text-4xl uppercase text-center lg:-mt-16 text-white hidden lg:block'>desserts</h1>
        </SwiperSlide>
        <SwiperSlide>
             <img src={img5} />
             <h1 className='lg:text-4xl uppercase text-center lg:-mt-16 text-white hidden lg:block'>salads</h1>
        </SwiperSlide>
        <SwiperSlide>
             <img src={img2} />
             <h1 className='lg:text-4xl uppercase text-center lg:-mt-16 text-white hidden lg:block'>soups</h1>
        </SwiperSlide>
        <SwiperSlide>
             <img src={img3} />
             <h1 className='lg:text-4xl uppercase text-center lg:-mt-16 text-white hidden lg:block'>pizzas</h1>
        </SwiperSlide>
        <SwiperSlide>
             <img src={img4} />
             <h1 className='lg:text-4xl uppercase text-center lg:-mt-16 text-white hidden lg:block'>desserts</h1>
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Category;