import React from 'react'
import Navbar from './Navbar'
import bg from '../Img/bg.webp'
import Footer from './Footer'

const Singup = () => {
  return (
    <div className='bg-cover bg-center opacity-100' style={{backgroundImage: `url(${bg})`}}>
        <Navbar />
        <div className='min-h-screen p-5'>
            <h1>Signu</h1>
        </div>
        <Footer />
    </div>
  )
}

export default Singup