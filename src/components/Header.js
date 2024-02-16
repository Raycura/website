import React from "react";
// import Banner from '../assets/banner2.png';

function Header() {
  return (
    <div
      className="min-h-screen flex items-center w-full bg-bottom bg-cover bg-no-repeat "
      style={{ backgroundImage: "url(/banner.svg)" }}
    >
      <div className="w-full lg:w-[50%] sm:w-[70%] px-1 lg:px-16 sm:px-10 text-justify ">
        <h1 className="text-white font-urbanist  text-2xl sm:text-4xl lg:text-6xl tracking-wide rubik-heading font-extrabold">
          Accurate.Quick.Simple
        </h1>
        <div className="text-white text-sm md:text-lg lg:text-2xl pt-6">
          <h3 className="text-xl sm:text-3xl rubik-sub-heading font-medium">
            What is an Orthopedic Surgeon?
          </h3>
          <p className="text-lg sm:text-xl pt-3 leading-8 rubik-sub-heading font-urbanist">
            Orthopaedics (also called orthopaedic surgery) is the medical
            specialty that focuses on injuries and diseases of your body's
            musculoskeletal system. This complex system, which includes your
            bones, joints, ligaments, tendons, muscles, and nerves, allows you
            to move, work, and be active.
          </p>
          <div className="mt-5">
            <button className="bg-white text-[#33B3A6] text-lg font-medium uppercase px-5 py-2 shadow-xl rounded-sm">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      {/* <div className='absolute right-0'>
          <img src={Banner} alt="" className='w-[30rem]' />
        </div> */}
    </div>
  );
}

export default Header;
