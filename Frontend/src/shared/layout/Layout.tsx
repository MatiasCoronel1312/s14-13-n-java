import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (


    <div className='flex flex-col justify-center items-center bg-background h-full max-w-[1440px] mx-auto'>

>>>>>>> 1a4bcde1068d542507627c21c413cc6b7ade52c4
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
