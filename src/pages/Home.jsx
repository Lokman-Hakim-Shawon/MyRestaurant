import React from 'react';
import Banner from '../components/Banner';
import Category from '../components/Category';
import SectionTitle from './shered/SectionTitle';
import Testimonia from '../components/Testimonia';
import MenuList from './shered/MenuList';

const Home = () => {
    return (
        <div>
           <Banner/> 
           <SectionTitle heading={'order online'} subheading={'From 11:00am to 10:00pm'} />
           <Category/>
           <Testimonia/>
           <SectionTitle heading={'FROM OUR MENU'} subheading={'Check it out'} />
           <MenuList/>
        </div>
    );
};

export default Home;