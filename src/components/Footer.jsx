import React from 'react'

const Footer = () => {
  return (
    <div className='bg-green-800 p-9 text-white'>
        <div className='grid grid-cols-3 gap-4'>
            <div className='bg-green-700 p-4 rounded-lg'>
                <h2 className='text-lg font-bold'>
                    <p>content part 1</p>
                </h2>
            </div>
            <div className='bg-green-700 p-4 rounded-lg'>
                <h2 className='text-lg font-bold'>
                    <p>content part 2</p>
                </h2>
            </div>
            <div className='bg-green-700 p-4 rounded-lg'>
                <h2 className='text-lg font-bold'>
                    <p>content part 3</p>
                </h2>
            </div>


        </div>

    </div>
  )
}

export default Footer