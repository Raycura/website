import React from 'react';
import { IoMdClose } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { GiKneeCap } from "react-icons/gi";
import { TbMassage } from "react-icons/tb";
import { MdContactPhone } from "react-icons/md";
import { IoLogIn } from "react-icons/io5";
import { BsBuildingsFill } from "react-icons/bs";

function MobileNav() {
  return (
    <>
        <div className='hidden fixed inset-0 bg-[rgba(0,0,0,0.7)] z-50'></div>
        <div className="hidden fixed top-0 bottom-0 left-0 w-[80vw] bg-[#33B3A6] z-[100]">
          <div className='float-end p-2'>
            <a href='#' className='text-3xl text-white'><IoMdClose/></a>
          </div>
          <div>
            <ul className='flex flex-col mt-10 px-5'>
              <div className='flex items-center hover:bg-[#18675f83] px-5 py-2 rounded-md'>
                <FaHome className='text-white text-lg' />
                <div>
                  <a href="#" className='p-2  text-white uppercase font-semibold text-lg'>Home</a>
                </div>
              </div>
              <div className='flex items-center hover:bg-[#18675f83] px-5 py-2 rounded-md mt-3'>
                <GiKneeCap className='text-white text-lg' />
                <div>
                  <a href="#" className='p-2  text-white uppercase font-semibold text-lg'>Ortho</a>
                </div>
              </div>   
              <div className='flex items-center hover:bg-[#18675f83] px-5 py-2 rounded-md mt-3'>
                <TbMassage className='text-white text-lg' />
                <div>
                  <a href="#" className='p-2  text-white uppercase font-semibold text-lg'>Physio</a>
                </div>
              </div>   
              <div className='flex items-center hover:bg-[#18675f83] px-5 py-2 rounded-md mt-3'>
                <BsBuildingsFill className='text-white text-lg' />
                <div>
                  <a href="#" className='p-2  text-white uppercase font-semibold text-lg'>Company</a>
                </div>
              </div>   
              <div className='flex items-center hover:bg-[#18675f83] px-5 py-2 rounded-md mt-3'>
                <MdContactPhone className='text-white text-lg' />
                <div>
                  <a href="#" className='p-2  text-white uppercase font-semibold text-lg'>Contact</a>
                </div>
              </div>   
              <div className='flex items-center hover:bg-[#18675f83] px-5 py-2 rounded-md mt-3'>
                <IoLogIn className='text-white text-lg' />
                <div>
                  <a href="#" className='p-2  text-white uppercase font-semibold text-lg'>Login</a>
                </div>
              </div>   
              
              </ul>
          </div>
        </div>
        
    </>
  )
}

export default MobileNav