import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-background h-full w-full mx-auto'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
