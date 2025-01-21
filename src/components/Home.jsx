import React from 'react'
import Navbar from './Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div className='min-h-screen bg-gray-200 text-center p-5'>
            <h1>Home</h1>
        </div>
        <div className='bg-green-800 text-white text-center p-9'>
            <Footer />
        </div>
    </div>
  )
}

export default Home