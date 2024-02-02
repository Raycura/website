import React from 'react'
import Input from './Input'

function ShippingForm() {
  return (
    <>
        <form action="">
            <div className='pt-3'>
                <input type='checkbox' />
                <label htmlFor="" className='text-white text-lg'> Use as my Billing Address</label>
            </div>
            <div className='pt-3'>
                <Input placeholder="Name" />
                <Input placeholder="Address Line 1" />
                <Input placeholder="Address Line 2" />
                <div className="flex justify-between items-center gap-5">
                    <Input placeholder="City" />
                    <Input placeholder="State" /> 
                </div>
                <Input placeholder="Email Address" />
                <div className="flex justify-between items-center gap-5">
                    <Input placeholder="Contact No." />
                </div>

            </div>
        </form>
    </>
  )
}

export default ShippingForm