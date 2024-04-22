import { useState } from "react";
import ButtonMain from "../ButtonMain/ButtonMain";
import { postTarifaMetodoPago } from "../../redux/coberturasSlice";
import { useAppDispatch } from "../../redux/store";

interface Props {
  card: {
    id: number;
    name: string;
    price: number;
  };

  carPrice: number;
  handleScrollToBack: (a: number) => void;
  selectACard: string;
  SetSelectACard: (a: string) => void;
}
export default function CardToPay({
  card: { id, name, price },
  carPrice,
  handleScrollToBack,
  selectACard,
  SetSelectACard,
}: Props) {
  const [isSelected, setIsSelected] = useState(false);
  const planSelected = selectACard == name;
  const dispatch = useAppDispatch();
  const selectCard = () => {
    setIsSelected(true);
    handleScrollToBack(1200);

    SetSelectACard(name);

    dispatch(
      postTarifaMetodoPago({
        id,
        name,
        price,
      })
    );
  };
  let realPrices = "";

  if (carPrice.toString().includes(".")) {
    const entero = carPrice.toString().split(".");
    const decimal = entero[1].length == 1 ? `${entero[1]}0` : `${entero[1]}`;

    realPrices = ` ${entero[0]}.${decimal.slice(0, 2)}`;
  } else {
    realPrices = ` ${carPrice}.00`;
  }

  return (
    <div
      className={`w-[375px] min-h-[600px] ${
        isSelected && planSelected ? "opacity-45" : "bg-white"
      }   p-6 flex flex-col justify-between items-center border border-spacing-2 border-black rounded-3xl shadow-card`}
    >
      <h3 className="text-xl font-extralight">{name}</h3>

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

        <p className="text-2xl font-poppins font-ligth shadow-text">
          US$ {realPrices} / dia
        </p>
      </div>
      {!planSelected ? (
        <div onClick={selectCard}>
          <ButtonMain title={"Seleccionar Oferta"} />
        </div>
      ) : (
        <div className=" w-[293px] h-[64px] flex justify-center items-center bg-gray-300">
          <p className="text-lg  font-light">Seleccionada</p>
        </div>
      )}
    </div>
  );
}
