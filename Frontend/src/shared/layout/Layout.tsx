import { Outlet } from 'react-router-dom'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
