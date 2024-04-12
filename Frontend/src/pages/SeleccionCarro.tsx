import CoberturasSection from "../components/CoberturasSection/CoberturasSection";
import SummaryBooking from "../components/SummaryBooking/SummaryBooking";
import TarifasSection from "../components/TarifasSection/TarifasSection";
import TimeLine from "../components/timeline/TimeLine";

//import Home from "./Home";
import ButtonMain from "../components/ButtonMain/ButtonMain";
import { useState } from "react";
import { useAppSeletor } from "../redux/store";

import { useNavigate } from "react-router-dom";

const SeleccionDeCarro = () => {
  const navigate = useNavigate();
  const [selectACard, SetSelectACard] = useState("");
  const dataReserve = useAppSeletor((state) => state.carro.cars);

  const carroSeleccionado = dataReserve;

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
        <div className="h-[210px] mt-6  flex justify-center items-center">
          <TimeLine posicion={3} />
        </div>

        <TarifasSection
          selectACard={selectACard}
          SetSelectACard={SetSelectACard}
          handleScrollToBack={handleScrollToBack}
          showCarSelected={carroSeleccionado}
        />

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
