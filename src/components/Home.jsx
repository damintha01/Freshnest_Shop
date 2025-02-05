import React from 'react'
import Navbar from './Navbar'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div >
        <Navbar />
        <div className='min-h-screen text-center p5'>
            <h1>Home.............</h1>
        </div>
        <div className=''>
            <Footer />
        </div>
    </div>
  )
}

export default Home