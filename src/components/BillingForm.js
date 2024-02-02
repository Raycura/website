import React from 'react'
import Input from './Input'

function BillingForm() {
  return (
    <div>
        <form action="">
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
                <Input placeholder="GST No. (if any)" /> 
            </div>
        </form>
    </div>
  )
}

export default BillingForm