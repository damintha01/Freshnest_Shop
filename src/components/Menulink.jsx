import React from 'react'

const Menulink = (props) => {
  return (
    <div>
        <a href={props.url} className='text-white hover:text-gray-900 text-lg'>{props.linkname}</a>
    </div>
  )
}

export default Menulink