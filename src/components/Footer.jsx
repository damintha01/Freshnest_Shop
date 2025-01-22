import React from 'react'

const Footer = () => {
  return (
    <div className='bg-green-800 p-9 text-white h-56 pt-5 pb-5 pl-5 pr-5'>
        <div className='grid grid-cols-3 gap-4 h-56'>
            <div className='bg-green-800 p-4 rounded-lg grid grid-rows-3 gap-3'>
                <div>
                    <p>1</p>
                </div>
                <div>
                    <p>2</p>    
                </div>    
                <div>
                    <p>3</p>    
                </div>
                
            </div>
            <div className='bg-green-800 p-4 rounded-lg'>
                <h2 className='text-lg'>
                    <p>content part 2</p>
                </h2>
            </div>
            <div className='bg-green-800 p-4 rounded-lg'>
                <h2 className='text-lg'>
                    <p>content part 3</p>
                </h2>
            </div>


        </div>

    </div>
  )
}

export default Footer