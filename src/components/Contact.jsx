import React from 'react'
import Navbar from './Navbar'
import bg from '../Img/bg.webp'
import Footer from './Footer'

const Contact = () => {
  return (
    <div className='bg-cover bg-center opacity-100 w-full' style={{backgroundImage: `url(${bg})`}}>
        <Navbar />
        <div className='min-h-screen p-5'>
            <h1>Contact</h1>
            <h1>About</h1>
            <h1>gggggggggg</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, esse optio mollitia sit quae adipisci voluptas, eius at fuga assumenda dolores. Optio, officiis ex quibusdam ipsa maiores perferendis laboriosam? Temporibus!</p>
        
        </div>
        <Footer />
    </div>
  )
}

export default Contact