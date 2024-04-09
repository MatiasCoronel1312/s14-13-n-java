import CardToPay from "../CardToPay/CardToPay";
import carros from "../../assets/carsInfo";

import CardShowDetail from "../CardShowDetail/CardShowDetail";

const TarifasSection = () => {
  return (
    <section className="w-[1200px] min-h-[707px]  bg-background mx-auto p-6">
      <p className="text-2xl font-light">
        Elige la tarifa que mejor se adapte a tus necesidades
      </p>
      <p className="text-md font-extralight mb-8">
        Selecciona alguna de la opciones?
      </p>
      <div className="flex gap-4">
        <div className="  flex gap-3">
          <CardToPay title={"PAGAR EN MOSTRADOR"} path={""} />
          <CardToPay title={"PAGAR CON MERCADOPAGO  "} path={""} />
        </div>
        <div className="flex flex-col gap-4 pt-2">
          <p className="text-xl font-light">Grupo Seleccionado</p>
          <CardShowDetail showCars={carros} />
        </div>
      </div>
    </section>
  );
};

export default TarifasSection;
