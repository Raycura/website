import React from 'react'
import WhiteLogo from '../assets/white-logo.png';
import { IoMdMail } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";

function Footer() {
  return (
    <>
        <hr/>
        <div className='bg-[#33B3A6] px-14 py-5 flex justify-between items-center'>
            <div>
                <img src={WhiteLogo} alt="" width={200} />
                <div className='flex items-center text-white'>
                    <IoMdMail />
                    <a href='mailto:mail@raycura.com' className='px-2'> mail@raycura.com</a>
                </div>
                <div className='flex items-center text-white'>
                    <BiSolidPhoneCall />
                    <a href='mailto:mail@raycura.com' className='px-2'> +919857452456</a>
                </div>
            </div>
            <div>
                <div>
                    <a href="#" className='text-white underline-offset-2 px-5 hover:underline font-medium'>Products</a>
                    <a href="#" className='text-white underline-offset-2 px-5 hover:underline font-medium'>About Us</a>
                    <a href="#" className='text-white underline-offset-2 px-5 hover:underline font-medium'>Contact Us</a>
                    <a href="#" className='text-white underline-offset-2 px-5 hover:underline font-medium'>Privacy Policy</a>
                </div>
            </div>
            <p>lorem100000
            </p>
        </div>
    </>
  )
}

export default Footer