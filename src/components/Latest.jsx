import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const Latest = () => {
    return (
        <div className='flex bg-[#F3F3F3]'>
           <p className='bg-[#D72050] px-4 py-1 text-white'> Latest news</p>
           <Marquee pauseOnHover={true} speed={100}><Link>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, error!</Link></Marquee>
        </div>
    );
};

export default Latest;