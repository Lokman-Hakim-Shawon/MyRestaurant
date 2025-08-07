// import React from 'react';

import MenuList from "../shered/MenuList";
import OurMenuBanner from "./OurMenuBanner";
// menulist
import img1 from '../../assets/menu/dessert-bg.jpeg'
import img2 from '../../assets/menu/pizza-bg.jpg'
import img3 from '../../assets/menu/salad-bg.jpg'
import img4 from '../../assets/menu/soup-bg.jpg'
import img5 from '../../assets/menu/banner3.jpg'
import img6 from '../../assets/menu/pizza-bg.jpg'
import SectionTitle from "../shered/SectionTitle";
import MenuItemsBanner from "./MenuItemsBanner";
import img7 from '../../assets/home/chef-service.jpg' 
import img8 from '../../assets/home/banner.jpg'
const OurMenuPage = () => {
    const list=[
        {photo:img1,heading:'ROAST DUCK BREAST',title:'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'},
        {photo:img2,heading:'ROAST DUCK BREAST',title:'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'},
        {photo:img3,heading:'ROAST DUCK BREAST',title:'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'},
        {photo:img4,heading:'ROAST DUCK BREAST',title:'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'},
        {photo:img5,heading:'ROAST DUCK BREAST',title:'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'},
        {photo:img6,heading:'ROAST DUCK BREAST',title:'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'},
]
    return (
        <div>
            <OurMenuBanner heading={'our Menu'} subheading={'would you like to try a dish?'} img={img8}/>
            <SectionTitle heading={"today's offer"} subheading={"Don't miss"} />
            <MenuList list={list}/>
            <MenuItemsBanner heading={'dessert'} subheading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} img={img7} />
            <MenuList list={list}/>
            <MenuItemsBanner heading={'dessert'} subheading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} img={img7} />
            <MenuList list={list}/>
            <MenuItemsBanner heading={'dessert'} subheading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} img={img7} />
            <MenuList list={list}/>
            <MenuItemsBanner heading={'dessert'} subheading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} img={img7} />
            <MenuList list={list}/>
            <MenuItemsBanner heading={'dessert'} subheading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} img={img7} />
        </div>
    );
};

export default OurMenuPage;