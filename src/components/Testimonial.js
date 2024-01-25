import React from 'react'
import ReviewCard from './ReviewCard'
import Focus from '../assets/focus.png';

function Testimonial() {
  return (
    <>
      <div className='p-5 lg:p-20'>
        <h1 className='uppercase text-[#33B3A6] text-center text-3xl font-semibold'>What Our Users Say</h1>
        <div className='py-20 grid grid-col-1 lg:grid-cols-3 grid-flow-row gap-24 auto-rows-min'>
          <ReviewCard img={Focus} name="ABC" reveiw="A testimonial is an honest endorsement of your product or service that usually comes from a customer, colleague, or peer who has benefited from or experienced success as a result of the work you did for them" />
          <ReviewCard img={Focus} name="ABC" reveiw="djgfijwgfi ddhjfguywg hmjgfgf jgfwfg" />
          <ReviewCard img={Focus} name="ABC" reveiw="djgfijwgfi ddhjfguywg hmjgfgf jgfwfg" />           
        </div>
      </div>
    </>
  )
}

export default Testimonial