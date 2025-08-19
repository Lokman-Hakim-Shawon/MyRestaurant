import React from 'react';
import img1 from '../../assets/others/authentication1.png'
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Login = () => {
    return (
        <div className=' text-center  font-inter'>
            <h1 className='pt-24 text-4xl font-bold underline'>Login</h1>
        <div className='lg:flex lg:px-24 lg:pb-24 shadow-xl justify-between items-center'>
        <div className='flex-1 p-8 items-center'><img src={img1} /></div>
        <div className='flex-1  '>
            <form className="flex flex-col gap-4 p-4" action="" method="">
                <input
                    type="text"
                    id="id"
                    name="email"
                    placeholder="email"
                    className="w-[full] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
                />
                 <input
                    type="password"
                    id="id"
                    name="password"
                    placeholder="password"
                    className="w-[full] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
                 />
                 <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-[#D1A054] rounded-lg h-[60px]">
                    Login
                 </button>
                 <p className="">You have an account <Link to='/register' className="cursor-pointer underline text-[#D1A054]">Register</Link></p>
                    <div>
                        <p className='font-inter'>Or Login With</p>
                        <div className='flex justify-center items-center gap-x-8 py-8 '>
                        <div className='p-2 border-2 border-black rounded-full cursor-pointer text-3xl'>
                        <FaFacebookF />
                        </div >
                        <div className='p-2 border-2 border-black rounded-full cursor-pointer text-3xl'>
                        <FaGoogle />
                        </div>
                        <div className='p-2 border-2 border-black rounded-full cursor-pointer text-3xl'>
                        <FaGithub />
                        </div>
                        </div>
                    </div>
            </form>
        </div>
        </div>
    </div>
    );
};

export default Login;