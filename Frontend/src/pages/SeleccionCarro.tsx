import { useLocation, useNavigate } from "react-router-dom";
import CoberturasSection from "../components/CoberturasSection/CoberturasSection";
import SummaryBooking from "../components/SummaryBooking/SummaryBooking";
import TarifasSection from "../components/TarifasSection/TarifasSection";
import TimeLine from "../components/timeline/TimeLine";

//import Home from "./Home";
import ButtonMain from "../components/ButtonMain/ButtonMain";
import { useState } from "react";

const SeleccionDeCarro = () => {
  const params = useLocation();
  const navigate = useNavigate();
  const [selectACard, SetSelectACard] = useState("");

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
            selectACard={selectACard}
            SetSelectACard={SetSelectACard}
            handleScrollToBack={handleScrollToBack}
            showCarSelected={carroSeleccionado}
          />
        )}

        <CoberturasSection />
        <SummaryBooking />

        <div
          onClick={() => {
            if (selectACard.length > 5) {
              goToPagoPage();
            }
          }}
          className="flex w-full justify-center items-center  mb-10"
        >
          {selectACard.length > 5 ? (
            <ButtonMain title="Continuar a Pago" />
          ) : (
            <p>Selecciona Metodo de Pago.</p>
          )}
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
