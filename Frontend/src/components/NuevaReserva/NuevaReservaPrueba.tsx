
import { useAppDispatch, useAppSeletor } from "../../redux/store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const NuevaReserva = () => {
  
    const [agenciaRet, setAgenciaRet] = useState('')
    const [filtro, setFiltro] = useState('');
    const navigator = useNavigate();
    const dispatch = useAppDispatch(); //dispatch para mas adelante para guardar los datos de la reserva
    const dataReserve = useAppSeletor(state=>state.dataReserve.dataReserve)//useSelector para recibir los datos de la agencia en el caso de haber seleccionado en la lista de agencias
    const agencias = useAppSeletor(state=>state.allAgencias.agencias)
    
    useEffect(() => {
    if(dataReserve.lugar){
        console.log(dataReserve.lugar)
    }
    }, [dataReserve])
 
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFiltro(e.target.value)
    }
    const opcionesFiltradas = opciones.filter(opcion =>
        opcion.toLowerCase().includes(filtro.toLowerCase())
      );
  
  return (
    <>
      <div className="border-2 border-black w-[1180px] min-h-[129px] p-6 my-6 rounded-xl ">
        <form className="flex  justify-between flex-wrap gap-4" >
          <div className="flex gap-2">
            <p className="text-white text-[24px] self-center">Nueva Reserva</p>
            <input
              className="w-[596px] h-[70px] rounded-md py-4 font-sans text-text border-2 border-black"
              type="text"
              name="agenciaRetiro"
              onChange={(e)=>{handleChange(e)}}
              placeholder={'Ingresá la agencia de retirada (ej. Bariloche, Buenos Aires)'}
            /><ul>
            {filtro.length>2&& opcionesFiltradas.map((opcion, index) => (
              <li key={index}>{opcion}</li>
            ))}
          </ul>
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
            <div className=" flex">
              <input
                className="w-[162px] rounded-l-md border-2 border-black"
                type="date"
                name="fechaRetiro"
                placeholder="Fecha de Retiro"
              />

              <input
                className="w-[142px] h-[70px] text-text rounded-r-md border-2 border-black"
                type="time"
                placeholder="Hora de Retiro"
                
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={()=>{navigator("/categoriasDeVehiculos/seleciona")}}
              className="bg-black h-[62px] w-[153px] me-4 self-center text-white p-2 ms-2 rounded-md "
              type="submit"
            >
              Seguir
            </button>
            <input
              className="w-[596px] h-[70px] rounded-md py-4 font-sans text-text border-2 border-black"
              type="text"
              placeholder="  Ingresá la agencia de entrega (ej. Bariloche, Buenos Aires) 
              "
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
                className="w-[162px] h-[70px] rounded-l-md border-2 border-black"
                type="date"
                placeholder="Fecha de entrega"
              />

              <input
                className="w-[142px] h-[70px] text-text rounded-r-md border-2 border-black"
                type="time"
                placeholder="Hora de entrega"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default NuevaReserva;
