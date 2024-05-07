import React from 'react'
import {user, user2, user3} from '../assets' 
const Cards = () => {
  return (
    <div className='w-full py-[10rem]
    px-4 text-black bg-white'>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-3 gap-8'>
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <img src={user} alt="" className='w-20 mx-auto bg-transparent'/>
        <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
        <p className='text-2xl font-semibold text-center'>$149</p>

        <div className='text-xl font-light text-center'>
        <p className=" py-2 border">500 GB Storage</p>
        <p className=" py-2 border">2 Granted User</p>
        <p className=" py-2 border">Send upto 2GB</p>
      </div>

        <button className='text-black font-medium bg-[#4fffb3] w-[200px] rounded-lg mx-auto my-6 py-3'>Start Trail</button>
      </div>

      <div className='w-full bg-gray-100 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
      <img src={user2} alt="" className='w-20 mx-auto'/>
      <h2 className='text-2xl font-bold text-center py-8'>Small Organization</h2>
      <p className='text-2xl font-semibold text-center'>$249</p>
      <div className='text-xl font-light text-center'>
        <p className=" py-2 border">500 GB Storage</p>
        <p className=" py-2 border">2 Granted User</p>
        <p className=" py-2 border">Send upto 2GB</p>
      </div>

      <button className='bg-black font-medium text-[#4fffb3] w-[200px] rounded-lg mx-auto my-6 py-3'>Start Trail</button>

      </div>
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
      <img src={user3} alt="" className='w-20 mx-auto'/>
      <h2 className='text-2xl font-bold text-center py-8'>Big Organization</h2>
      <p className='text-2xl font-semibold text-center'>$149</p>
      <div className='text-xl font-light text-center'>
        <p className=" py-2 border">500 GB Storage</p>
        <p className=" py-2 border">2 Granted User</p>
        <p className=" py-2 border">Send upto 2GB</p>
      </div>

      <button className='text-black font-medium bg-[#4fffb3] w-[200px] rounded-lg mx-auto my-6 py-3'>Start Trail</button>
      </div>
      </div>
    </div>
  )
}

export default Cards
