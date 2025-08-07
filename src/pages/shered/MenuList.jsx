import React from 'react';

const MenuList = ({list}) => {
    
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