import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/icon/cart.png'
import img2 from '../../assets/others/profile.png'
const Navbar = () => {
    const NavOptions=<>
    <Link to='/' className='border-b-2 border-[#D1A054] lg:border-b-0'>Home</Link>
    <Link to='/Our_menu' className='border-b-2 border-[#D1A054] lg:border-b-0'>Our Menu</Link>
    <Link to='/Our_shop' className='border-b-2 border-[#D1A054] lg:border-b-0'>Our Shop</Link>
    <Link to='/Contact_us' className='border-b-2 border-[#D1A054] lg:border-b-0'>Contact us</Link>
    <Link className='border-b-2 border-[#D1A054] lg:border-b-0'>Dashboard</Link>
    </>
    return (
        <div className="navbar fixed z-20 lg:bg-opacity-30 bg-opacity-70 bg-black  text-white max-w-screen-xl ">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-4 -ml-2 shadow bg-base-100 w-52 text-[#D1A054] space-y-4 bg-white">
        {NavOptions}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-lg lg:text-2xl font-bold">
      <h1 className="">MyRestaurant</h1>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 gap-x-4 text-xl uppercase  ">
      {NavOptions}
    </ul>
  </div>
  <div className="navbar-end ">
    <img src={img1} className='w-[25%] lg:w-[20%] mx-4' />
    <Link to={'/login'} className='w-[20%] lg:w-[15%] rounded-full cursor-pointer'><img src={img2} className='rounded-full'/></Link>
  </div>
</div>
    );
};

export default Navbar;