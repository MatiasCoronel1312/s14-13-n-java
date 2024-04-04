import { TCarro } from "../../assets/carsInfo";

interface Props {
  lessIndex: () => void;
  addIndex: () => void;
  showCars: TCarro[];
  indexCar: number;
  setInderCar: (p: number) => void;
  flipCard: () => void;
}

export function FrontViewCard({
  lessIndex,
  addIndex,
  showCars,
  indexCar,
  setInderCar,
  flipCard,
}: Props) {
  return (
    <div className="w-[375px] h-[500px] border border-gray-500 rounded-xl flex flex-col items-center  py-6 shadow-card relative">
      <p className="text-2xl font-light">{showCars[indexCar].categoría}</p>

      <section className="flex flex-col items-center gap-3 py-2">
        <figure className="w-[285px] h-[200px] relative bg-gray-400 p-6 ">
          <div className="absolute flex z-20 w-[285px] top-20 left-0 justify-between px-3 text-gray-600 font-bold text-xl">
            <p className="hover:cursor-pointer " onClick={lessIndex}>
              {"<"}
            </p>
            <p className="hover:cursor-pointer " onClick={addIndex}>
              {">"}
            </p>
          </div>
          <img
            className="relative -top-5 z-10 "
            src={`./public/imagenesCarros/${showCars[indexCar].imagen}`}
            alt=""
          />
          <div className="flex w-full justify-between relative -top-8">
            {showCars.map((car, index) => {
              const isSelected = indexCar === index;
              return (
                <>
                  {isSelected ? (
                    <p
                      className={`h-3 w-6 rounded-full bg-gradient-to-l transition-all duration-[800ms]  ease-in  from-[#B81C00] to-[#FF8C00] `}
                    ></p>
                  ) : (
                    <p
                      onClick={() => setInderCar(index)}
                      key={car.id}
                      className={`h-3 relative z-50 hover:cursor-pointer rounded-full "w-3  bg-gray-200/45"
                     ${isSelected ? "" : "w-3  bg-gray-200/45"} `}
                    ></p>
                  )}
                </>
              );
            })}
          </div>
        </figure>
        <p className="text-2xl font-light text-primary">
          {showCars[indexCar].modelo}
        </p>
        <p className="px-10 text-pretty text-[12px]">
          *Su reserva garantiza uno de los modelos de autos a continuación,
          sujeto a disponibilidad de la agencia.
        </p>
        <div className="flex flex-col justify-center items-center py-3 bg-[#FADEBD] w-[285px] rounded-3xl   ">
          <p className="font-extralight text-sm ">Desde</p>
          <h3 className="text-2xl font-extralight shadow-textd">
            US$ {showCars[indexCar].precio} / dia
          </h3>
        </div>
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
