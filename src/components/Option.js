import React from 'react';


function Option({text,icon}) {
  return (
    <>
        <div className='bg-white shadow-xl my-10 w-full h-full'>
            <div className='flex justify-center h-full items-center gap-5 p-10 text-[#33B3A6]'>
                {icon}
                <h1 className='text-2xl font-medium'>{text}</h1>
            </div>
        </div>
    </>
  )
}

export default Option