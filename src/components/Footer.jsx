import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { SiGooglepay } from "react-icons/si";

const Footer = () => {
  return (
    <div className=''>
    
    <div className='bg-green-800 text-white h-56 p-1'>
        <div className='grid grid-cols-4 gap-4 h-20'>
            <div className='bg-green-800 p-4 rounded-lg grid grid-rows-3 gap-3 text-left pl-24'>
                <h2><p className='text-lg text-black'>Useful Links</p></h2>
                <div>
                    <p>Privacy Policy</p>
                </div>
                <div>
                    <p>FAQ</p>    
                </div>    
                <div>
                    <p>Terms and Conditions</p>    
                </div>
                <div>
                    <p>Stores</p>    
                </div>
                
            </div>
            <div className='bg-green-800 p-4 rounded-lg pl-10'>
                <h2 className='text-left'>
                    <p className='text-lg text-black'>Customer Service</p>
                    <p>Contact us</p>
                    <p>About us</p>
                </h2>
            </div>
            <div className='bg-green-800 p-4 rounded-lg pr-12'>
                <div className='grid grid-cols-4 text-3xl '>
                    <div >
                        <FaFacebook/>
                    </div>
                    <div>
                        <FaTwitter/>
                    </div>
                    <div>
                        <FaInstagram/>
                    </div>
                    <div>
                        <FaLinkedin/>
                    </div>
                </div>
            </div>
            <div className='bg-green-800 p-4 rounded-lg'>
                <h2 className='text-lg'>
                    <p>content part 4</p>
                </h2>
            </div>


        </div>

    </div>

    <div>
        <div className='bg-black text-white h-20 m-0 content-center grid grid-cols-2 gap-6'>    
            <div>
            <p className='text-center' >© 2021 Al rights reserved</p>
            </div>
            <div className='flex flex-row gap-3 text-4xl items-center justify-center'>
                <FaCcVisa/>
                <FaCcMastercard/>
                <SiAmericanexpress/>
                <SiGooglepay/>

            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer