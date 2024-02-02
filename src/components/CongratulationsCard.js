import React from 'react';
import { FaTruckFast } from "react-icons/fa6";
import { RiTreeLine } from "react-icons/ri";
import { IoMan } from "react-icons/io5";

function CongratulationsCard() {
  return (
    <>
        <div className='flex justify-center bg-white'>
            <div className='text-center'>
                <div className='pt-20'>
                    <h1 className='text-7xl font-bold text-[#63B9B0] rubik'>Congratulations</h1>
                </div>
                <div className='rubik pt-14'>
                    <p className='text-4xl font-medium text-[#33B3A6]'>We have recieved your order.You will recieve an email from</p>
                    <p className='font-semibold leading-10 text-[#63B9B0] text-5xl py-10'><i>" </i>mail@raycura.com<i> "</i></p>
                </div>
                <div className='mt-10'>
                    <a href="#" className='text-2xl py-5 px-10 bg-[#33B3A6] text-white font-semibold'>Back to Main Page</a>
                </div>
            </div>
        </div>
        <div className='fixed bottom-0 left-0 right-0'>
            <div className='flex justify-between px-32 items-baseline text-[#A8E9E2]'>
                <FaTruckFast size={80} />
                <div className='flex items-baseline'>
                    <IoMan size={80} />
                    <RiTreeLine size={120} />                    
                </div>
            </div>
            <div className='bg-[#A8E9E2] p-3'>
            </div>
        </div>
    </>
  )
}

export default CongratulationsCard