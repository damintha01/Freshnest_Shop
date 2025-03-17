import React from 'react'
import Navbar from './Navbar'
import Footer from '../components/Footer'
import ASHPLANTAIN from '../Img/vegitable/ASH PLANTAIN.avif'
import BEANS from '../Img/vegitable/BEANS.avif'
import Bigonion from '../Img/vegitable/BIG ONION.avif'
import Potato from '../Img/vegitable/POTATO.avif'


const Home = () => {
  return (
    <div >
        <Navbar />
        <div className='min-h-screen text-center p5'>
          <div className='text-4xl font-bold text-green-500 mt-10'>Welcome to our online market</div>
          <div className='text-xl font-bold text-green-500'>We sell fresh vegetables</div>
          <div className='m-2 w-60 flex float-left space-x-9'>
            <img className='' src={ASHPLANTAIN} alt="" />
            <img className=' ' src={BEANS} alt="" />
            <img className=' ' src={Bigonion} alt="" />
            <img className=' ' src={Potato} alt="" />
          </div>

        </div>
        <div className=''>
            <Footer />
        </div>
    </div>
  )
}

export default Home