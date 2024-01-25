import React from 'react';
import Logo from '../assets/logo.png';
import { FaBars } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { GiKneeCap } from "react-icons/gi";
import { TbMassage } from "react-icons/tb";
import { MdContactPhone } from "react-icons/md";
import { IoLogIn } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { BsBuildingsFill } from "react-icons/bs";
// import { FaBars } from "react-icons/fa";
// import { FaBars } from "react-icons/fa";
// import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <div className="md:px-16 sm:px-2 h-16 flex justify-between items-center bg-white  w-full z-50">
        <div>
          <img src={Logo} alt="" className='w-50 h-50' width={150} />
        </div>
        <div className='md:hidden'>
          <FaBars className='text-2xl text-[#33B3A6]' />
        </div>
        <div className='hidden fixed inset-0 bg-[rgba(0,0,0,0.7)] z-50'></div>
        <div className="hidden fixed top-0 bottom-0 left-0 md:w-3/12 w-1/2 bg-[#33B3A6] z-[100]">
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
        {/* Mobile navbar */}
        <div className='hidden md:block'>
          <a href="#" className='p-5 text-[#33B3A6] uppercase font-semibold text-lg'>Home</a>
          <a href="#" className='p-5 text-[#33B3A6] uppercase font-semibold text-lg'>Ortho</a>
          <a href="#" className='p-5 bg-[#33B3A6] text-white uppercase font-semibold text-lg'>Physio</a>
          <a href="#" className='p-5 text-[#33B3A6] uppercase font-semibold text-lg'>Company</a>
          <a href="#" className='p-5 text-[#33B3A6] uppercase font-semibold text-lg'>Contact</a>
          <a href="#" className='p-5 text-[#33B3A6] uppercase font-semibold text-lg'>Login</a>
        </div>
      </div>
    </>
  )
}

export default Navbar