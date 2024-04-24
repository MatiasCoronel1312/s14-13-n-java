import SelectForCategory from "../components/SelectForCategory/SelectForCategory";
import TimeLine from "../components/timeline/TimeLine";
import NuevaReservaPrueba from "../components/NuevaReserva/NuevaReservaPrueba";

import { useAppSeletor } from "../redux/store";

const CategoriaDeVehiculos = () => {
  const dataReduces = useAppSeletor((state) => state);

  const dataReserve = dataReduces.dataReserve.dataReserve;
  const isFromReserva = dataReserve?.fechaRetiro !== undefined;

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
              <NuevaReservaPrueba />{" "}
            </div>
          )}
        </div>

        <SelectForCategory />
      </div>
    </div>
  );
};

export default CategoriaDeVehiculos;
