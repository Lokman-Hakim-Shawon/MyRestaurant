import React from 'react';
import CartList from '../../components/CartList';
import img1 from '../../assets/menu/salad-bg.jpg'
import OurMenuBanner from '../ourMenu/OurMenuBanner';
import img2 from '../../assets/shop/banner2.jpg'
const OurShop = () => {
    const data=[
        {img:img1,title:'Caeser Salad',subtitle:'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'},
        {img:img1,title:'Caeser Salad',subtitle:'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'},
        {img:img1,title:'Caeser Salad',subtitle:'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'},
        {img:img1,title:'Caeser Salad',subtitle:'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'},
        {img:img1,title:'Caeser Salad',subtitle:'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'},
        {img:img1,title:'Caeser Salad',subtitle:'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'},
        {img:img1,title:'Caeser Salad',subtitle:'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'},
        {img:img1,title:'Caeser Salad',subtitle:'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'},
        {img:img1,title:'Caeser Salad',subtitle:'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'},
        {img:img1,title:'Caeser Salad',subtitle:'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'},
        {img:img1,title:'Caeser Salad',subtitle:'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'},
        {img:img1,title:'Caeser Salad',subtitle:'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'},
        {img:img1,title:'Caeser Salad',subtitle:'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'},
        {img:img1,title:'Caeser Salad',subtitle:'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'},
        {img:img1,title:'Caeser Salad',subtitle:'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'},
        {img:img1,title:'Caeser Salad',subtitle:'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'},
        {img:img1,title:'Caeser Salad',subtitle:'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'},
        {img:img1,title:'Caeser Salad',subtitle:'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'},
    ]
    return (
        <div className='mt-0'>
            <OurMenuBanner heading={'OUR SHOP'} subheading={'would you like to try a dish?'} img={img2}/>
            <CartList data={data}/>
        </div>
    );
};

export default OurShop;