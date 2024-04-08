import { Link } from 'react-router-dom'
import GoCar from '../../../assets/icons/GoCar.png'
const navbar = () => {
  
  return (
    <header className='w-full bg-[#707070] flex justify-center'>
      <div className="h-[80px] lg:w-[85%] md:w-[90%] flex items-center justify-between ">
        <img src={GoCar} alt="GoCar logo" className='w-[134px] h-[30px]' />
        <ul className='flex justify-between w-[60%]'>
          <Link to='' className='text-background'>CATEGORIAS DE VEHICULOS</Link>
          <Link to='' className='text-background'>RED DE AGENCIAS</Link>
          <Link to='' className='text-background'>OFERTAS</Link>
          <Link to='' className='text-background'>DUDAS</Link>
        </ul>
        <button className='flex  Gradient-H w-[136px] h-[44px] rounded-[5px] cursor-pointer hover:bg-primary '> 
          <div className='text-primary py-1.5 z-10 bg-[#707070] m-auto w-[133px] Gradient-H_hover transition-all duration-300 ease-in-out h-[40px] rounded-[5px] cursor-pointer hover:text-text'>
          Log in</div>
        </button>
      </div>  
    </header>    
  )
}

export default navbar;
