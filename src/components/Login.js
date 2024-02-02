import React from 'react';
import lhsImage from '../assets/character-plant.png';
import { MdOutlineEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa6";
// import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import Input from './Input'
import Button from './Button';

function Login() {
  return (
    <div className='flex justify-center lg:items-center h-screen lg:w-[90vw] mx-auto'>
        <div className='grid lg:grid-cols-2 lg:mt-10 shadow-md'>
            <div className='hidden lg:block'>
                <img src={lhsImage} alt="raycura-login-lhs" />
            </div>
            {/* RHS side started */}
            <div className='bg-[#33B3A6] px-5 py-10'>
                <div className='lg:w-[75%] mx-auto'>
                    <h1 className='text-white text-3xl font-semibold rubik'>Login</h1>
                    {/* Form started */}
                    <div>
                        <form action="">
                            <div>
                                <div className='mt-5 flex bg-white items-center px-5 rounded-sm'>
                                    <MdOutlineEmail className='text-[#33B3A6]' size={25} />
                                    <Input properties="outline-0 bg-transparent border-none py-0 lg:text-xl" placeholder="Email" />
                                </div>
                                <div className='mt-5 flex bg-white items-center px-5 rounded-sm'>
                                    <MdLock className='text-[#33B3A6]' size={25} />
                                    <Input properties="outline-0 bg-transparent border-none py-0 lg:text-xl" placeholder="Password/OTP" />
                                    <FaEyeSlash className='text-[#33B3A6]' size={20} />
                                </div>
                                <div className='text-white flex gap-5 mt-5 items-center justify-between'>
                                    <div className='flex items-center gap-5'>
                                        <p className='text-xl'>Or Login with OTP</p>
                                        <IoIosArrowRoundForward className='text-white' size={40} />
                                    </div>
                                    <Button properties="bg-[#2F4858] text-xl" title="Send OTP" />
                                </div>
                                <div className='mt-10'>
                                    <Button properties="bg-[#2F4858] text-xl w-full text-white font-medium" title="Login" />
                                </div>
                                <div className="mt-5 text-center">
                                    <p className='text-white text-xl font-medium'>OR</p>
                                </div>
                                <div className="mt-5">
                                    <Button properties="flex items-center justify-center gap-5 bg-[#2F4858] text-xl w-full text-white" icon={<FcGoogle className='bg-white p-1 rounded-full' size={35} />} title="Sign in with Google" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login