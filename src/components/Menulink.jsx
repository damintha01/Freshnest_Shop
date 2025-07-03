import React from 'react'

const Menulink = (props) => {
  return (
    <div>
        <a href={props.url} className='text-black hover:text-green-700 text-lg'>{props.linkname}</a>
    </div>
  )
}

export default Menulink