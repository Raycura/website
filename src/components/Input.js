import React from 'react'

function Input({placeholder,properties}) {
  return (
    <>
        <input type="text" className={`text-black p-2 w-full my-2 rounded-sm border-[3px] border-transparent focus:outline-0 focus:border-[#2F4858] focus:border-[3px] ${properties}`} placeholder={placeholder} />
    </>
  )
}

export default Input