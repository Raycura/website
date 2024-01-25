import React from 'react';
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

function ReviewCard({img,name,reveiw}) {
  return (      
        <div className='border-[#33B3A6] border-[3px] rounded-tr-[2rem] rounded-bl-[2rem] relative w-full mx-auto'>
          <div className='absolute -top-8 -left-3'>
            <ImQuotesLeft className='text-[#33B3A6]' size={50} />
          </div>
          <div className='flex justify-center absolute -top-10 w-full'>
            <img src={img} className='rounded-[100%] w-20 h-20 object-cover' alt="" />
          </div>
          <div className='mt-20 flex justify-start flex-col items-center'>
            <h2 className='text-[#33B3A6] text-2xl font-bold'>{name}</h2>
            <p className='px-8 py-5 text-justify text-[#33B3A6] text-lg'>{reveiw}</p>
          </div>
          <div className='absolute -bottom-8 -right-3'>
            <ImQuotesRight className='text-[#33B3A6]' size={50} />
          </div>
          <div className='flex justify-center gap-2 items-center py-10 text-[#33B3A6]'>
            <FaStar size={18} />
            <FaStarHalfAlt size={18} />
            <FaRegStar size={18} />
          </div>
        </div>
    
  )
}

export default ReviewCard