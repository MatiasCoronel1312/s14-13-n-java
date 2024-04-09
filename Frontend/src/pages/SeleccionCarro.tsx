import { useLocation } from "react-router-dom";
import CoberturasSection from "../components/CoberturasSection/CoberturasSection";
import SummaryBooking from "../components/SummaryBooking/SummaryBooking";
import TarifasSection from "../components/TarifasSection/TarifasSection";
import TimeLine from "../components/timeline/TimeLine";

import Home from "./Home";

const SeleccionDeCarro = () => {
  const params = useLocation();
  const carroSeleccionado = params?.state?.carro;

  if (carroSeleccionado == undefined) {
    return <Home />;
  }
  return (
    <div className="w-full bg-background flex justify-center">
      <div className="h-auto lg:w-[85%] md:w-[90%]  ">
        <TimeLine posicion={3} />
        <TarifasSection showCarSelected={carroSeleccionado} />
        <CoberturasSection />
        <SummaryBooking />
      </div>
    </div>
  );
};

export default SeleccionDeCarro;
