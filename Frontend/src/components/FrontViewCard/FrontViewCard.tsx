import { useNavigate } from "react-router-dom";
import { TCarro } from "../../assets/carsInfo";
import ButtonMain from "../ButtonMain/ButtonMain";
//import carro from "AudiA5.png"

interface Props {
  lessIndex: () => void;
  addIndex: () => void;
  showCars: TCarro[];
  indexCar: number;
  setInderCar: (p: number) => void;
  flipCard: () => void;
  isCategory?: boolean;
}

export function FrontViewCard({
  lessIndex,
  addIndex,
  showCars,
  indexCar,
  setInderCar,
  flipCard,
  isCategory,
}: Props) {
  const navigate = useNavigate();
  const detailsCar = showCars[indexCar];
  const hasStock = detailsCar.stock > 0;
  const isMoreCar = showCars.length > 1;
  const goToSelectCar = () => {
    navigate("/selecciona-pago", {
      state: { carro: [detailsCar] },
    });
  };

  return (
    <div
      className={` ${
        hasStock ? "bg-white " : "bg-[#FFF6EC] "
      }  w-[375px] min-h-[500px] border border-gray-300 rounded-xl flex flex-col items-center  py-6 shadow-card relative`}
    >
      <p className="text-2xl font-light">{detailsCar.categoría}</p>

      <section className="flex flex-col items-center gap-3 py-2">
        <figure className="w-[285px] h-[200px] relative bg-gray-400 p-6 ">
          {isMoreCar && (
            <div className="absolute flex z-20 w-[285px] top-20 left-0 justify-between px-3 text-gray-600 font-bold text-xl">
              <p className="hover:cursor-pointer " onClick={lessIndex}>
                {"<"}
              </p>
              <p className="hover:cursor-pointer " onClick={addIndex}>
                {">"}
              </p>
            </div>
          )}
          <img
            className="relative -top-5 z-10 "
            src={`../../../public/imagenesCarros/${detailsCar.imagen}`}
            alt=""
          />
          {isMoreCar && (
            <div className="flex w-full justify-center relative -top-8 items-center">
              {showCars.map((car, index) => {
                const isSelected = indexCar === index;
                return (
                  <div key={index}>
                    {isSelected ? (
                      <p
                        className={`h-3 w-6 rounded-full bg-gradient-to-l transition-all duration-[800ms]  ease-in  from-[#B81C00] to-[#FF8C00] `}
                      ></p>
                    ) : (
                      <p
                        onClick={() => setInderCar(index)}
                        key={car.id}
                        className={`h-3 mx-1 relative z-50 hover:cursor-pointer rounded-full "w-3  bg-gray-200/45"
                     ${isSelected ? "" : "w-3  bg-gray-200/45"} `}
                      ></p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </figure>
        <p className="text-2xl font-light text-primary">{detailsCar.modelo}</p>
        <p className="px-10 text-pretty text-[12px]">
          *Su reserva garantiza uno de los modelos de autos a continuación,
          sujeto a disponibilidad de la agencia.
        </p>
        <div className="flex flex-col justify-center items-center py-3 bg-[#FADEBD] w-[285px] rounded-3xl   ">
          <p className="font-extralight text-sm ">Desde</p>
          <h3 className="text-2xl font-extralight shadow-textd">
            US$ {detailsCar.precio} / dia
          </h3>
        </div>

        {isCategory &&
          (hasStock ? (
            <div onClick={goToSelectCar}>
              <ButtonMain title={"Seleccionar Grupo"} />
            </div>
          ) : (
            <div className="w-[211px] h-[64px] bg-[#8F8F8F] flex items-center justify-center rounded-xl">
              <p className=" text-xl font-extralight">Sin Stock</p>
            </div>
          ))}
      </section>

      <p
        onClick={flipCard}
        className="text-sm font-light text-primary absolute bottom-2 hover:cursor-pointer "
      >
        Mostrar Detalles
      </p>
    </div>
  );
}
