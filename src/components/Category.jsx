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
        <div className='my-16 '>
      <Swiper
        slidesPerView={3}
        spaceBetween={5}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper lg:my-4 min-h-[1005]"
      >
        <SwiperSlide>
             <img src={img1} className='h-[30vh] lg:h-full'/>
             <h1 className='lg:text-2xl uppercase text-center lg:-mt-16 text-white hidden lg:block'>salads</h1>
        </SwiperSlide>
        <SwiperSlide>
             <img src={img2} className='h-[30vh] lg:h-full'/>
             <h1 className='lg:text-2xl uppercase text-center lg:-mt-16 text-white hidden lg:block'>soups</h1>
        </SwiperSlide>
        <SwiperSlide>
             <img src={img3} className='h-[30vh] lg:h-full'/>
             <h1 className='lg:text-2xl uppercase text-center lg:-mt-16 text-white hidden lg:block'>pizzas</h1>
        </SwiperSlide>
        <SwiperSlide>
             <img src={img4} className='h-[30vh] lg:h-full'/>
             <h1 className='lg:text-2xl uppercase text-center lg:-mt-16 text-white hidden lg:block'>desserts</h1>
        </SwiperSlide>
        <SwiperSlide>
             <img src={img5} className='h-[30vh] lg:h-full'/>
             <h1 className='lg:text-2xl uppercase text-center lg:-mt-16 text-white hidden lg:block'>salads</h1>
        </SwiperSlide>
        <SwiperSlide>
             <img src={img2} className='h-[30vh] lg:h-full'/>
             <h1 className='lg:text-2xl uppercase text-center lg:-mt-16 text-white hidden lg:block'>soups</h1>
        </SwiperSlide>
        <SwiperSlide>
             <img src={img3} className='h-[30vh] lg:h-full'/>
             <h1 className='lg:text-2xl uppercase text-center lg:-mt-16 text-white hidden lg:block'>pizzas</h1>
        </SwiperSlide>
        <SwiperSlide>
             <img src={img4} className='h-[30vh] lg:h-full'/>
             <h1 className='lg:text-2xl uppercase text-center lg:-mt-16 text-white hidden lg:block'>desserts</h1>
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Category;