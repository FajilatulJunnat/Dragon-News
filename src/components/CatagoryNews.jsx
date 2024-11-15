import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const CatagoryNews = () => {
    const news=useLoaderData()
    
    console.log(news);
    
    return (
        <div>
           <h2 className='font-semibold'>Dragon News Home</h2>
           <div className='mt-10 space-y-4'>
            {
                (news.data).map((singlenews)=>(<NewsCard key={singlenews._id} singlenews={singlenews}></NewsCard>))
            }
           </div>
        </div>
    );
};

export default CatagoryNews;