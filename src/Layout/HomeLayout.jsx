import React from 'react';
import Header from '../components/Header';
import Latest from '../components/Latest';
import Navber from '../components/Navber';
import LeftAside from '../components/LeftAside';
import RightAside from '../components/RightAside';
import { Outlet } from 'react-router-dom';


const HomeLayout = () => {
    return (
        <div className='container mx-auto font-poppins'>
           <Header></Header>
           <Latest></Latest>
           <Navber></Navber>
           <main className='grid md:grid-cols-4 gap-8'>
            <LeftAside></LeftAside>
            <section className='col-span-2'><Outlet></Outlet></section>
            <RightAside></RightAside>
           </main>
        </div>
    );
};

export default HomeLayout;