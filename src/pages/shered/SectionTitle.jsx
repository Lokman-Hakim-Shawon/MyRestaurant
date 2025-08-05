import React from 'react';

const SectionTitle = ({heading,subheading}) => {
    return (
        <div className='text-center w-[60%] lg:w-[30%] mx-auto my-2 lg:my-8'>
            <p className='text-xs lg:text-xl py-2 lg:py-4 text-yellow-600'>-------- {subheading} --------</p>
            <h1 className='text-sm lg:text-4xl uppercase border-y-2 border-yellow-500 py-2 lg:py-4'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;