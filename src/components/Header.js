import React from 'react';
// import Banner from '../assets/banner2.png';

function Header() {
  return (
    <div className='h-screen flex items-center w-full bg-bottom bg-cover bg-no-repeat' style={{backgroundImage:"url(/banner.svg)"}}>
        <div className='basis-1/2 px-2 md:px-16 text-justify'>
            <h1 className='text-white text-6xl tracking-wide rubik-heading font-extrabold'>Accurate.Quick.Simple</h1>
            <div className='text-white text-2xl pt-6'>
              <h3 className='text-3xl rubik-sub-heading font-medium'>What is an Orthopedic Surgeon?</h3>
              <p className='text-xl pt-3 leading-8 rubik-sub-heading'>Orthopaedics (also called orthopaedic surgery) is the medical specialty that focuses on injuries and diseases of your body's musculoskeletal system. This complex system, which includes your bones, joints, ligaments, tendons, muscles, and nerves, allows you to move, work, and be active.</p>
              <div className='mt-5'>
                <button className='bg-white text-[#33B3A6] text-lg font-medium uppercase px-5 py-2 shadow-xl rounded-sm'>Buy Now</button>
              </div>
            </div>
        </div>
        {/* <div className='absolute right-0'>
          <img src={Banner} alt="" className='w-[30rem]' />
        </div> */}
    </div>
  )
}

export default Header