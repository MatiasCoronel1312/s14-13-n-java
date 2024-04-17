import SelectForCategory from "../components/SelectForCategory/SelectForCategory";
import TimeLine from "../components/timeline/TimeLine";
import NuevaReserva from "../components/NuevaReserva/NuevaReserva";

import { useLocation } from "react-router-dom";
import { useAppSeletor } from "../redux/store";

//https://gocarapp.onrender.com/api/vehicles/all

const CategoriaDeVehiculos = () => {
  const location = useLocation();
  const dataReserve = useAppSeletor((state) => state.dataReserve.dataReserve);

  // add check if is from reserva or not in the redux state
  const isFromReserva =
    location?.state?.isReserva || dataReserve.fechaRetiro !== undefined;

  return (
    <div className="w-full bg-background flex justify-center">
      <div className="h-auto lg:w-[85%] md:w-[90%]  ">
        <div className=" ">
          {isFromReserva ? (
            <div className="h-[210px] mt-6  flex justify-center items-center">
              <TimeLine posicion={2} />
            </div>
          ) : (
            <div className=" h-[210px]">
              <NuevaReserva />
            </div>
          )}
        </div>

        <SelectForCategory />
      </div>
    </div>
  );
};

export default CategoriaDeVehiculos;
