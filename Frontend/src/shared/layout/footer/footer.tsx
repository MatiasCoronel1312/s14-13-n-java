
import { Link } from "react-router-dom";
import GoCar from "../../../assets/icons/GoCar.png";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import  mailIcon  from '../../../assets/icons/mailIcon.svg'
const Footer = () => {
  return (
    <footer className="h-[750px] md:h-[450px] w-full bg-[#707070] flex justify-center items-center">
      <div className="lg:w-[85%] w-[90%]  h-[90%] flex flex-col text-[14px] md:py-10 ">
        <div className="flex flex-col md:flex-row items-start md:justify-between w-full h-[90%] md:gap-5">
          <div className="md:w-[25%] h-[10%] md:h-[40px]">
            <Link to="/">
              <img src={GoCar} alt="logo GoCar" className="w-[120px] md:w-[180px] h-[30px] md:h-[40px]" />
            </Link>
          </div>
          <div className="w-full md:w-[25%] h-[195px] flex flex-col justify-between">
            <h2 className="text-white font-semibold ms:h-1/2">SITEMAP</h2>
            <ul className="text-background flex flex-col justify-around w-full h-[148px] md:pl-0 pl-3 ">
              <Link className="" to="/categoriasDeVehiculos/all">
                CATEGORIAS DE VEHICULOS
              </Link>
              <Link className="" to="/redDeAgencias">
                RED DE AGENCIAS
              </Link>
              <Link className="" to="/tipsTuristicos">
                TIPS DE VIAJES
              </Link>
              <Link className="" to="/dudas">
                DUDAS
              </Link>
            </ul>
          </div>
          <div className="w-full md:w-[25%] h-[100px] md:h-[40%] py-5 md:py-0 flex flex-col md:justify-between ">
            <h2 className="text-white font-semibold h-[50%]">SOCIALS</h2>
            <ul className="text-white w-full h-[50%] flex md:flex-col gap-5 text-[24px] md:pl-0 pl-3">
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaXTwitter />
              </li>
              <li>
                <FaLinkedin />
              </li>
            </ul>
          </div>
          <div className="w-[70%] md:w-[25%] md:h-[85%] h-[200px] flex flex-col justify-between ">
            <div className="w-full h-[90px] flex flex-col justify-around ">
              <h3 className="text-white font-semibold md:pb-6 pb-3">HEAD OFFICE</h3>
              <p className="text-background w-full md:pl-0 pl-3">
                Xilliams Corner Wine © 2017. 1112 A Market St # Ste B22,
                Charlottesville, CA 45565
              </p>
            </div>
            <div className="w-[100%] h-[60px] md:h-[110px] flex flex-col justify-center ">
              <h3 className="text-white font-semibold">NEWS LETTER</h3>
              <div className="w-full h-[30px] flex justify-between relative md:pl-0 pl-3">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex justify-start w-full h-[40px] bg-[#707070] border-b-[0.75px] border-[#333333] px-2"
                />
                <img
                  src={mailIcon}
                  alt="icono mail"
                  className="absolute right-1 bottom-1"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:justify-around bottom-0 h-[10%] md:h-[20px] w-full text-background text-[14px]">

          <div>
            <p>contact@gocar.com</p>
          </div>
          <div>
            <p>(123)455-7800</p>
          </div>
          <div>
            <p>© 2024 GoCar All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;

