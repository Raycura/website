import React from 'react';
import Logo from '../assets/logo.png';
import Focus from '../assets/focus.png';
import Upgrade from '../assets/upgrade.png';
import { FaBars } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import MobileNav from './MobileNav';
import DropDownMenu from './DropDownMenu';

// import { FaBars } from "react-icons/fa";
// import { FaBars } from "react-icons/fa";
// import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <>
    
        {/* Mobile navbar */}
      <div className="md:px-16 sm:px-2 h-16 flex justify-between items-center bg-white  w-full z-50">
        <div>
          <img src={Logo} alt="" className='w-50 h-50' width={150} />
        </div>
        <div className='md:hidden'>
          <FaBars className='text-2xl text-[#33B3A6]' />
        </div>
        {/* Mobile Navbar */}
        <MobileNav/>
        {/* Big screen Navbar */}
        <div className='hidden md:flex'>
          <a href="#" className='hover:bg-[#33B3A6] hover:text-white p-5 text-[#33B3A6] uppercase font-semibold text-lg'>Home</a>
          {/* <div className='text-[#33B3A6] uppercase font-semibold text-lg flex items-center p-5 gap-3'><a href="#">Ortho</a><FaCaretDown/></div> */}
          <div className='group text-[#33B3A6]  uppercase font-semibold text-lg flex items-center p-5 gap-3 hover:bg-[#33B3A6] hover:text-white'><a href="#" className='flex items-center gap-2'>Ortho <FaCaretDown/></a>
            <DropDownMenu type="physio-menu top-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" title="Title" img={Upgrade} alt="physio image" />
          </div>
          <div className='group text-[#33B3A6] uppercase font-semibold text-lg flex items-center p-5 gap-3 hover:bg-[#33B3A6] hover:text-white'><a href="#" className='flex items-center gap-2 '>Physio <FaCaretDown/></a>
            <DropDownMenu type="physio-menu top-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" title="Title" img={Focus} alt="physio image" />
          </div>
          <a href="#" className='hover:bg-[#33B3A6] hover:text-white p-5 text-[#33B3A6] uppercase font-semibold text-lg'>Company</a>
          <a href="#" className='hover:bg-[#33B3A6] hover:text-white p-5 text-[#33B3A6] uppercase font-semibold text-lg'>Contact</a>
          <a href="#" className='hover:bg-[#33B3A6] hover:text-white p-5 text-[#33B3A6] uppercase font-semibold text-lg'>Login</a>
        </div>
      </div>
    </>
  )
}

export default Navbar