// interface ReservaProps {
//   agenciaRetirada: string;
//   fecha: string | Date;
// }

import { SetStateAction, useState } from "react";
import Calendar from "react-calendar";

export const NuevaReserva = () => {
  const isSelectedAgency = false;

  const selectedAgency = () => {
    if (isSelectedAgency) {
    } else {
    }
  };
  const [date, setDate] = useState(new Date());

  const onChange = (_date: SetStateAction<Date>) => {
    setDate(_date);

    return (
      <>
        {selectedAgency()}
        <div className="Gradient-V w-full max-h-[129] p-6 m-3 rounded-l flex justify-between align-middle">
          <p className="text-white text-base">Nueva Reserva</p>
          <input
            className="w-2/3 rounded-md py-4 "
            type="text"
            placeholder="  Ingresá la agencia de retirada (ej. Bariloche, Buenos Aires) 
        "
          />
          <svg
            width="19"
            height="26"
            viewBox="0 0 19 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-3 left-3"
          >
            <path
              d="M8.52368 25.4754C1.33445 14.7789 0 13.6811 0 9.75C0 4.36521 4.25328 0 9.5 0C14.7467 0 19 4.36521 19 9.75C19 13.6811 17.6655 14.7789 10.4763 25.4754C10.0045 26.1749 8.99541 26.1748 8.52368 25.4754ZM9.5 13.8125C11.6861 13.8125 13.4583 11.9937 13.4583 9.75C13.4583 7.50633 11.6861 5.6875 9.5 5.6875C7.31386 5.6875 5.54167 7.50633 5.54167 9.75C5.54167 11.9937 7.31386 13.8125 9.5 13.8125Z"
              fill="#707070"
            />
          </svg>
          <div className="ps-2 w-1/3 flex rounded-md">
            <input className=" " type="text" placeholder="Fecha" />
            <input className=" " type="text" placeholder="Hora" />
            <Calendar onChange={onChange} value={date} />
          </div>
        </div>
      </>
    );
  };
};
