import TimeLine from "../components/timeline/TimeLine";

import SummaryBooking from "../components/SummaryBooking/SummaryBooking";
import { useAppSeletor } from "../redux/store";
import Home from "./Home";
import { Link } from "react-router-dom";

const DatosDePagos = () => {
  const dataReserve = useAppSeletor(
    (state) => state.dataReserve.dataReserve
  ).fechaEntrega;

  if (dataReserve === undefined) {
    return <Home />;
  }
  return (
    <div className="w-full bg-background flex justify-center">
      <div className="h-auto lg:w-[85%] md:w-[90%]  pb-36">
        <div className="h-[210px] mt-6  flex justify-center items-center">
          <TimeLine posicion={4} />
        </div>
        <IsNoLogin />

        <SummaryBooking />
      </div>
    </div>
  );
};

export default DatosDePagos;

function IsNoLogin() {
  return (
    <div className="flex flex-col justify-center items-center w-[600px] h-[300px] mx-auto gap-20">
      <Link
        to="/Login"
        className=" text-[#FF8C00] font-sl border border-[#FF8C00] rounded-lg w-[136px] h-[44px] flex  justify-center items-center"
      >
        Login
      </Link>
      <p>para completar tu reseva debes loguearte</p>
    </div>
  );
}
