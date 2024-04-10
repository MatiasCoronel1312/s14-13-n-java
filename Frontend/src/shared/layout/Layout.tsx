import { Outlet } from 'react-router-dom'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'

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
