import { TCarro } from "../../assets/carsInfo";

interface Props {
  showCars: TCarro[];
  indexCar: number;
  flipCard: () => void;
  isCategory?: boolean;
}

export default function BackViewCard({
  showCars,
  indexCar,
  flipCard,
  isCategory,
}: Props) {
  return (
    <div
      className={`w-[375px] ${
        isCategory ? "h-[573px]" : "h-[500px]"
      } border border-gray-300 bg-white rounded-xl flex flex-col items-center  py-6 shadow-card relative`}
    >
      <p className="text-2xl font-light mb-2">{showCars[indexCar].modelo}</p>

      <div className="grid grid-cols-2 gap-2 w-full px-3 ">
        {showCars[indexCar].features.map((feature) => (
          <div
            key={feature}
            className="w-[160px] h-18 bg-[#f2f2f2] flex items-center gap-2 pr-1 pl-4 rounded-xl"
          >
            <p>SVG</p>
            <p
              className=" w-[100px] h-14 flex text-sm text-gray-700 text-center justify-center items-center"
              key={feature}
            >
              {feature}
            </p>
          </div>
        ))}
      </div>

      <p
        onClick={flipCard}
        className="text-sm font-light text-primary absolute bottom-2 hover:cursor-pointer "
      >
        Ocultar Detalles
      </p>
    </div>
  );
}
