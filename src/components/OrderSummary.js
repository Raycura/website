import React from 'react'
import Input from './Input'

function OrderSummary() {
  return (
    <>
        <div className='flex justify-center gap-10 flex-col'>
            <div className='flex items-center'>
                <h1 className='text-2xl font-semibold text-white'>Quantity</h1>
                <div className='flex w-full justify-end'>
                    <button className='p-2 bg-[#2F4858] text-white text-xl'>-</button>
                    <input type="number" className='py-2 text-center' min="1" />
                    <button className='p-2 bg-[#2F4858] text-white text-xl'>+</button>
                </div>               
            </div>
            {/* Refernce Code */}
            <div className='flex'>
                <input type="text" className='p-2 w-full text-balck bg-white text-xl' placeholder='Reference Code' />
                <button className='p-2 bg-[#2F4858] text-white text-xl'>Verify</button>
            </div>
            {/* Order Summary Starts */}
            <div>
                <div className='text-white'>
                    <h1 className='text-2xl font-semibold'>Order Summary</h1>
                    <p className='leading-10 text-lg font-medium'>Price Details (1 item)</p>
                </div>
                <div className="flex justify-between items-center text-white">
                    <div>
                        <label>Toatal MRP</label>
                    </div>
                    <div>
                        <p>Rs.12,500</p>
                    </div>
                </div>
                <div className="flex justify-between items-center text-white">
                    <div>
                        <label>Discount on MRP</label>
                    </div>
                    <div>
                        <p>Rs.12,500</p>
                    </div>
                </div>
                <div className="flex justify-between items-center text-white">
                    <div>
                        <label>Coupon Discount</label>
                    </div>
                    <div>
                        <p>Rs.12,500</p>
                    </div>
                </div>
                <div className="flex justify-between items-center text-white">
                    <div>
                        <label>GST</label>
                    </div>
                    <div>
                        <p>Rs.12,500</p>
                    </div>
                </div>
                <div className="flex justify-between items-center text-white">
                    <div>
                        <label>Shopping Fee</label>
                    </div>
                    <div>
                        <p>Rs.12,500</p>
                    </div>
                </div>
                <hr className='my-4' />
                <div className="flex justify-between items-center text-white">
                    <div>
                        <label>Toatal Amount</label>
                    </div>
                    <div>
                        <p>Rs.12,500</p>
                    </div>
                </div>
            </div>
            <div className="">
                <div>
                    <button className='bg-[#2F4858] text-white w-full p-2'>Place Order</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default OrderSummary