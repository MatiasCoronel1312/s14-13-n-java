import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../redux/store";
import { resetReserve } from "../../redux/reserveSlice";
import { reseCoberturas } from "../../redux/coberturasSlice";

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
    path: "/categoriasDeVehiculos/all",
    pathHabile: [
      "/selecciona-pago",
      "/finalizar-pago",
      "/categoriasDeVehiculos/all",
      "/categoriasDeVehiculos/seleciona",
    ],
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
  const dispatch = useAppDispatch();
  useEffect(() => {
    setaAddDotsTimeLine(location.pathname);
  }, []);

  const circulos: string =
    "rounded-full border-[4px] border-[#8F8F8F] w-[34px] transition-all duration-1000 ease-in-out h-[34px] flex justify-center items-center ";
  const lineas: string =
    " border-[3px] border-[#8F8F8F] w-[70px] sm:w-[200px] h-0 transition-all duration-1000 ease-in-out";
  const circulo_interno: string =
    "rounded-full border-[3px] bg-[#F8C381] w-[27px] h-[27px] transition-all duration-1000 ease-in-out";
  const circulo_activo: string =
    "rounded-full border-[4px] border-secondary Gradient-T ";
  // const linea_activa: string = " border-secondary";
  const title: string =
    "text-center text-[12px] pl-2 sm:text-[20px] w-[25d%] transition-all duration-1000 ease-in-out";
  const stageUno = (path: string): void => {
    console.log("path", path);
    if (path === "/categoriasDeVehiculos/all") {
      navigate(path);

      dispatch(resetReserve());
    } else {
      dispatch(reseCoberturas());
      navigate(path);
    }
  };

  return (
    <section className="flex justify-center p-5   w-screen ">
      {/* keep this for margin  */}
      <section className="border-[1px] border-black bg-white w-screen  pt-5  md:w-[800px] lg:w-[900px] min-h-[134px] flex flex-col  gap-4  items-center justify-center">
        <div className="flex">
          {pointDots.map((dot) => {
            const isSelected = posicion >= dot.id;
            const dotsToPress = dot.pathHabile.includes(addDotsTimeLine);

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
                  }   ${title} ${isSelected ? "text-[#C26A00]" : "text-text"}`}
                >
                  {dot.detail}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};
export default TimeLine;
