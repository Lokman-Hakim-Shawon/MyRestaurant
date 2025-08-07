import React from 'react';

const ContactForm = () => {
    return (
        <div className='bg-gray-200 p-8 mb-24'>
            <div className='lg:flex lg:justify-between gap-x-2'>
                <div className='w-full'>
                    <p className="py-2">Name</p>
                    <input
                    type="text"
                    id="id"
                    name="name"
                    placeholder="Enter Your Name"
                    className="w-[100%] py-3 px-5 outline-none	bg-white flex-1"
                />
                </div>
                <div className='w-full'>
                    <p className="py-2">E-mail</p>
                <input
                    type="email"
                    id="id"
                    name="email"
                    placeholder="Enter Your E-mail"
                    className="w-[100%] py-3 px-5 outline-none	bg-white flex-1"
                />
                </div>
            </div>
            <div className='my-8'>
            <p className="py-2">Phone</p>
            <input
                type="number"
                id="id"
                name="phone"
                placeholder="Enter Your Phone Number"
                className="w-[100%] py-3 px-5 outline-none	bg-white "
            />
            </div>
            
            <div >
                <textarea type="text"
                id="id"
                name="message"
                placeholder="write your message here"
                className="w-[100%] py-3 px-5 outline-none	bg-white h-[50vh]"/>
            </div>
            <button className="px-8 py-4 font-sans font-semibold  text-white bg-[#D1A054] rounded-lg my-4 mx-auto">
                Send Message
            </button>
        </div>
    );
};

export default ContactForm;