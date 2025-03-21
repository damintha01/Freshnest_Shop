import { useNavigate } from 'react-router'
import Navbar from './Navbar'
import Footer from '../components/Footer'
import ASHPLANTAIN from '../Img/vegitable/ASH PLANTAIN.avif'
import BEANS from '../Img/vegitable/BEANS.avif'
import Bigonion from '../Img/vegitable/BIG ONION.avif'
import Potato from '../Img/vegitable/POTATO.avif'
import LONGBEANS from '../Img/vegitable/LONG BEANS.avif'




const Home = () => {
   const navigate = useNavigate()

   const handleClick = () => {
    navigate('/payment')
  }

  return (
    <div >
        <Navbar />
        <div className='min-h-screen text-center p5'>
          <div className='text-4xl font-bold text-green-500 mt-10'>Welcome to our online market</div>
          <div className='text-xl font-bold text-green-500'>We sell fresh vegetables</div>
          <div className="flex flex-col items-center m-2 w-full">
      <div className="flex justify-center space-x-9">
        <img onClick={handleClick} src={ASHPLANTAIN} alt="Ash Plantain" />
        <img src={BEANS} alt="Beans" />
        <img src={Bigonion} alt="Big Onion" />
        <img src={Potato} alt="Potato" />
      </div>

      <div className="flex justify-center space-x-9 mt-5">
        <img src={LONGBEANS} alt="Long Beans" />
        <img src={BEANS} alt="Beans" />
        <img src={Bigonion} alt="Big Onion" />
        <img src={Potato} alt="Potato" />
      </div>
    </div>

        </div>
        <div className=''>
            <Footer />
        </div>
    </div>
  )
}

export default Home