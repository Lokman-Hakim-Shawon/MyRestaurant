import React from 'react';
import Banner from '../components/Banner';
import Category from '../components/Category';
import SectionTitle from './shered/SectionTitle';

const Home = () => {
    return (
        <div>
           <Banner/> 
           <SectionTitle heading={'Web Developer'} subheading={'lokman hakim'} />
           <Category/>
           <SectionTitle heading={'Flutter Developer'} subheading={'Ajijul Hoq'} />
           <Category/>
        </div>
    );
};

export default Home;