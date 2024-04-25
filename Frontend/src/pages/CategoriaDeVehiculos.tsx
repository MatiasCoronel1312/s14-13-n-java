import SelectForCategory from "../components/SelectForCategory/SelectForCategory";
import TimeLine from "../components/timeline/TimeLine";
import NuevaReservaPrueba from "../components/NuevaReserva/NuevaReservaPrueba";

import { useAppSeletor } from "../redux/store";

const CategoriaDeVehiculos = () => {
  const dataReduces = useAppSeletor((state) => state);
  const dataReserve = dataReduces.dataReserve.dataReserve;
  const isFromReserva = dataReserve?.fechaRetiro !== undefined;

  return (
    <div className="w-full h-full bg-background flex justify-center px-3">
      <div className="lg:w-[85%] md:w-[90%] w-full h-full flex flex-col items-center">
        {isFromReserva ? <TimeLine posicion={2} /> : <NuevaReservaPrueba />}

        <SelectForCategory />
      </div>
    </div>
  );
};

export default CategoriaDeVehiculos;
