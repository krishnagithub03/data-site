import React,{useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

import { Link } from 'react-router-dom';
const Navbar = () => {
  const [nav,setNav] = useState(false);

  const handleNav = ()=>{
    setNav(!nav);
  }

  return (
    <div className='flex  justify-between items-center h-24 max-w-[1240px] m-auto px-4 text-white'>
      
        <h1 className='w-full text-3xl font-bold text-[#4fffb3]'>secureX.</h1>
        <ul className='hidden md:flex'>
          <Link className='p-4' to='/securex'>Home</Link>
          <Link className='p-4' to='/securex/company'>Company</Link>
          <Link className='p-4' to='/securex/dataanalytics'>Resources</Link>
          <Link className='p-4' to='/securex/about'>About</Link>
          <Link className='p-4' to='/securex/contact'>Contact</Link>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#4fffb3] m-4'>secureX.</h1>
          <ul className='uppercase p-4'>
          <li className='p-4'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
