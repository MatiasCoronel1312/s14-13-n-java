import CardToPay from "../CardToPay/CardToPay";


import CardShowDetail from "../CardShowDetail/CardShowDetail";
import { TCarro } from "../../assets/carsInfo";

interface Props {
  showCarSelected: TCarro[];
  handleScrollToBack: (a: number) => void;
  selectACard: string;
  SetSelectACard: React.Dispatch<React.SetStateAction<string>>;
}

const TarifasSection = ({
  showCarSelected,
  handleScrollToBack,
  selectACard,
  SetSelectACard,
}: Props) => {
  //const [selectACard, SetSelectACard] = useState("");

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

          <CardToPay
            selectACard={selectACard}
            SetSelectACard={SetSelectACard}
            handleScrollToBack={handleScrollToBack}
            price={showCarSelected[0].precio + showCarSelected[0].precio * 0.05}
            title={"PAGAR EN MOSTRADOR"}
          />
          <CardToPay
            selectACard={selectACard}
            SetSelectACard={SetSelectACard}
            handleScrollToBack={handleScrollToBack}
            price={showCarSelected[0].precio + showCarSelected[0].precio * 0.15}
            title={"PAGAR CON MERCADOPAGO  "}
          />
        </div>
        <div className="flex flex-col gap-4 pt-2">
          <p className="text-xl font-light">Grupo Seleccionado</p>
          <CardShowDetail showCars={showCarSelected} />

        </div>
      </div>
    </section>
  );
};

export default TarifasSection;
