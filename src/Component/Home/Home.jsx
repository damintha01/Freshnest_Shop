import React from 'react'
import NavBar from '../Navbar/NavBar'
import bgcover from './HomeImage/bgcover.jpg'
import Women from './HomeImage/women.png'
import BottomNav from '../BottomNav/BottomNav'
import Benifits from '../Benifits'
import Products from '../Products/Products'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div className='min-h-screen'>
        {/* Navigation */}
        <div>
            <NavBar />
        </div>
        
        {/* Hero Section */}
        <div className='relative w-full h-screen overflow-hidden'>
            <img src={bgcover} className='w-full h-full object-cover' alt="Background Cover" />
            
            {/* Hero Content */}
            <div className='absolute inset-0 flex flex-col justify-center'>
                <div className='px-4 sm:px-6 lg:px-8'>
                    <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-500 font-medium mb-2 sm:mb-4'>
                        DSHOP
                    </p>
                    <p className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-950 mb-4 sm:mb-6'>
                        Fresher than Ever
                    </p>
                    
                    <p className='text-sm sm:text-base md:text-lg lg:text-xl font-medium text-zinc-500 mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-lg'>
                        A supermarket is a self-service shop offering a wide variety of 
                        <br className='hidden sm:block' /> 
                        food, beverages and household products, organized into sections.
                    </p>
                    
                    <button className='bg-emerald-500 hover:bg-emerald-600 text-white ring-2 ring-amber-300 font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg'>
                        Shop Now
                    </button>
                </div>
                
                {/* Woman Image */}
                <div className='absolute right-4 sm:right-8 md:right-16 lg:right-24 bottom-8 sm:bottom-16'>
                    <img src={Women} className='w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain' alt="Woman" />
                </div>
            </div>
        </div>

        {/* Benefits Section */}
        <div className='py-8 sm:py-12 md:py-16 lg:py-20'>
            <Benifits />
        </div>

        {/* Products Section */}
        <Products />

        {/* Additional Content Section */}
        <div className='bg-amber-300 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-4xl mx-auto text-center'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
                    Fresh Products Delivered Daily
                </h2>
                <p className='text-base sm:text-lg text-gray-700 mb-8'>
                    Experience the convenience of fresh grocery shopping from the comfort of your home.
                </p>
                <button className='bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg'>
                    Explore Products
                </button>
            </div>
        </div>

        {/* Footer */}
        <Footer />

        {/* Bottom Navigation */}
        <BottomNav />
    </div>
  )
}

export default Home