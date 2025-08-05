import React from 'react';
import img from '../assets/home/chef-service.jpg'
const Testimonia = () => {
    return (
        <div className='py-4 h-[50vh] lg:h-[80vh] flex items-center justify-center my-4 bg-cover bg-center' style={{backgroundImage: `url(${img})`}}>
            {/* <img src={img} /> */}
            <div className='z-10  text-center bg-white w-[80%] lg:w-[80%] lg:p-24 py-4 text-black'>
                <h1 className="lg:text-3xl lg:py-4">My Restaurant</h1>
                <p className='text-xs lg:text-lg px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default Testimonia;