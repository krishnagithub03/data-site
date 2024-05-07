import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 px-4 text-white'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
      <div className='lg:col-span-2 py-2'>
      <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>Want tips & tricks to optimize your flow?</h1>
      <p>Sign Up to our newsletter and stay updated.</p>
      </div>
      <div className='my-4'>
      <div className='flex flex-col sm:flex-row items-center justify-between'>
      <input type="email" name='input' placeholder='Enter your email' className='p-3 flex w-full rounded-md text-black'/>
      <button className='text-black font-medium bg-[#4fffb3] w-[200px] rounded-lg ml-4 my-6 px-6 py-3'>Notify Me</button>

     
      </div> 
      <p>We care about the protection of your data. Read our <a href="#" className='underline text-[#4fffb3]'>Privacy Policy</a></p>
      </div>
      </div>
    </div>
  )
}

export default Newsletter
