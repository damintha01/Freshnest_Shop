import React from 'react'
import Navbar from './Navbar'
import Footer from '../components/Footer'
import ASHPLANTAIN from '../Img/vegitable/ASH PLANTAIN.avif'
import BEANS from '../Img/vegitable/BEANS.avif'
import Bigonion from '../Img/vegitable/BIG ONION.avif'
import Potato from '../Img/vegitable/POTATO.avif'
import LONGBEANS from '../Img/vegitable/LONG BEANS.avif'
import REDONION from 



const Home = () => {
  return (
    <div >
        <Navbar />
        <div className='min-h-screen text-center p5'>
          <div className='text-4xl font-bold text-green-500 mt-10'>Welcome to our online market</div>
          <div className='text-xl font-bold text-green-500'>We sell fresh vegetables</div>
          <div className="flex flex-col items-center m-2 w-full">
      {/* First Row - 4 Images */}
      <div className="flex justify-center space-x-9">
        <img src={ASHPLANTAIN} alt="Ash Plantain" />
        <img src={BEANS} alt="Beans" />
        <img src={Bigonion} alt="Big Onion" />
        <img src={Potato} alt="Potato" />
      </div>

      {/* Second Row - Last Image */}
      <div className="mt-4">
        <img src={LONGBEANS} alt="Long Beans" />
      </div>
    </div>

        </div>
        <div className=''>
            <Footer />
        </div>
    </div>
  )
}

export default Home