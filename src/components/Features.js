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
            <div className='bg-[#33B3A6] w-full h-screen'>
                <div>
                    <h1 className='text-white text-center text-4xl uppercase py-10 font-semibold'>Features</h1>
                </div>
                <div className='grid grid-cols-3 items-center'>
                    <div>
                        <FeatureItem icon={<RiSave3Line size={30} />} text="Save Upto 6 readings during measurements" position="justify-end" />
                        <FeatureItem icon={<BsAlarm size={30} />} text="Measure within few seconds with single hand or hands free" position="justify-center" />
                        <FeatureItem icon={<AiOutlineAim size={30} />} text="Measure within accuracy of +-1 degree that too without searching pivot" position="justify-end" />
                    </div>
                    <div>
                        <img src={GoNeo} alt="" className='mx-auto' width={200} />
                    </div>
                    <div>
                        <FeatureItem icon={<RiSave3Line size={30} />} text="Save Upto 6 readings during measurements"  position="justify-start" />
                        <FeatureItem icon={<BsAlarm size={30} />} text="Measure within few seconds with single hand or hands free"  position="justify-center" />
                        <FeatureItem icon={<AiOutlineAim size={30} />} text="Measure within accuracy of +-1 degree that too without searching pivot"  position="justify-start" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features