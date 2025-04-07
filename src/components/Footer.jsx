import React from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img onClick={() => {
              navigate('/');
              scrollToTop();
            }} src={assets.logo} className='mb-5 w-32 cursor-pointer' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Urban Threads is a curated collection of contemporary apparel, blending modern design with urban inspiration. We believe in crafting pieces that express individuality and elevate everyday style.            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
            <li onClick={() => { navigate('/'); scrollToTop()}} className='hover:text-black cursor-default'>Home</li>
                <li onClick={() => { navigate('/about'); scrollToTop()}} className='hover:text-black cursor-default'>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 XXXXXXXX826</li>
                <li>contact@urbanthreads.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ urbanthreads.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
