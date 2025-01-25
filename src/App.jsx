import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import bg from './Img/bg.webp'

const App = () => {
  return (
    <div style={{backgroundImage: `url(${bg})`}}>
        <Home/>
    </div>
  )
}

export default App