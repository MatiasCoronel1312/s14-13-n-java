import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  posicion?: number;
}
interface PointDots {
  id: number;
  detail: string;
  path: string;
  pathHabile: string[];
}
const pointDots: PointDots[] = [
  {
    id: 1,
    detail: "Local, fecha y hora de reserva",
    path: "-",
    pathHabile: [""],
  },
  {
    id: 2,
    detail: "Categorías de vehículos",
    path: "/categoriasDeVehiculos/seleciona",
    pathHabile: ["/selecciona-pago", "/finalizar-pago"],
  },
  {
    id: 3,
    detail: "Cargos y adicionales",
    path: "/selecciona-pago",
    pathHabile: ["/finalizar-pago"],
  },
  {
    id: 4,
    detail: "Datos de registro",
    path: "-",
    pathHabile: [""],
  },
];
const TimeLine = ({ posicion = 1 }: Props) => {
  const location = useLocation();
  const [addDotsTimeLine, setaAddDotsTimeLine] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setaAddDotsTimeLine(location.pathname);
  }, []);

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
    "text-center text-[20px] w-[25%] transition-all duration-1000 ease-in-out";
  const stageUno = (path: string): void => {
    navigate(path);
  };

  return (
<<<<<<< HEAD
    <div className="flex justify-center pt-5">
      <div className="border-[1px] border-black w-[900px] h-[134px] flex flex-col items-center justify-around">
        <div className="flex justify-around items-center h-[34px] w-[736px]">
          <div onClick={()=>{stageUno(1)}} className={`${circulos} ${stage>=1&&circulo_activo}`}>
          {stage>=1&&<FaCheck className="text-[#F8C381]"/>}
          </div>
          <div className={`${lineas} ${stage>=1&&linea_activa}`}></div>
          <div onClick={()=>{stageUno(2)}} className={`${circulos} ${stage>=1&&circulo_activo}`}>
            {stage<=1?<div className={circulo_interno}></div>:<FaCheck className="text-[#F8C381] transition-all duration-1000 ease-in-out"/>}
=======
    <section>
      <div className="flex justify-center pt-5">
        <div className="border-[1px] border-black w-[900px] h-[134px] flex flex-col  gap-4  items-center justify-center">
          <div className="flex">
            {pointDots.map((dot) => {
              const isSelected = posicion >= dot.id;
              const dotsToPress = dot.pathHabile.includes(addDotsTimeLine);
>>>>>>> 1a4bcde1068d542507627c21c413cc6b7ade52c4

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
                        if (dotsToPress) {
                          stageUno(dot.path);
                        }
                      }}
                      className={` ${
                        dotsToPress ? "cursor-pointer" : ""
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
              const dotsToPress = dot.pathHabile.includes(addDotsTimeLine);
              return (
                <div key={dot.id} className="flex  justify-between w-full ">
                  <div
                    onClick={() => {
                      if (dotsToPress) {
                        stageUno(dot.path);
                      }
                    }}
                    className={` ${
                      dotsToPress ? "cursor-pointer hover:text-[#c27100]" : ""
                    }  w-full ${title} ${
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
