import React from 'react';
import img1 from '../../assets/menu/banner3.jpg'
import img2 from '../../assets/menu/dessert-bg.jpeg'
import img3 from '../../assets/menu/banner2.jpg'
import img4 from '../../assets/menu/pizza-bg.jpg'
import img5 from '../../assets/menu/salad-bg.jpg'
import img6 from '../../assets/menu/soup-bg.jpg'
const MenuList = () => {
    const list=[
        {photo:img1,heading:'ROAST DUCK BREAST',title:'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'},
        {photo:img2,heading:'ROAST DUCK BREAST',title:'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'},
        {photo:img3,heading:'ROAST DUCK BREAST',title:'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'},
        {photo:img4,heading:'ROAST DUCK BREAST',title:'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'},
        {photo:img5,heading:'ROAST DUCK BREAST',title:'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'},
        {photo:img6,heading:'ROAST DUCK BREAST',title:'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'},
]
    return (
        <div className='my-8 flex flex-col items-center gap-y-4'>
            <div className='grid lg:grid-cols-2 gap-6 '>
            {
                list.map((data,inx)=><div key={inx} className='flex justify-center items-center gap-x-4'>
                <img src={data.photo} alt="" className='lg:w-24 lg:h-24 w-16 h-16 rounded-r-full rounded-b-full'/>
                <div>
                    <h1>{data.heading}</h1>
                    <p>{data.title}</p>
                </div>
            </div>)
            }
            </div>
            <button className='uppercase border-b-2 border-black lg:w-[20%] rounded-xl px-4 py-2 hover:bg-black hover:text-white'>view full menu</button>
        </div>
    );
};
  
export default MenuList;