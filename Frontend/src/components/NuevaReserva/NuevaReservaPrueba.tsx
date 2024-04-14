
import { useAppDispatch, useAppSeletor } from "../../redux/store";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { postReserve } from "../../redux/reserveSlice";

export const NuevaReserva = () => {
  
    const [onFocusEntrega, setOnFocusEntrega] = useState(false)
    const [onFocusRetiro, setOnFocusRetiro] = useState(false)
    const [agenciaRetiro, setAgenciaRetiro] = useState<string>('');
    const [fechaRetiro, setFechaRetiro] = useState<string>('');
    const [horaRetiro, setHoraRetiro] = useState<string>('');
    const [agenciaEntrega, setAgenciaEntrega] = useState<string>('');
    const [fechaEntrega, setFechaEntrega] = useState<string>('');
    const [horaEntrega, setHoraEntrega] = useState<string>('');
    const dataEntrega = useRef(false)
    const [onFocus, setOnFocus] = useState(false)
    const navigator = useNavigate();
    const dispatch = useAppDispatch(); //dispatch para mas adelante para guardar los datos de la reserva
    const dataReserve = useAppSeletor(state=>state.dataReserve.dataReserve)//useSelector para recibir los datos de la agencia en el caso de haber seleccionado en la lista de agencias
    const allAgencias = useAppSeletor(state=>state.allAgencias.agencias)
    
    useEffect(() => {
    if(dataReserve.lugarRetiro){
      handleChange(setAgenciaRetiro,'agenciasRetiro',dataReserve.lugarRetiro)
    }
    }, [dataReserve])
 
   const handleFocus = (setOnFocus: React.Dispatch<React.SetStateAction<boolean>>,onFocus:boolean) =>{
    setTimeout(() => {
      setOnFocus(!onFocus);
    }, 300);
   }
    const handleChange = (setState: React.Dispatch<React.SetStateAction<string>>,name:string, agencia?:string) => {
      const element = document.getElementById(name) as HTMLInputElement | null;
       if (agencia) {  
        setState(agencia);
      }else if(element){
          setState(element.value);
        }
      }
      const handleOnBlur = () =>{
      if(agenciaRetiro !== '' && horaRetiro !== '' && fechaRetiro !== ''){
        dataEntrega.current = true
        setOnFocus(true)
        console.log('true',agenciaRetiro, horaRetiro, fechaRetiro, dataEntrega.current);
      }else{  
        dataEntrega.current = false
        console.log('false',agenciaRetiro, horaRetiro, fechaRetiro, dataEntrega.current);
      }
    }
    const opcionesFiltradasRetiro = allAgencias.filter(agencia =>
        agencia.name.toLowerCase().includes(agenciaRetiro?agenciaRetiro.toLowerCase():'')
      );
    const opcionesFiltradasEntrega = allAgencias.filter(agencia =>
        agencia.name.toLowerCase().includes(agenciaEntrega?agenciaEntrega.toLowerCase():'')
      );
    const handleSubmit = () => {

      dispatch(postReserve({
        lugarEntrega: agenciaEntrega,
        lugarRetiro: agenciaRetiro,
        fechaEntrega: fechaRetiro,
        returnDate: fechaEntrega,
        horaEntrega: horaRetiro,
        horaDevolucion: horaEntrega,
      }))
      navigator("/categoriasDeVehiculos/seleciona")
    }
  
  return (
    <div className="w-full">
      <div className=" Gradient-V min-h-[129px] max-h-[244px] p-5 my-6 rounded-xl flex flex-col justify-center mx-auto ">
          <div className="flex justify-between h-[45%] mb-4">
            <p className="w-[16%] text-white text-[20px] font-semibold self-center text-center">Nueva Reserva</p>
            <div className="w-[50%] h-[70px] relative">
                <div className="w-full h-[70px] relative">
                    <input
                      className="w-full h-full rounded-md p-4 font-sans text-text "
                      type="text"
                      name="agenciaRetiro"
                      id="agenciaRetiro"
                      value={agenciaRetiro}
                      onBlur={()=>{handleFocus(setOnFocusRetiro,onFocusRetiro),handleOnBlur}}
                      onFocus={()=>{handleFocus(setOnFocusRetiro,onFocusRetiro),handleOnBlur}}
                      onChange={()=>{handleChange(setAgenciaRetiro,'agenciaRetiro')}}
                      placeholder={'Ingresá la agencia de retirada (ej. Bariloche, Buenos Aires)'}
                    />
                    <FaLocationDot className="absolute bottom-[1.5rem] right-[1rem] w-[19px] h-[26px] text-text"/>
                </div>
                  {
                  onFocusRetiro&&<ul className="absolute top-[68px] bg-background rounded-lg border-2 border-text z-10">
                  {agenciaRetiro&&agenciaRetiro.length>2&& opcionesFiltradasRetiro.map((opcion, index) => (
                    <li onClick={()=>{handleChange(setAgenciaRetiro,'agenciasRetiro',opcion.name)}} className="cursor-pointer p-2" key={index}>{opcion.name}</li>
                  ))}
                </ul>
                }
            </div>
            
            <div className=" flex lg:w-[30%] h-[70px] ">
              <input
                className="w-1/2 h-full rounded-l-md px-2"
                type="date"
                name="fechaRetiro"
                placeholder="Fecha de Retiro"
                id="fechaRetiro"
                value={fechaRetiro}
                onFocus={()=>{handleOnBlur()}}
                onChange={()=>{handleChange(setFechaRetiro,'fechaRetiro'),handleOnBlur}}
              />

              <input
                className="w-1/2 h-full text-text rounded-r-md border-l-2 border-text px-2"
                type="time"
                placeholder="Hora de Retiro "
                name="horaRetiro"
                id="horaRetiro"
                onFocus={()=>{handleOnBlur()}}
                value={horaRetiro}
                onChange={()=>{handleChange(setHoraRetiro,'horaRetiro'),handleOnBlur}}
                
              />
            </div>
          </div>
          {onFocus&&<div className="flex justify-between h-[45%]">
            <button
              onClick={()=>{handleSubmit()}}
              className="bg-text h-[62px]  self-center w-[16%] text-white text-[20px] font-semibold rounded-md "
              type="submit"
            >
              Seguir
            </button>
            <div className="w-[50%] h-[70px] relative">
                <div className="w-full h-[70px] relative">
                    <input
                      className="w-full h-full rounded-md p-4 font-sans text-text "
                      type="text"
                      name="agenciaEntrega"
                      id="agenciaEntrega"
                      value={agenciaEntrega}
                      onBlur={()=>{handleFocus(setOnFocusEntrega,onFocusEntrega)}}
                      onFocus={()=>{handleFocus(setOnFocusEntrega,onFocusEntrega)}}
                      onChange={()=>{handleChange(setAgenciaEntrega,'agenciaEntrega')}}
                      placeholder="Ingresá la agencia de entrega (ej. Bariloche, Buenos Aires)"
                    />
                    <FaLocationDot className="absolute bottom-[1.5rem] right-[1rem] w-[19px] h-[26px] text-text"/>
                </div>
                  {
                  onFocusEntrega&&<ul className="absolute top-[68px] bg-background rounded-lg border-2 border-text">
                  {agenciaEntrega&&agenciaEntrega.length>2&& opcionesFiltradasEntrega.map((opcion, index) => (
                    <li onClick={()=>{handleChange(setAgenciaEntrega,'agenciasEntrega',opcion.name)}} className="cursor-pointer p-2" key={index}>{opcion.name}</li>
                  ))}
                </ul>
                }
            </div>
            <div className=" flex lg:w-[30%] h-[70px] ">
              <input
                className="w-1/2 h-full rounded-l-md px-2"
                type="date"
                name="fechaEntrega"
                id="fechaEntrega"
                value={fechaEntrega}
                placeholder="Fecha de Entrega"
                onChange={()=>{handleChange(setFechaEntrega,'fechaEntrega')}}
        
              />

              <input
                className="w-1/2 h-full text-text rounded-r-md border-l-2 border-text px-2"
                type="time"
                placeholder="Hora de Entrega"
                name="horaEntrega"
                id="horaEntrega"
                value={horaEntrega}
                onChange={()=>{handleChange(setHoraEntrega,'horaEntrega')}}
                
              />
            </div>

          </div>}
      </div>
    </div>
  );
};
export default NuevaReserva;
