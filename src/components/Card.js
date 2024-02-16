import React from "react";

function Card({ title, position, img, button }) {
  return (
    <>
      {/* <div className='relative h-screen'>
                <div>
                    <img src={img} alt="" className='h-screen object-cover w-full lg:object-fill' />
                </div>
                <div className={`absolute z-10 ${postion} bottom-0 lg:top-0 bg-white  flex justify-center lg:items-center w-full lg:w-1/3  z-50 h-[17rem] lg:min-h-screen overlay`}>
                    <div className='p-8'>
                        <h1 className='uppercase text-[#33B3A6] text-3xl font-semibold font-urbanist'>{title}</h1>
                        <p className='text-[#33B3A6] leading-[2.3rem] text-xl py-5 font-urbanist'>
                            Orthopaedics (also called orthopaedic surgery) is the medical specialty that focuses on injuries and diseases of your body's musculoskeletal system. This complex system, which includes your bones, joints, ligaments, tendons, muscles, and nerves, allows you to move, work, and be active.
                        </p>
                        {button && <div className='py-3 font-urbanist'>
                            <button className='bg-[#33B3A6] text-white text-lg font-medium uppercase px-5 py-2 shadow-xl rounded-sm'>Buy Now</button>
                        </div>}
                        
                    </div>
                </div>
            </div> */}
      {/* aspect ratio */}
      <div className="relative">
        <div className="overflow-y-hidden w-[100%] h-[100vh]">
          <img
            src={img}
            alt=""
            className="w-[100vw] lp:h-[100vh] sp:h-[100vh] sl:min-w-[150%] ll:min-w-[150%] ll:-ml-[50%] sl:-ml-[50%] object-cover"
          />
        </div>
        <div className={`absolute  bg-white  lp:w-full sp:w-full w-[36%] ${position} `}>
          <div className="h-screen lp:h-full sp:h-full flex flex-col items-center justify-center p-[6%] text-justify text-lsgreen">
            <h1 className="text-fluid-4xl font-urbanist">{title}</h1>
            <div className="">
              <p className="text-fluid font-urbanist">
                Orthopaedics (also called orthopaedic surgery) is the medical
                specialty that focuses on injuries and diseases of your body's
                musculoskeletal system. This complex system, which includes your
                bones, joints, ligaments, tendons, muscles, and nerves, allows
                you to move, work, and be active.
              </p>
            </div>
            {button && (
              <div className="">
                <button className="">Buy Now</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
