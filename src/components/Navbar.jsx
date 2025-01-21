import React from 'react'
import Menulink from './Menulink'
import { Link } from 'react-router-dom'
import img1 from '../Img/logo.png'


const Navbar = () => {
  return (
    <div className='bg-green-800 p-2'>
      <div className='flex justify-self-center items-center p-1 space-x-6'>
        <div className='p-2'>
          <img className='w-20 h-26 ' src={img1} alt="" />
        </div>
      <div className='flex items-center p-2 space-x-4 gap-4'>
        <ul className='flex space-x-8 gap-8 p-2'>
          <li><Menulink linkname='Home' url='/' /></li>
          <li><Menulink linkname='News' url='/News'/></li>
          <li><Menulink linkname='About' url='/About'/></li>
          <li><Menulink linkname='Contact' url='/Contact'/></li>
        
        </ul>
        <div className='flex space-x-4 gap-4 p-2'>
            <button className='bg-green-500  py-2 px-4 rounded-full hover:bg-green-700'>< Menulink linkname='Login' url='/Login'/></button>
            <button className='bg-green-500  py-2 px-4 rounded-full hover:bg-green-700'>< Menulink linkname='Signup' url='/Signup'/></button>
        
        </div>
        <div>
        <input 
           type="text" 
           className="p-3 text-sm text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 shadow-sm placeholder-gray-400" 
           placeholder="Search..." 
        />


        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar
