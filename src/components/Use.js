import React from 'react';
import { MdOutlineSlowMotionVideo } from "react-icons/md";


function Use() {
  return (
    <>
        <div className='pt-10'>
            <div>
                <h1 className='text-4xl text-[#33B3A6] text-center uppercase pb-5 font-semibold'>How to use</h1>
            </div>
            <div className='bg-[#33B3A6] w-full h-screen flex items-center justify-center'>
                <MdOutlineSlowMotionVideo className='text-white' size={60} />
            </div>
        </div>
    </>
  )
}

export default Use