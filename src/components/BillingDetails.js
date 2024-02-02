import React from 'react'
import BillingForm from './BillingForm'

function BillingDetails() {
  return (
    <>
        <div>
            <h1 className='text-white font-semibold text-2xl'>Billing Details</h1>
            <div className='py-3'>
                <BillingForm/>
            </div>
        </div>
    </>
  )
}

export default BillingDetails