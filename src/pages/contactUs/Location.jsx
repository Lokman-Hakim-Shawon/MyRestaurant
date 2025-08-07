import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { IoIosTime } from "react-icons/io";

const Location = () => {
    return (
        <div className='grid grid-cols-1 gap-y-4 lg:gap-y-0 lg:grid-cols-3 gap-x-4'>
            <div className='text-center'>
                <div className='bg-[#D1A054] w-full py-4'>
                    <FaPhoneAlt className='text-5xl text-white mx-auto' />
                </div>
                <div className='bg-gray-200 py-12'>
                    <h1 className="py-6 uppercase">phone</h1>
                    <p className="">+8801404142439</p>
                    <p className="">+8801772175529</p>
                </div>
            </div>
            
            <div className='text-center'>
                <div className='bg-[#D1A054] w-full py-4'>
                    <IoLocation className='text-5xl text-white mx-auto' />
                </div>
                <div className='bg-gray-200 py-12'>
                    <h1 className="py-6 uppercase">address</h1>
                    <p className="">Gazipura Sataish,</p>
                    <p className="">Tongi, Gazipur</p>
                </div>
            </div>

            <div className='text-center'>
                <div className='bg-[#D1A054] w-full py-4'>
                    <IoIosTime className='text-5xl text-white mx-auto'/>
                </div>
                <div className='bg-gray-200 py-12'>
                    <h1 className="py-6 uppercase">working hours</h1>
                    <p className="">Mon - Fri: 08:00 - 22:00</p>
                    <p className="">Sat - Sun: 10:00 - 23:00</p>
                </div>
            </div>
        </div>
    );
};

export default Location;