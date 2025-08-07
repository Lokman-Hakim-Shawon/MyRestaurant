// import React from 'react';
import img from '../../assets/home/banner.jpg'
const OurMenuBanner = ({img,heading,subheading}) => {
    return (
        <div className='py-4 h-[35vh] lg:h-[80vh] flex items-center justify-center mb-4 bg-cover bg-center' style={{backgroundImage: `url(${img})`}}>
            {/* <img src={img} /> */}
            <div className='z-10  text-center bg-black bg-opacity-50 w-[80%] lg:w-[80%] lg:p-24 py-4 text-white'>
                <h1 className="lg:text-5xl lg:py-4 uppercase font-bold">{heading}</h1>
                <p className='text-xs lg:text-lg px-4'>{subheading}</p>
            </div>
        </div>
    );
};

export default OurMenuBanner;