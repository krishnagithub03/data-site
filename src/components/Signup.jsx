import React from 'react'
import {signup, user} from '../assets'
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Signup = () => {
  return (
    <div className='w-full h-screen bg-white text-black'>
    <div className='mx-auto grid grid-cols-1 md:grid-cols-2'>
    <div className='mx-auto bg-white col-span-1'>
    <h1 className='w-full text-3xl font-bold text-[#4fffb3] py-6'>secureX.</h1>
    <div className='mx-auto my-auto py-10 px-4 flex flex-col'>

    {/* <img src={user} alt="img" className='size-20 rounded-full mx-auto mt-8'/> */}
    <h1 className='font-bold text-4xl justify-between text-center'>Create Account</h1>
    <p className='text-center'>Start your 30-day free trail. Cancel anytime.</p>
    <div className='border rounded-md py-2 my-2 hover:scale-105 duration-300'>
        <button className='flex gap-2 mx-auto my-auto font-semibold '><FaGoogle size={30}/>Sign up with Google</button>
    </div>
    <div className='border rounded-md py-2 my-2 hover:scale-105 duration-300'>
        <button className='flex gap-2 mx-auto my-auto font-semibold '><FaSquareXTwitter size={30}/>Sign up with X/Twitter</button>
    </div>
    <div className='border rounded-md py-2 my-2 hover:scale-105 duration-300'>
        <button className='flex gap-2 mx-auto my-auto font-semibold '><FaApple size={30}/>Sign up with Apple ID</button>
    </div>
    <div className='flex flex-col'>
        <div className='border'></div>
        <div className='text-center italic'>or</div>
        <div className='border'></div>
    </div>
    <p className='font-bold'>Email*</p>
    <input type="text" placeholder='Enter your email' className='bg-transparent  my-2 py-4 px-2 rounded-md border'/>
    <p className='font-bold'>Password*</p>
    <input type="text" placeholder='Create a Password' className='bg-transparent  my-2 py-4 px-2 rounded-md border'/>
    <button className='text-black font-bold bg-[#4fffb3] w-[100%] rounded-lg mx-auto my-3 py-3 hover:scale-105 duration-300'>Signup</button>
    <p className='text-gray-400'>Already have an account? <a href="" className='underline text-black'>Login</a></p>
    </div>
    </div>
    <div className='col-span-1 md:col-span-1 hidden md:block'>
        <img src={signup} alt="" className='h-screen '/>
    </div>
    </div>
    </div>
  )
}

export default Signup
