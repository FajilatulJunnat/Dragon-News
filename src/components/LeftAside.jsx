import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftAside = () => {
    const [catgories,setCatagories]=useState([])
    useEffect(()=>{
        fetch(' https://openapi.programming-hero.com/api/news/categories')
        .then(res=>res.json())
        .then(data=>setCatagories(data.data.news_category)
        )
    },[])
    return (
        <div>
            <h2 className='text-[#403F3F] font-semibold'>All Caterogy</h2>
            <div className='flex flex-col gap-4 mt-10'>
                {
                    catgories.map(catagory=>
                    <NavLink to={`/category/${catagory.category_id}`} className='btn' key={catagory.category_id}>{catagory.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftAside;