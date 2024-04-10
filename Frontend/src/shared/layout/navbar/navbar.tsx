import { Link } from "react-router-dom";
import GoCar from "../../../assets/icons/GoCar.png";
const navbar = () => {
  return (

    <header className="w-full bg-[#707070] flex justify-center">
      <div className="h-[80px] lg:w-[85%] md:w-[90%] flex items-center justify-between ">
        <Link to="/">
          <img src={GoCar} alt="GoCar logo" className="w-[134px] h-[30px]" />
        </Link>
        <ul className="flex justify-between w-[60%]">
          <Link
            to="/categoriasDeVehiculos/all"
            className="text-background text-center"
          >
            CATEGORIAS DE VEHICULOS
          </Link>
          <Link to="/redDeAgencias" className="text-background text-center">
            RED DE AGENCIAS
          </Link>
          <Link to="/tipsTuristicos" className="text-background text-center">
            TIPS TURISTICOS
          </Link>
          <Link to="/dudas" className="text-background text-center">
            DUDAS
          </Link>
        </ul>
        <button className="flex  Gradient-H w-[136px] h-[44px] rounded-[5px] cursor-pointer hover:bg-primary ">
          <div className="text-primary text-[20px] py-[5px] z-10 bg-[#707070] m-auto w-[134px] Gradient-H_hover transition-all duration-300 ease-in-out h-[42px] rounded-[5px] cursor-pointer hover:text-text">
            Log in
          </div>
        </button>
      </div>
    </header>
  );
};


export default navbar;
