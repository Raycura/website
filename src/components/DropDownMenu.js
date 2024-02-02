import React from 'react';

function DropDownMenu({ type, title, img, alt }) {
    return (
        <div className={`py-5 px-10 w-1/3 mx-auto rounded-b-sm bg-white shadow-lg fixed -translate-x-1/2 ${type}`}>
            <a href='#'>
                <div className='py-3'>
                    <h2 className='text-2xl font-bold text-[#33B3A6]'>{title}</h2>
                </div>
                <div className='py-3'>
                    <img src={img} alt={alt} />
                </div>
            </a>
        </div>
    )
}

export default DropDownMenu