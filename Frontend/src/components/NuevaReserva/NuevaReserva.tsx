import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSeletor } from "../../redux/store";
import { useEffect } from "react";
import { postReserve } from "../../redux/reserveSlice";

import { useForm } from "react-hook-form";
import { Formulario } from "./Formulario.interface";

export const NuevaReserva = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const dispatch = useAppDispatch(); //dispatch para mas adelante para guardar los datos de la reserva

  const dataReserve = useAppSeletor((state) => state.dataReserve.dataReserve); //useSelector para recibir los datos de la agencia en el caso de haber seleccionado en la lista de agencias
  useEffect(() => {
    if (dataReserve?.lugarRetiro) {
      console.log(dataReserve.lugarRetiro);
    }
  }, [dataReserve]);

  const onSubmit = handleSubmit((data) => {
    const formulario: Formulario = {
      agenciaRetiro: data.agenciaRetiro,
      fechaRetiro: data.fechaRetiro,
      horaRetiro: data.horaRetiro,
      agenciaEntrega: data.agenciaEntrega,
      fechaEntrega: data.fechaEntrega,
      horaEntrega: data.horaEntrega,
    };

    dispatch(postReserve(formulario));
    // before add formulario data in redux state
    navigate("../categoriasDeVehiculos/all", {
      state: { isReserva: true },
    });
  });

  return (
    <>
      <div className="Gradient-V w-[1180px] min-h-[129px] p-6 my-6 rounded-xl ">
        <form
          className="flex  justify-between flex-wrap gap-4"
          onSubmit={onSubmit}
        >
          <p className="text-white text-[24px] self-center">Nueva Reserva</p>
          <div className="flex gap-2">
            <input
              className="w-[596px] h-[70px] rounded-md py-4 font-sans text-text"
              type="text"
              required
              placeholder="  Ingresá la agencia de retirada (ej. Bariloche, Buenos Aires) 
            "
              {...register("agenciaRetiro")}
            />

            <svg
              width="19"
              height="26"
              viewBox="0 0 19 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative top-[1rem] left-[-3rem]"
            >
              <path
                d="M8.52368 25.4754C1.33445 14.7789 0 13.6811 0 9.75C0 4.36521 4.25328 0 9.5 0C14.7467 0 19 4.36521 19 9.75C19 13.6811 17.6655 14.7789 10.4763 25.4754C10.0045 26.1749 8.99541 26.1748 8.52368 25.4754ZM9.5 13.8125C11.6861 13.8125 13.4583 11.9937 13.4583 9.75C13.4583 7.50633 11.6861 5.6875 9.5 5.6875C7.31386 5.6875 5.54167 7.50633 5.54167 9.75C5.54167 11.9937 7.31386 13.8125 9.5 13.8125Z"
                fill="#707070"
              />
            </svg>
            <div className="flex ">
              <input
                className="w-[162px] rounded-l-md border-r-2"
                type="date"
                placeholder="Fecha de Retiro"
                {...register("fechaRetiro")}
              />

              <input
                required
                className="w-[142px] h-[70px] text-text rounded-r-md"
                type="time"
                placeholder="Hora de Retiro"
                {...register("horaRetiro")}
              />
            </div>
          </div>
          <button
            className="bg-black h-[62px] w-[153px] me-4 self-center text-white p-2 ms-2 rounded-md"
            type="submit"
          >
            Seguir
          </button>
          <div className="flex gap-2">
            <input
              required
              className="w-[596px] h-[70px] rounded-md py-4 font-sans text-text"
              type="text"
              placeholder="  Ingresá la agencia de entrega (ej. Bariloche, Buenos Aires) 
              "
              {...register("agenciaEntrega")}
            />
            <svg
              width="19"
              height="26"
              viewBox="0 0 19 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative top-[1rem] left-[-3rem]"
            >
              <path
                d="M8.52368 25.4754C1.33445 14.7789 0 13.6811 0 9.75C0 4.36521 4.25328 0 9.5 0C14.7467 0 19 4.36521 19 9.75C19 13.6811 17.6655 14.7789 10.4763 25.4754C10.0045 26.1749 8.99541 26.1748 8.52368 25.4754ZM9.5 13.8125C11.6861 13.8125 13.4583 11.9937 13.4583 9.75C13.4583 7.50633 11.6861 5.6875 9.5 5.6875C7.31386 5.6875 5.54167 7.50633 5.54167 9.75C5.54167 11.9937 7.31386 13.8125 9.5 13.8125Z"
                fill="#707070"
              />
            </svg>

            <div className=" flex ">
              <input
                required
                className="w-[162px] h-[70px] rounded-l-md border-r-2"
                type="date"
                placeholder="Fecha de entrega"
                {...register("fechaEntrega")}
              />

              <input
                required
                className="w-[142px] h-[70px] text-text rounded-r-md"
                type="time"
                placeholder="Hora de entrega"
                {...register("horaEntrega")}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default NuevaReserva;
