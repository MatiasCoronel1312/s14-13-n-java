//import { useParams } from "react-router-dom";
import SelectForCategory from "../components/SelectForCategory/SelectForCategory";
import TimeLine from "../components/timeline/TimeLine";
import NuevaReserva from "../components/NuevaReserva/NuevaReserva";
import { useState } from "react";

const CategoriaDeVehiculos = () => {
  // const { destino } = useParams();
  // Saber si es desde navbar destino !== "all"
  const [hasDatos, setHasDatos] = useState(true);

  return (
    <div className="w-full bg-background flex justify-center">
      <div className="h-auto lg:w-[85%] md:w-[90%]  ">
        {hasDatos ? <TimeLine posicion={2} /> : <NuevaReserva />}
        <SelectForCategory />
      </div>
    </div>
  );
};

export default CategoriaDeVehiculos;
