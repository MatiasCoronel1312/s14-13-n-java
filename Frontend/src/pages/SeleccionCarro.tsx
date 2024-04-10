import { useLocation, useNavigate } from "react-router-dom";
import CoberturasSection from "../components/CoberturasSection/CoberturasSection";
import SummaryBooking from "../components/SummaryBooking/SummaryBooking";
import TarifasSection from "../components/TarifasSection/TarifasSection";
import TimeLine from "../components/timeline/TimeLine";

//import Home from "./Home";
import ButtonMain from "../components/ButtonMain/ButtonMain";

const SeleccionDeCarro = () => {
  const params = useLocation();
  const navigate = useNavigate();

  const carroSeleccionado = params?.state?.carro;

  const goToPagoPage = () => {
    navigate("/finalizar-pago");
    handleScrollToBack(0);
  };

  const handleScrollToBack = (scroll: number) => {
    window.scrollTo({
      top: scroll,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full bg-background flex justify-center">
      <div className="h-auto lg:w-[85%] md:w-[90%]  ">
        <TimeLine posicion={3} />

        {carroSeleccionado == undefined ? (
          <AlertNoCard />
        ) : (
          <TarifasSection
            handleScrollToBack={handleScrollToBack}
            showCarSelected={carroSeleccionado}
          />
        )}

        <CoberturasSection />
        <SummaryBooking />
        <div
          onClick={goToPagoPage}
          className="flex w-full justify-center items-center  mb-10"
        >
          <ButtonMain title="Continuar a Pago" />
        </div>
      </div>
    </div>
  );
};

export default SeleccionDeCarro;

function AlertNoCard() {
  return (
    <div className="w-full h-[400px] flex justify-center items-center">
      <p> se llamaria ala api con el id del carro</p>
    </div>
  );
}
