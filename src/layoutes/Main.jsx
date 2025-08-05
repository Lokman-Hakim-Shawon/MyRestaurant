import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shered/Footer';
import './Main.css'
import Navbar from '../pages/shered/Navbar';
const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;