import SelectForCategory from "../components/SelectForCategory/SelectForCategory";
import TimeLine from "../components/timeline/TimeLine";
<<<<<<< HEAD
import NuevaReservaPrueba from "../components/NuevaReserva/NuevaReservaPrueba";
=======

import NuevaReservaPrueba from "../components/NuevaReserva/NuevaReservaPrueba";

>>>>>>> a69aed6d3b8c1cc86ecf12d5de19465c549ed3be

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
<<<<<<< HEAD
              <NuevaReservaPrueba />
=======

              <NuevaReservaPrueba />

>>>>>>> a69aed6d3b8c1cc86ecf12d5de19465c549ed3be
            </div>
          )}
        </div>

        <SelectForCategory />
      </div>
    </div>
  );
};

export default CategoriaDeVehiculos;
