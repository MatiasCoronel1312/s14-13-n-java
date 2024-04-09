import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

interface Props {
  posicion?: number;
}

const pointDots = [
  {
    id: 1,
    detail: "Local, fecha y hora de reserva",
    path: "-",
  },
  {
    id: 2,
    detail: "Categorías de vehículos",
    path: "/categoriasDeVehiculos/seleciona",
  },
  {
    id: 3,
    detail: "Cargos y adicionales",
    path: "-",
  },
  {
    id: 4,
    detail: "Datos de registro",
    path: "-",
  },
];
const TimeLine = ({ posicion = 1 }: Props) => {
  const navigate = useNavigate();

  const circulos: string =
    "rounded-full border-[4px] border-[#8F8F8F] w-[34px] transition-all duration-1000 ease-in-out h-[34px] flex justify-center items-center ";
  const lineas: string =
    " border-[3px] border-[#8F8F8F] w-[200px] h-0 transition-all duration-1000 ease-in-out";
  const circulo_interno: string =
    "rounded-full border-[3px] bg-[#F8C381] w-[27px] h-[27px] transition-all duration-1000 ease-in-out";
  const circulo_activo: string =
    "rounded-full border-[4px] border-secondary Gradient-T ";
  // const linea_activa: string = " border-secondary";
  const title: string =
    "text-center text-[20px] w-[25%] cursor-pointer transition-all duration-1000 ease-in-out";
  const stageUno = (path: string): void => {
    //setStage(num);
    path.length > 4 && navigate(path);
  };

  return (
    <section>
      <div className="flex justify-center pt-5">
        <div className="border-[1px] border-black w-[900px] h-[134px] flex flex-col  gap-4  items-center justify-center">
          <div className="flex">
            {pointDots.map((dot) => {
              const isSelected = posicion >= dot.id;
              return (
                <section key={dot.id} className="flex  items-center ">
                  {dot.id != 1 && (
                    <div
                      className={` ${
                        isSelected ? "border-secondary" : ""
                      } ${lineas} `}
                    ></div>
                  )}
                  <div className="   flex flex-col justify-center">
                    <div
                      onClick={() => {
                        stageUno(dot.path);
                      }}
                      className={` ${
                        dot.path.length > 5 ? "cursor-pointer" : ""
                      }  ${circulos} ${isSelected && circulo_activo}`}
                    >
                      {isSelected ? (
                        <FaCheck className="text-[#F8C381]" />
                      ) : (
                        <div className={circulo_interno}></div>
                      )}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
          <div className="flex gap-5">
            {pointDots.map((dot) => {
              const isSelected = posicion == dot.id;
              return (
                <div key={dot.id} className="flex  justify-between w-full ">
                  <div
                    onClick={() => {
                      stageUno(dot.path);
                    }}
                    className={`  w-full ${title} ${
                      isSelected ? "text-[#C26A00]" : "text-text"
                    }`}
                  >
                    {dot.detail}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default TimeLine;
