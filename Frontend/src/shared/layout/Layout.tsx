import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='flex flex-col items-center w-screen'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
