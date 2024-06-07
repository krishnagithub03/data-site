import React from 'react'
import { Link } from 'react-router-dom'
import {ReactTyped}  from 'react-typed'
const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col'>
      <p className='text-[#4fffb3] font-bold p-2 text-lg'>GROWING WITH DATA ANALYTICS</p>
      <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow With Data.</h1>
      <div className='flex justify-center items-center'>
        <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4'>Fast, Flexible, Financing for </p>
        <ReactTyped 
        className='md:text-3xl sm:text-2xl text-xl font-bold md:pl-4 pl-2'
        strings={['B2B','B2C','D2C']} 
        typeSpeed={120} 
        backSpeed={140} 
        loop 
        />

      </div>
      <p className='md:text-2xl text-xl font-bold text-gray-600'>Monitoring your data to increase revenue and market research for B2B,B2C and D2C Platforms.</p>
      <Link to='/securex/signup' className='text-black font-medium bg-[#4fffb3] w-[200px] rounded-lg mx-auto my-6 py-3 hover:scale-105 duration-300'>Get Started</Link>
      </div>
    </div>
  )
}

export default Hero
