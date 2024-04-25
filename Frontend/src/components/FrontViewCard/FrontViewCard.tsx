import { useNavigate } from "react-router-dom";
import { TCarro } from "../../assets/carsInfo";
import ButtonMain from "../ButtonMain/ButtonMain";
import { useAppDispatch, useAppSeletor } from "../../redux/store";
import { postCars } from "../../redux/carsSlice";
import { useState } from "react";

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
  const dispatch = useAppDispatch();
  const [alertReservation, setAlertReservation] = useState(false);
  const dataReserve = useAppSeletor((state) => state.dataReserve.dataReserve)?.fechaEntrega;

  const goToSelectCar = () => {
    if (dataReserve === undefined) {
      setAlertReservation(true);
      setTimeout(() => {
        setAlertReservation(false);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 2000);
    } else {
      setAlertReservation(false);
      navigate("../selecciona-pago");
      dispatch(postCars([detailsCar]));
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {alertReservation && (
        <div className="absolute bottom-[60px] z-10 right-[45px] w-[340px] h-[100px] bg-white border border-black flex justify-center items-center shadow-xl">
          Has tu reserva antes de seleccioar carro!
        </div>
      )}
      <div
        className={` ${hasStock ? "bg-white " : "bg-[#FFF6EC] "}  w-[350px] ${
          isCategory ? "h-[556px]" : "h-[500px]"
        } border border-gray-300 rounded-xl flex flex-col items-center  py-6 shadow-card relative`}
      >
        <p className="text-2xl font-light">{detailsCar.category}</p>

        <section className="flex flex-col items-center gap-3 py-2">
          <figure
            className={`w-[285px] h-[175px] relative ${
              hasStock ? "bg-[#f7f5f577]" : "bg-[#FADEBD]"
            }    shadow-sm p-6 `}
          >
            {isMoreCar && (
              <div className="absolute flex z-10 w-[285px] top-20 left-0 justify-between px-3 text-gray-600 font-bold text-xl">
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
              src={detailsCar.image}
              alt={detailsCar.model}
            />
            {isMoreCar && (
              <div className="flex w-full justify-center relative -top-11 items-center">
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
                          className={`h-3 mx-1 relative z-50 hover:cursor-pointer rounded-full "w-3  transition-all duration-[800ms]  ease-in"
                     ${isSelected ? "" : "w-3  bg-[#D7D9DC]"} `}
                        ></p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </figure>
          <div className="flex flex-col items-center">
            <p className="text-2xl font-light text-primary">
              {detailsCar.brand}
            </p>
            <p className="px-10 text-pretty text-[12px] h-10">
              *Su reserva garantiza uno de los modelos de autos a continuación,
              sujeto a disponibilidad de la agencia.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center py-3 bg-[#FADEBD] w-[285px] h-[60px] rounded-[10px]   ">
            <p className="font-extralight text-sm ">Desde</p>
            <h3 className="text-2xl font-extralight font-poppins shadow-textd">
              US$ {detailsCar.price} / dia
            </h3>
          </div>

          {isCategory &&
            (hasStock ? (
              <div onClick={goToSelectCar}>
                <ButtonMain title={"Seleccionar Auto"} />
              </div>
            ) : (
              <div className="w-[211px] h-[64px] bg-[#333333] flex items-center justify-center rounded-[10px]">
                <p className=" text-xl text-[#F5F5F5] font-extralight">
                  Sin Stock
                </p>
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
    </div>
  );
}
