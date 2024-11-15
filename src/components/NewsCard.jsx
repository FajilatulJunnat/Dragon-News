import React from 'react';
import { FaRegEye, FaShareAlt } from 'react-icons/fa';
import ReactStars from 'react-rating-stars-component';



const NewsCard = ({singlenews}) => {
    const {image_url,rating,author,title, details,total_view   }=singlenews

    const Rating = ({ rating }) => {
        return (
          <div>
            <ReactStars
              count={5}  
              value={rating}  
              size={24}
              isHalf={true}
              edit={false}  
              activeColor="#ffd700"
             
            />
          </div>
        );
      };
    
    return (
        <div>
           <div className="card bg-base-100  border ">
            <div className='flex justify-between bg-[#F3F3F3] rounded-t-xl p-8 items-center'>
                <div className='flex space-x-4 items-center'>
                    <img src={author.img} alt="" className='w-20 h-20 rounded-full' />
                    <div>
                        <h3 className='font-semibold '>
                            {
                               author.name
                            }
                        </h3>
                        <p>{author.published_date
                        }</p>
                    </div>
                </div>
                <div>
                <FaShareAlt />
                </div>
            </div>

       <div className='p-8 space-y-4'>
       <h2 className='font-bold text-xl'>
                {title}
            </h2>
  <figure >
    <img
      src={image_url}/>
  </figure>
  <div className="card-body p-0">

    <p>{details.slice(0,150)}...{''} <span className='text-[#FF8C47] font-bold'>read more</span></p>
    <hr />
    <div className="card-actions justify-between items-center">
    <div className='flex items-center space-x-2'>
    <Rating rating={rating.number} className='bg-[#FF8C47]'></Rating>
    
    <p>{rating.number}</p>
    </div>
    <div className='flex items-center space-x-2'>
    <FaRegEye/>
    <p>{total_view}</p>
    </div>
    </div>
  </div>
       </div>
</div>
        </div>
    );
};

export default NewsCard;