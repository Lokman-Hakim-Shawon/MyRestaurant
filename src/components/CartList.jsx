import React, { useRef, useState } from 'react';

const CartList = ({data}) => {
    const [allData,setAllData]=useState(false)
    const totalData=allData?data:data.slice(0,6)
    const positionRef=useRef(null)
    const handleData=()=>{
        if(allData && positionRef.current){
            const elementTop = positionRef.current.getBoundingClientRect().top + window.scrollY
            const offset = window.innerHeight* 0.4;
            window.scrollTo({
                top: elementTop-offset,
                behavior:'smooth'
            })
        }
        setAllData(!allData)
    }
    return (
        <div ref={positionRef} className='text-center py-8'>
            <div className='lg:grid lg:grid-cols-3 lg:justify-between lg:gap-x-8 '>
        {
            totalData.map((data,inx)=><div key={inx} className="card bg-base-100 w-72 lg:w-96 shadow-sm my-12 mx-auto">
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
        <button onClick={handleData} className='uppercase border-b-2 border-black lg:w-[20%] rounded-xl px-4 py-2 hover:bg-black hover:text-white bg-gray-200'>{allData?'less Card':'view all card'}</button>
        </div>
    );
};

export default CartList;