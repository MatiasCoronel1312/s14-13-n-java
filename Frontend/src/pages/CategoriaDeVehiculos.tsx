import SelectForCategory from "../components/SelectForCategory/SelectForCategory";
import TimeLine from "../components/timeline/TimeLine";
import NuevaReservaPrueba from "../components/NuevaReserva/NuevaReservaPrueba";
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
    <div className='w-full h-full bg-background flex justify-center px-3'>
      <div className="lg:w-[85%] md:w-[90%] w-full h-full flex flex-col items-center">
        {isFromReserva ? (
          <TimeLine posicion={2} />
        ) : (
          <NuevaReservaPrueba />
        )}
        <SelectForCategory />
      </div>
    </div>
  );
};

export default CategoriaDeVehiculos;
