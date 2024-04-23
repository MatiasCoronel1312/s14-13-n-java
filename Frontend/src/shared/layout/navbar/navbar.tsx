import { Link } from "react-router-dom";
import GoCar from "../../../assets/icons/GoCar.png";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";

const navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("load", handleClick);
  }, [])
  

  const handleClick = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      setIsOpen(!isOpen);
    }else {
      setIsOpen(false);
    }
  };

  const menu = (
      <ul className="flex absolute md:relative flex-col bg-[#707070] md:justify-between md:w-full w-[100%] text-[12px] md:flex-row lg:text-[16px] gap-3 top-[80px] md:top-0 right-[0px]">
          <Link onClick={handleClick}
            to="/categoriasDeVehiculos/all"
            className="text-background text-center py-5 hover:bg-text md:py-0 hover:md:bg-[#707070]"
          >
            CATEGORIAS DE VEHICULOS
          </Link>
          <Link onClick={handleClick} to="/redDeAgencias" className="text-background text-center py-5 hover:bg-text md:py-0 hover:md:bg-[#707070]">
            RED DE AGENCIAS
          </Link>
          <Link onClick={handleClick} to="/tipsTuristicos" className="text-background text-center py-5 hover:bg-text md:py-0 hover:md:bg-[#707070]">
            TIPS DE VIAJES
          </Link>
          <Link onClick={handleClick} to="/dudas" className="text-background text-center py-5 hover:bg-text md:py-0 my-auto hover:md:bg-[#707070]">
            DUDAS
          </Link>
      </ul>
)


  return (
    <header className="w-full bg-[#707070] flex justify-center sticky top-0 z-[45]">
      <div className=" w-full flex justify-center  shadow-lg">
        <div className="h-[80px] lg:w-[85%] md:w-[90%] sm:w-[95%] w-[97%] flex items-center justify-between ">
          <Link to="/">
            <img src={GoCar} alt="GoCar logo" className="w-[129px] h-[25px] lg:w-[134px] lg:h-[30px]" />
          </Link>
          <div className="md:w-[60%] md:block hidden">
              {menu}
          </div>
          <Link
            to="/Login"
            className="flex ml-[30%] sm:ml-[50%] md:ml-0  Gradient-H w-[96px] lg:w-[136px] h-[44px]  rounded-[5px] text-center cursor-pointer hover:bg-primary "
          >
            <div className="text-primary text-[20px] py-[5px] z-[46] bg-[#707070] m-auto w-[94px] lg:w-[134px] Gradient-H_hover transition-all duration-300 ease-in-out h-[42px] rounded-[5px] cursor-pointer hover:text-text">
              Log in
            </div>
          </Link>
          <div className="w-[10%] relative cursor-pointer md:hidden flex justify-end text-accent hover:text-primary">
            <FaBars className=" w-[35px] h-[30px]" onClick={handleClick}/>
             
          </div>
        </div>
         
      </div>
      {isOpen&&menu}
    </header>
  );
};

export default navbar;
