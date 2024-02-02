import React from 'react'
import BillingDetails from './BillingDetails'
import ShippingDetails from './ShippingDetails'
import OrderSummary from './OrderSummary';
import Logo from '../assets/white-logo.png';

function Billing() {
  return (
    <div className='bg-[#33B3A6] min-h-screen'>
        <div className='flex justify-end py-5 px-3'>
            <img src={Logo} alt="Raycura Logo" width={100} />
        </div>
        <div className='xl:w-[80vw] mx-auto grid xl:grid-cols-2 gap-28 p-5'>
            <div>
                <BillingDetails/>
                <ShippingDetails/>
            </div>
            <div>
                <OrderSummary/>
            </div>
        </div>        
    </div>
  )
}

export default Billing