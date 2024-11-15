import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='py-10  flex flex-col items-center justify-center space-y-4'>
           <img src={logo} alt="" />
           <h3 className='text-[#706F6F]'>Journalism Without Fear or Favour</h3>
           <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;