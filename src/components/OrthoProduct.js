import React from 'react'
import NailLengthening from '../assets/nail-lengthening.png';

function OrthoProduct() {
  return (
    <>
        <div className='pt-10'>
            <div className='flex justify-center'>
                <img src={NailLengthening} className='' alt="" />
            </div>
            <div className='w-[60%] mx-auto'>
                <h1 className='text-4xl text-[#33B3A6] text-center font-semibold'>Extend - IM Bone Lengthening Nail</h1>
                <p className='text-center py-8 text-[#33B3A6] text-xl leading-8'>As the innovation driven the company, our goal is provide you robust and relaible technology to transform limb lengthening surgery, and change the lives of your  patients with less pain.</p>
            </div>
        </div>
    </>
  )
}

export default OrthoProduct