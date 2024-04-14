
import { Link } from "react-router-dom";

import TimeLine from "../components/timeline/TimeLine";
import SummaryBooking from "../components/SummaryBooking/SummaryBooking";




const DatosDePagos = () => {
  // const params = useLocation();
  //const carroSeleccionado = params?.state?.carro;

  // if (carroSeleccionado == undefined) {
  //   return <Home />;
  // }
  return (
    <div className="w-full bg-background flex justify-center">
      <div className="h-auto lg:w-[85%] md:w-[90%]  ">
        <TimeLine posicion={4} />
        <IsNoLogin />

         <SummaryBooking/>
      </div>
    </div>
  );
};

export default DatosDePagos;

function IsNoLogin() {
  return (
    <div className="flex flex-col justify-center items-center w-[600px] h-[300px] mx-auto gap-20">
      <Link to = '/Login'className=" text-[#FF8C00] font-sl border border-[#FF8C00] rounded-lg w-[136px] h-[44px] flex  justify-center items-center">Login
      </Link>
      <p>para completar tu reseva debes loguearte</p>
    </div>
  );
}
