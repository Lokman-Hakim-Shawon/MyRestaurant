import React from 'react';
import Banner from '../components/Banner';
import Category from '../components/Category';
import SectionTitle from './shered/SectionTitle';
import Testimonia from '../components/Testimonia';
import MenuList from './shered/MenuList';
import CartList from '../components/CartList';
import MenuBanner from '../components/MenuBanner';
// menulist
import img1 from '../assets/menu/dessert-bg.jpeg'
import img2 from '../assets/menu/pizza-bg.jpg'
import img3 from '../assets/menu/salad-bg.jpg'
import img4 from '../assets/menu/soup-bg.jpg'
import img5 from '../assets/menu/dessert-bg.jpeg'
import img6 from '../assets/menu/pizza-bg.jpg'

const Home = () => {
    const list=[
        {photo:img1,heading:'ROAST DUCK BREAST',title:'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'},
        {photo:img2,heading:'ROAST DUCK BREAST',title:'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'},
        {photo:img3,heading:'ROAST DUCK BREAST',title:'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'},
        {photo:img4,heading:'ROAST DUCK BREAST',title:'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'},
        {photo:img5,heading:'ROAST DUCK BREAST',title:'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'},
        {photo:img6,heading:'ROAST DUCK BREAST',title:'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'},
]
const data=[
    {img:img3,title:'Caeser Salad',subtitle:'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'},
    {img:img3,title:'Caeser Salad',subtitle:'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'},
    {img:img3,title:'Caeser Salad',subtitle:'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'},
]
    return (
        <div className=''>
           <Banner/> 
           <SectionTitle heading={'order online'} subheading={'From 11:00am to 10:00pm'} />
           <Category/>
           <Testimonia/>
           <MenuBanner/>
           <SectionTitle heading={'FROM OUR MENU'} subheading={'Check it out'} />
           <MenuList list={list}/>
           <SectionTitle heading={'chef recommends'} subheading={'should try'} />
           <CartList data={data}/>
        </div>
    );
};

export default Home;