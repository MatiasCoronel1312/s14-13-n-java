//import { useParams } from "react-router-dom";
import SelectForCategory from "../components/SelectForCategory/SelectForCategory";
import TimeLine from "../components/timeline/TimeLine";
import NuevaReservaPrueba from "../components/NuevaReserva/NuevaReservaPrueba";
import { useState } from "react";
import { useAppSeletor } from "../redux/store";

const CategoriaDeVehiculos = () => {
  const dataReserve = useAppSeletor(state=>state.dataReserve.dataReserve)
  // const { destino } = useParams();
  // Saber si es desde navbar destino !== "all"
  const [hasDatos, setHasDatos] = useState(true);
  console.log(dataReserve);
  
  return (
    <div className="w-full bg-background flex justify-center">
      <div className="h-auto lg:w-[85%] md:w-[90%]  ">
        {hasDatos ? <TimeLine posicion={2} /> : <NuevaReservaPrueba />}
        <SelectForCategory />
      </div>
    </div>
  );
};

export default CategoriaDeVehiculos;
