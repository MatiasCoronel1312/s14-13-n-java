import { Link } from 'react-router-dom'
import GoCar from '../../../assets/icons/GoCar.png'
const navbar = () => {
  return (
    <div className="h-[80px] max-w-[1440px] bg-[#707070] flex items-center justify-around">
      <img src={GoCar} alt="GoCar logo" className='w-[134px] h-[30px]' />
      <ul className='flex justify-between w-[60%]'>
        <Link to='' className='text-background'>CATEGORIAS DE VEHICULOS</Link>
        <Link to='' className='text-background'>RED DE AGENCIAS</Link>
        <Link to='' className='text-background'>OFERTAS</Link>
        <Link to='' className='text-background'>DUDAS</Link>
      </ul>
      <button className='text-primary border-2 border-primary w-[136px] h-[44px] rounded-ss-[5px] rounded-ee-[5px]'>Log in</button>
    </div>
  )
}

export default navbar
