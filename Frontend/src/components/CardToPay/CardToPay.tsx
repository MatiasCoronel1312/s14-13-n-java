import ButtonMain from "../ButtonMain/ButtonMain";
interface Props {
  title: string;
  path: string;
}
export default function CardToPay({ title, path }: Props) {
  return (
    <div className="w-[375px] min-h-[600px]   p-6 flex flex-col justify-between items-center border border-spacing-2 border-black rounded-3xl shadow-card">
      <h3 className="text-2xl font-extralight">{title}</h3>

      <div className="flex flex-col h-[180px] justify-between gap-2">
        <p className="bg-[#FFF6EC] flex justify-center items-center w-[315px] h-[60px] shadow-card text-xl font-light">
          Kilometraje Libre
        </p>
        <p className="bg-[#FFF6EC] flex justify-center items-center w-[315px] h-[60px] shadow-card text-xl font-light">
          Protección del vehículo
        </p>
      </div>
      <div className="flex flex-col items-center ">
        <p className="font-extralight text-sm mb-2">Desde</p>
        <p className="text-2xl  font-ligth shadow-text">US$ 55,00 / dia</p>
      </div>
      <ButtonMain title={"Seleccionar Oferta"} path={path} />
    </div>
  );
}
