import React from 'react'
import Navbar from './Navbar'
import OrthoProducts from './OrthoMain'
import Product1 from '../assets/trans-remote.png'

function Ortho() {
  return (
    <>
        <Navbar/>
        <OrthoProducts img={Product1} title="Geo Neo" content="" properties="text-white bg-[#33B3A6]" btn="bg-white text-[#33B3A6]" />
        <OrthoProducts img={Product1} title="Extend Nail" content="" properties="bg-white text-[#33B3A6]"  btn="text-white bg-[#33B3A6]" />
        <OrthoProducts img={Product1} title="Extend Nail" content="" properties="text-white bg-[#33B3A6]" btn="bg-white text-[#33B3A6]"  />
    </>
  )
}

export default Ortho