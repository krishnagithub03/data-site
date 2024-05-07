import React from 'react'
import { dataanalytics, da_img, laptop } from '../assets'
const Analytics = () => {
  return (
    <div className='w-full py-16 px-4 bg-white'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 shadow-2xl'>
    <div className='sm:col-span-1'>

    <img src={laptop} alt="" className='w-[500px] mx-auto  rounded-3xl'  />
    </div>

    <div className='sm:col-span-1 px-6 py-10'>
    <p className='text-[#4fffb3] font-bold'>DATA ANALYTICS DASHBOARD</p>
    <h1 className='md:text-4xl sm:text-3xl text-2xl mx-auto font-bold py-2'>DATA ANALYTICS</h1>
    <p className='py-3 font-normal'>Experience the transformative power of data analytics as we unveil strategies to supercharge your revenue growth. With our advanced analytics solutions, unlock hidden opportunities, optimize performance, and drive profits to new heights. Harness the full potential of your data and propel your business towards unparalleled success. Discover a new era of revenue excellence today.</p>
    <button className='text-black font-medium bg-[#4fffb3] w-[200px] rounded-lg md:mx-0 mx-auto my-3 py-3'>Get Started</button>
    </div>
    </div>
    </div>
  )
}

export default Analytics
