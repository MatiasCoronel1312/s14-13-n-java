import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-background h-full max-w-[1440px] mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
