
import { useAppDispatch, useAppSeletor } from "../../redux/store";
import { useEffect, useState } from "react";
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
    const [onFocus, setOnFocus] = useState(false);
    const [popup, setPopup] = useState(false);
    const navigator = useNavigate();
    const dispatch = useAppDispatch(); //dispatch para mas adelante para guardar los datos de la reserva
    const dataReserve = useAppSeletor(state=>state.dataReserve.dataReserve)//useSelector para recibir los datos de la agencia en el caso de haber seleccionado en la lista de agencias
    const allAgencias = useAppSeletor(state=>state.allAgencias.agencias)
    
    useEffect(() => {
    if(dataReserve.lugarRetiro){
      handleChange(setAgenciaRetiro,'agenciaRetiro',dataReserve.lugarRetiro)
      focusInput('agenciaRetiro')
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
        setOnFocus(true)
      }else{  
        setOnFocus(false)
      }
    }
    const opcionesFiltradasRetiro = allAgencias.filter(agencia =>
        agencia.name.toLowerCase().includes(agenciaRetiro?agenciaRetiro.toLowerCase():'')
      );
    const opcionesFiltradasEntrega = allAgencias.filter(agencia =>
        agencia.name.toLowerCase().includes(agenciaEntrega?agenciaEntrega.toLowerCase():'')
      );
    const handleSubmit = () => {
      if(agenciaRetiro !== '' && horaRetiro !== '' && fechaRetiro !== '' && agenciaEntrega !== '' && horaEntrega !== '' && fechaEntrega !== ''){
         dispatch(postReserve({
        lugarEntrega: agenciaEntrega,
        lugarRetiro: agenciaRetiro,
        fechaEntrega: fechaEntrega,
        fechaRetiro: fechaRetiro,
        horaEntrega: horaRetiro,
        horaRetiro: horaEntrega,
      }))
      navigator("/categoriasDeVehiculos/seleciona")
      }else{  
        let id:string = '';
        
        if( agenciaRetiro == '' ){
           id ='agenciaRetiro';
        }else if ( horaRetiro == '' ){
           id = 'horaRetiro';
        } else if(fechaRetiro == '' ){
           id = 'fechaRetiro' ;
        }else if( agenciaEntrega == '' ){
           id = 'agenciaEntrega';
        }else if ( horaEntrega == '' ){
           id= 'horaEntrega';
        }else if ( fechaEntrega == ''){
           id = 'fechaEntrega';
        }
        
        focusInput(id)
 }      }
     
    

    const focusInput = (id: string) => {
      const inputElement = document.getElementById(id);
      if (inputElement) {
        inputElement.focus();
        setPopup(true)
        setTimeout(() => {
          setPopup(false)
        }, 2000);
      }
    };
  
  return (
    <div className="w-full">
     
      <div className={` Gradient-V p-4 my-6 rounded-xl flex flex-col justify-center mx-auto transition-all duration-200 ease-linear ${onFocus?'h-[200px]':'h-[115px]'}`}>
          <div className={`flex justify-between transition-all duration-300 ease-linear ${onFocus?'h-[45%]':'h-[85%]'}`}>
            <p className="w-[16%] text-white text-[20px] font-semibold self-center text-center">Nueva Reserva</p>
            <div className="w-[50%] h-full relative">
                <div className="w-full h-full relative">
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
                  onFocusRetiro&&<ul className="absolute top-[68px] bg-background rounded-lg border-[1px] border-text z-10 w-full">
                  {agenciaRetiro&&agenciaRetiro.length>2&& opcionesFiltradasRetiro.map((opcion, index) => (
                    <li onClick={()=>{handleChange(setAgenciaRetiro,'agenciaRetiro',opcion.name)}} className="cursor-pointer px-2 py-4 hover:bg-[#F9D8B2] rounded-lg transition-all duration-300 ease-in-out " key={index}>
                      <p>{opcion.name}</p>
                      <div className="flex justify-start text-[12px]">
                        <p className="">{opcion.address} - {opcion.country}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                }
            </div>
            
            <div className=" flex lg:w-[30%] h-[100%] ">
              <input
                className="w-1/2 h-full rounded-l-md px-2"
                type="date"
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
          {onFocus&&<div className={`flex justify-between items-center  transition-all duration-500 ease-linear mt-4 ${onFocus?'scale-y-100 h-[45%]':'scale-y-0 h-0'}`}>
            <button
              onClick={()=>{handleSubmit()}}
              className={`bg-text self-center w-[16%] text-white text-[20px] font-semibold rounded-md h-[70%]`}
              type="submit"
            >
              Seguir
            </button>

            <div className={`w-[50%] relative h-[90%]`}>
                <div className="w-full h-full relative">
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
                  onFocusEntrega&&<ul className="absolute top-[68px] bg-background rounded-lg border-[1px] border-text z-10 w-full">
                  {agenciaEntrega&&agenciaEntrega.length>2&& opcionesFiltradasEntrega.map((opcion, index) => (
                    <li onClick={()=>{handleChange(setAgenciaEntrega,'agenciaEntrega',opcion.name)}} className="cursor-pointer px-2 py-4 hover:bg-[#F9D8B2] rounded-lg transition-all duration-300 ease-in-out" key={index}>
                      <p>{opcion.name}</p>
                      <div className="flex justify-start text-[12px]">
                        <p className="">{opcion.address} - {opcion.country}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                }
            </div>
            <div className={`lg:w-[30%] relative h-[90%]`}>
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
      {popup&&<div className="absolute left-1/4 top-1/4 z-50 w- [50%] p-10 h- [90px] text-center text-2xl font- semibold border-[1px] border-text bg-[#F9D8B2] text-text shadow-lg">Completa los datos de tu reserva para seguir.</div>}
    </div>
  );
};
export default NuevaReserva;
