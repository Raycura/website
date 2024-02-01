import React from 'react';
import { RiSave3Line } from "react-icons/ri";
import { BsAlarm } from "react-icons/bs";
import { AiOutlineAim } from "react-icons/ai";
import { BsUsbC } from "react-icons/bs";
import FeatureItem from './FeatureItem';
import GoNeo from '../assets/goneo.png';

function Features() {
    return (
        <>
            <div className='bg-[#33B3A6] w-full lg:h-screen h-[100%]'>
                <div>
                    <h1 className='text-white text-center text-4xl uppercase py-10 font-semibold'>Features</h1>
                </div>
                <div className=' flex flex-col lg:grid lg:grid-cols-3  items-center text-[10px]'>
                    <div>
                        <FeatureItem icon={<RiSave3Line size={30} />}  text="Save Upto 6 readings during measurements" position="justify-center sm:justify-end"/>
                        <FeatureItem icon={<BsAlarm size={30} />} text="Measure within few seconds with single hand or hands free" position="justify-center" />
                        <FeatureItem icon={<AiOutlineAim size={30} />} text="Measure within accuracy of +-1 degree that too without searching pivot" position="justify-center sm:justify-end" />
                    </div>
                    <div>
                        <img src={GoNeo} alt="" className='mx-auto' width={200}/>
                        {/* <img src={GoNeo} alt="" className='mx-auto' width={200} /> */}
                    </div>
                    <div>
                        <FeatureItem icon={<RiSave3Line size={30} />} text="Save Upto 6 readings during measurements"  position="justify-center sm:justify-start" />
                        <FeatureItem icon={<BsAlarm size={30} />} text="Measure within few seconds with single hand or hands free"  position="justify-center" />
                        <FeatureItem icon={<AiOutlineAim size={30} />} text="Measure within accuracy of +-1 degree that too without searching pivot"  position=" justify-center sm:justify-start" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features