import React from 'react'
import Navbar from './Navbar'

const News = () => {
  return (
    <div className='bg-cover bg-center opacity-100' style={{backgroundImage: `url(${bg})`}} >
        <Navbar />
        <div>
            <h1>News</h1>
        </div>
    </div>
  )
}

export default News