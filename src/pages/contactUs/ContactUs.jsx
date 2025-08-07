import React from 'react';
import OurMenuBanner from '../ourMenu/OurMenuBanner';
import img from '../../assets/contact/banner.jpg'
import SectionTitle from '../shered/SectionTitle';
import Location from './Location';
import ContactForm from './ContactForm';
const ContactUs = () => {
    return (
        <div  className='text-black'>
            <OurMenuBanner heading={'contact us'} subheading={'would you like to try a dish?'} img={img} />
            <div className=' lg:w-[70%] mx-auto'>
            <SectionTitle heading={'our location'} subheading={'Visit us'}/>
            <Location/>
            <SectionTitle heading={'contact form'} subheading={'Send a Message'}/>
            <ContactForm/>
            </div>
        </div>
    );
};

export default ContactUs;