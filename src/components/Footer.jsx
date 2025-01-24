import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=''>
      {/* Green Section */}
      <div className='bg-green-800 text-white h-56'>
        <div className='grid grid-cols-4 gap-4'>
          {/* Useful Links */}
          <div className='bg-green-800 p-4 rounded-lg grid grid-rows-3 gap-3 text-left'>
            <h2>
              <p className='text-lg text-black'>Useful Links</p>
            </h2>
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
          {/* Customer Service */}
          <div className='bg-green-800 p-4 rounded-lg'>
            <h2 className='text-left'>
              <p className='text-lg text-black'>Customer Service</p>
              <p>Contact us</p>
              <p>About us</p>
            </h2>
          </div>
          {/* Social Media Icons */}
          <div className='bg-green-800 p-4 rounded-lg'>
            <div className='grid grid-cols-4 text-3xl '>
              <div>
                <FaFacebook />
              </div>
              <div>
                <FaTwitter />
              </div>
              <div>
                <FaInstagram />
              </div>
              <div>
                <FaLinkedin />
              </div>
            </div>
          </div>
          {/* Content Part 4 */}
          <div className='bg-green-800 p-4 rounded-lg'>
            <h2 className='text-lg'>
              <p>content part 4</p>
            </h2>
          </div>
        </div>
      </div>

      {/* Black Footer Section */}
      <div className='bg-black text-white h-12 flex items-center justify-center'>
        <p className='text-center'>© 2021 All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
