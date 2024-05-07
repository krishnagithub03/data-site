import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGitSquare,
} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-400'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#4fffb3]'>secureX.</h1>
        <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim harum impedit ipsam ipsa? Perspiciatis, itaque a? Eligendi autem mollitia nostrum.</p>
      <div className='flex md:w-[75%] my-6 justify-between'>
  <FaFacebook size={30}/>
  <FaInstagram size={30}/>
  <FaTwitter size={30}/>
  <FaLinkedin size={30}/>
  <FaGitSquare size={30}/>
      </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
      <div>
      <h6 className='font-medium text-gray-600'>Solutions</h6>
        <ul>
          <li className='py-2 text-sm'>Analytics</li>
          <li className='py-2 text-sm'>Analytics</li>
          <li className='py-2 text-sm'>Analytics</li>
          <li className='py-2 text-sm'>Analytics</li>
        </ul>
      </div>
      <div>
      <h6 className='font-medium text-gray-600'>Support</h6>
        <ul>
          <li className='py-2 text-sm'>Pricing</li>
          <li className='py-2 text-sm'>Documentation</li>
          <li className='py-2 text-sm'>Guides</li>
          <li className='py-2 text-sm'>API Status</li>
        </ul>
      </div>
      <div>
      <h6 className='font-medium text-gray-600'>Solutions</h6>
        <ul>
          <li className='py-2 text-sm'>Analytics</li>
          <li className='py-2 text-sm'>Analytics</li>
          <li className='py-2 text-sm'>Analytics</li>
          <li className='py-2 text-sm'>Analytics</li>
        </ul>
      </div>
      <div>
      <h6 className='font-medium text-gray-600'>Solutions</h6>
        <ul>
          <li className='py-2 text-sm'>Analytics</li>
          <li className='py-2 text-sm'>Analytics</li>
          <li className='py-2 text-sm'>Analytics</li>
          <li className='py-2 text-sm'>Analytics</li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Footer
