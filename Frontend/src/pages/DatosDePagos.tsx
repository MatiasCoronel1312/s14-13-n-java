import TimeLine from "../components/timeline/TimeLine";

import SummaryBooking from "../components/SummaryBooking/SummaryBooking";
import { useAppSeletor } from "../redux/store";
import Home from "./Home";

import CompletarPago from "../components/CompleteRerve/CompletarPago";

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
        <CompletarPago />

        <SummaryBooking />
      </div>
    </div>
  );
};

export default DatosDePagos;
