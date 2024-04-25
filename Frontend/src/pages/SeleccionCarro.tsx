import CoberturasSection from "../components/CoberturasSection/CoberturasSection";
import SummaryBooking from "../components/SummaryBooking/SummaryBooking";
import TarifasSection from "../components/TarifasSection/TarifasSection";
import TimeLine from "../components/timeline/TimeLine";

//import Home from "./Home";
import ButtonMain from "../components/ButtonMain/ButtonMain";
import { useEffect, useState } from "react";
import { useAppSeletor } from "../redux/store";

import { useNavigate } from "react-router-dom";
import Home from "./Home";

const SeleccionDeCarro = () => {
  const navigate = useNavigate();
  const [selectACard, SetSelectACard] = useState(" <");
  const dataReduces = useAppSeletor((state) => state);
  const carroSeleccionado = dataReduces.carro.cars;
  const dataReserve = dataReduces.dataReserve.dataReserve?.fechaEntrega;
  const dataMetodo = dataReduces.coberturas.cargos.metodoPago.name;

  const hasInsurance = dataReduces.coberturas.cargos.seguridad.name.length > 3;

  if (dataReserve === undefined) {
    return <Home />;
  }
  useEffect(() => {
    if (dataMetodo !== "") {
      SetSelectACard(dataMetodo);
    }
  }, []);

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
        <div className="h-[210px]   flex justify-center items-center">
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
            if (selectACard.length > 5 && hasInsurance) {
              goToPagoPage();
            }
          }}
          className="flex w-full justify-center items-center  my-10"
        >
          {selectACard.length > 5 && hasInsurance ? (
            <ButtonMain title="Continuar a Pago" />
          ) : (
            <div
              onClick={() => handleScrollToBack(0)}
              className="w-[330px] h-[64px] flex justify-center items-center bg-gray-300 cursor-pointer hover:shadow-xl hover:bg-slate-600 hover:text-white transition-all"
            >
              <p>Selecciona antes metodo de Pago y sefuro.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SeleccionDeCarro;
