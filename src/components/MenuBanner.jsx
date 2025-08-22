import React from 'react';
import img from '../assets/home/featured.jpg'
import SectionTitle from '../pages/shered/SectionTitle';
const MenuBanner = () => {
    return (
        <div
  className="hero lg:h-[100vh] my-8"
  style={{
    backgroundImage:
      `url(${img})`,
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center grid grid-col-1 pt-0">
  <SectionTitle heading={'from our menu'} subheading={'check it out'} />
    <div className="min-w-[80%] lg:flex mx-auto">
        <div className=''>
            <img src={img} className='w-[80%]' />
        </div>
        <div className='text-left'>
        <h3 className='text-lg'>March 20, 2023</h3>
      <h1 className="mb-5 text-xl ">WHERE CAN I GET SOME?</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi.
        Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
      </p>
      <a href='https://d7leadfinder.com/app/view-leads/19450664/' className="py-4 px-8 text-white uppercase font-medium border-b-4 border-b-white rounded-xl hover:border-[#BB8506] hover:text-[#BB8506] hover:bg-black">read more</a>
        </div>
    </div>
  </div>
</div>
    );
};

export default MenuBanner;