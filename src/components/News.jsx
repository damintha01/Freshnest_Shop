import React from 'react'
import Navbar from './Navbar'
import Footer from '../components/Footer'
import bg from '../Img/bg.webp'

const News = () => {
  return (
    <div className='bg-cover bg-center opacity-100' style={{backgroundImage: `url(${bg})`}}>
        <Navbar />
        <div className='min-h-screen p-5'>
            <h1>News..</h1>
        </div>
        <Footer />
    </div>
  )
}

export default News