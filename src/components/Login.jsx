import Navbar from './Navbar'
import bg from '../Img/bg.webp'
import Footer from './Footer'

const Login = () => {
  return (
    <div className='bg-cover bg-center opacity-100' style={{backgroundImage: `url(${bg})`}}>
        <Navbar />
        <div className='min-h-screen p-5'>
            <h1>Login....</h1>
        </div>
        <Footer />
    </div>
  )
}

export default Login