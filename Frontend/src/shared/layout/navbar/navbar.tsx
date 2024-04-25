import { Link } from "react-router-dom";
import GoCar from "../../../assets/icons/GoCar.png";
import { useEffect, useState } from "react";
import bars from "../../../assets/bars.png";
import LogInArea from "../../../components/LogInArea/LogInArea";

const navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    window.addEventListener("load", handleClick);
  }, []);

  const handleClick = () => {
    console.log('aqui');
    
    if (window.matchMedia("(max-width: 768px)").matches) {
      console.log('aqui 700');
      setIsOpen(!isOpen);
    } else {
      console.log('aqui 0');
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
        <div className="h-[80px] lg:w-[85%] w-[90%] flex items-center justify-between ">
          <Link to="/">
            <img
              src={GoCar}
              alt="GoCar logo"
              className="w-[129px] h-[25px] lg:w-[134px] lg:h-[30px]"
            />
          </Link>
          <div className="md:w-[60%] md:block hidden">{menu}</div>
          <LogInArea />
          <div
            onClick={()=>{handleClick()}}
            className="w-[54px] h-[42px] rounded-lg Gradient-H_hover relative cursor-pointer md:hidden flex justify-center items-center  "
          >
            <div className="w-[52px] h-[40px] bg-[#707070] flex justify-center items-center rounded-lg">
              <img src={bars} alt="" className="w-[35px] h-[30px] " />
            </div>
          </div>
        </div>
      </div>
      {isOpen&&menu}
    </header>
  );
};

export default navbar;
