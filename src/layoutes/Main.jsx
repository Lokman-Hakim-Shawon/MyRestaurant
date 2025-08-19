import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shered/Footer';
import './Main.css'
import Navbar from '../pages/shered/Navbar';
const Main = () => {
    return (
        <div>
            <Navbar/>
            <div className='pt-16 lg:pt-0'>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;