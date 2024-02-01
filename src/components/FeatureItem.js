import React from 'react'

function FeatureItem({icon,text,position}) {
  return (
    <div className={`flex items-center py-5 ${position}`}>
        <div>
            <div className="w-14 h-14 bg-white rounded-full flex justify-center items-center mx-auto">         
                {icon}
            </div>
                <p className='text-white p-2 text-xl w-auto sm:w-[20rem] mx-auto text-center'>{text}</p>
            </div>
    </div>
  )
}

export default FeatureItem