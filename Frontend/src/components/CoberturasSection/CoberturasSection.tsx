import { useEffect, useState } from "react";
import CoberturasBanner from "../CoberturasBanner/CoberturasBanner";
import { useAppSeletor } from "../../redux/store";

const allCoberturas = [
  {
    title: "Protección Especial con Franquicia",
    price: 0.03,
  },
  {
    title: "Protección Premium",
    price: 20.0,
  },
];
export default function CoberturasSection() {
  const [coberturaSelected, setCoberturaSelected] = useState("");
  const dataSegueridad = useAppSeletor(
    (state) => state.coberturas.cargos.seguridad.title
  );
  useEffect(() => {
    if (dataSegueridad !== "") {
      setCoberturaSelected(dataSegueridad);
    }
  }, []);

  return (
    <section className="w-[1200px] min-h-[580px]  bg-background mx-auto  px-2">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-light">
          Elige la tarifa que mejor se adapte a tus necesidades
        </p>
        <p className="text-[#854900] text-md font-light ">
          Conoce las protecciones adicionales
        </p>
      </div>
      <div className="my-10 ">
        <p className="text-[#854900] text-xl font-light mb-10">Coberturas</p>
        <p className=" text-xl font-light ">Mas seguridad en tu viaje</p>
      </div>

      <div className="flex flex-col w-full  gap-16">
        {allCoberturas.map((cobertura) => (
          <CoberturasBanner
            key={cobertura.title}
            title={cobertura.title}
            price={cobertura.price}
            setCoberturaSelected={setCoberturaSelected}
            coberturaSelected={coberturaSelected}
          />
        ))}
      </div>
    </section>
  );
}
