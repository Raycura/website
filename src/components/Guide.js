import React from 'react'
import Option from './Option'
import { MdOndemandVideo } from "react-icons/md";
import { RiDownloadLine } from "react-icons/ri";

function Guide() {
  return (
    <div className='mt-2'>
        <div className='bg-[#33B3A6] p-5'>
            <h1 className='text-center text-white text-3xl my-5 uppercase font-semibold'>Guides</h1>
            <div className='grid  grid-col-1 lg:grid-cols-2 justify-center gap-10 lg:gap-20 items-center lg:p-10'>
                <Option text="Video Library" icon={<MdOndemandVideo size={30}/>} />
                <Option text="Download PDF" icon={<RiDownloadLine size={30} />} />
            </div>        
        </div>
    </div>
  )
}

export default Guide