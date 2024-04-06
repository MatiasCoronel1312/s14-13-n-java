import { Link } from 'react-router-dom'
import GoCar from '../../../assets/icons/GoCar.png'
import { FaFacebook } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
import { FaXTwitter } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa6'
// import { FaEnvelope } from 'react-icons/fa6'
const Footer = () => {
  return (
    <footer className="h-[550px] max-w-[1440px] bg-[#707070] flex justify-center items-center">
      <div className='w-[1176px] h-[348px] flex flex-col text-[14px]'>
        <div className='flex justify-between w-full h-[328px]'>
          <div className='w-[180px] h-[40px]'>
            <img src={GoCar } alt="" />
          </div>
          <div className='w-[117px] h-[195px] flex flex-col justify-between'>
            <h2 className='text-white font-semibold'>SITEMAP</h2>
            <ul className='text-background flex flex-col justify-around w-full h-[148px] '>
              <Link to="">CATEGORIAS DE VEHICULOS</Link>
              <Link to="">RED DE AGENCIAS</Link>
              <Link to="">OFERTAS</Link>
              <Link to="">DUDAS</Link>

            </ul> 

          </div>
          <div className='w-[60px] h-[190px] flex flex-col justify-around '>
            <h2 className='text-white font-semibold'>SOCIALS</h2>
            <ul className='text-white w-[24px] h-[144px] flex flex-col justify-around text-[24px]'>
              <li><FaFacebook/></li>
              <li><FaInstagram/></li>
              <li><FaXTwitter/></li>
              <li><FaLinkedin/></li>
            </ul>
          </div>
          <div className='w-[325px] h-[200px] flex flex-col justify-between '>
            <div className='w-[300px] h-[90px] flex flex-col justify-around '>
              <h3 className='text-white font-semibold '>HEAD OFFICE</h3>
              <p className='text-background w-[300px]'>Xilliams Corner Wine © 2017. 1112 A Market St # Ste B22, Charlottesville, CA 45565</p>
            </div>
            <div className='w-[325px] h-[90px] flex flex-col justify-between '>
              <h3 className='text-white font-semibold'>NEWS LETTER</h3>
              <div className='w-[325px] h-[30px] flex justify-between relative'>
              <input type="email" placeholder='Enter Your Email Address' className='flex justify-start w-full h-[40px] bg-[#707070] border-b-[0.75px] border-[#333333] px-2'/>
              <img src="Mail icon.svg" alt="" className='absolute right-1 bottom-1'/>
              {/* <FaEnvelope className='text-primary text-[28px]'/> */}
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-around bottom-0 h-[20px] w-full text-background text-[14px]'>
          <div>
            <p>contact@gocar.com</p>
          </div>
          <div>
            <p>(123)455-7800</p>
          </div>
          <div>
            <p>© 2024 GoCar All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
