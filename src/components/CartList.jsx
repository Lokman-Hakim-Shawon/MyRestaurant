import React from 'react';

const CartList = ({data}) => {
    
    return (
        <div className='lg:grid lg:grid-cols-3 lg:justify-between lg:gap-x-8 '>
        {
            data.map((data,inx)=><div key={inx} className="card bg-base-100 w-72 lg:w-96 shadow-sm my-12 mx-auto">
            <figure>
              <img
                src={data.img}
                alt="Shoes" />
            </figure>
            <div className="card-body flex flex-col items-center bg-gray-100 text-black">
              <h2 className="card-title text-2xl">{data.title}</h2>
              <p>{data.subtitle}</p>
              <div className="card-actions justify-end">
                <button className="py-4 px-8 rounded-xl border-b-2 border-b-[#BB8506] text-[#BB8506] uppercase hover:bg-[#1F2937]">add to cart</button>
              </div>
            </div>
          </div>)
        }
        </div>
    );
};

export default CartList;