import React from 'react';

function OrthoProducts({ title, properties, btn, img }) {
  return (
    <div className={`max-h-screen grid grid-cols-2 items-center w-full ${properties}`}>
      <div className='px-2 md:px-16 text-justify py-12'>
        <h1 className='text-6xl tracking-wide rubik-heading font-extrabold'>{title}</h1>
        <div className='text-2xl pt-6'>
          {/* <h3 className='text-3xl rubik-sub-heading font-medium'>What is an Orthopedic Surgeon?</h3> */}
          <p className='text-xl pt-3 leading-8 rubik-sub-heading'>Orthopaedics (also called orthopaedic surgery) is the medical specialty that focuses on injuries and diseases of your body's musculoskeletal system. This complex system, which includes your bones, joints, ligaments, tendons, muscles, and nerves, allows you to move, work, and be active.</p>
          <div className='flex gap-8 mt-10'>
            <button className={`${btn} text-lg font-medium uppercase px-5 py-3 shadow-xl rounded-sm`}>Know More</button>
            <button className={`${btn} text-lg font-medium uppercase px-5 py-3 shadow-xl rounded-sm`}>Buy Now</button>
          </div>
        </div>
      </div>
      <div className='text-end flex justify-end items-end pt-12'>
        <img src={img} alt="" className='w-[30rem]' />
      </div>
    </div>
  )
}

export default OrthoProducts