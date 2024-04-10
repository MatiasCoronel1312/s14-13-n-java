import { useState } from "react";
import ButtonMain from "../ButtonMain/ButtonMain";
interface Props {
  title: string;

  price: number;
  handleScrollToBack: (a: number) => void;
  selectACard: string;
  SetSelectACard: (a: string) => void;
}
export default function CardToPay({
  title,
  price,
  handleScrollToBack,
  selectACard,
  SetSelectACard,
}: Props) {
  const [isSelected, setIsSelected] = useState(false);
  const planSelected = selectACard == title;
  const selectCard = () => {
    setIsSelected(true);
    handleScrollToBack(1000);
    SetSelectACard(title);
  };
  return (
    <div
      className={`w-[375px] min-h-[600px] ${
        isSelected && planSelected ? "opacity-45" : "bg-white"
      }   p-6 flex flex-col justify-between items-center border border-spacing-2 border-black rounded-3xl shadow-card`}
    >
      <h3 className="text-xl font-extralight">{title}</h3>

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
        <p className="text-2xl  font-ligth shadow-text">US$ {price},00 / dia</p>
      </div>
      {!planSelected ? (
        <div onClick={selectCard}>
          <ButtonMain title={"Seleccionar Oferta"} />
        </div>
      ) : (
        <div className=" w-[293px] h-[64px]"></div>
      )}
    </div>
  );
}
