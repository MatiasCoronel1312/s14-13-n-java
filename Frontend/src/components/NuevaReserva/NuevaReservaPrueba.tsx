
import { useAppDispatch, useAppSeletor } from "../../redux/store";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { postReserve } from "../../redux/reserveSlice";

export const NuevaReserva = () => {
  
    const [onFocusEntrega, setOnFocusEntrega] = useState(false)
    const [onFocusRetiro, setOnFocusRetiro] = useState(false)
    const [agenciaRetiro, setAgenciaRetiro] = useState<string>('');
    //const [idAgenciaRetiro, setIdAgenciaRetiro] = useState<number>();
    const idAgenciaRetiro = useRef<number>()
    const [fechaRetiro, setFechaRetiro] = useState<string>('');
    const [horaRetiro, setHoraRetiro] = useState<string>('');
    const [agenciaEntrega, setAgenciaEntrega] = useState<string>('');
    //const [idAgenciaEntrega, setIdAgenciaEntrega] = useState<number>();
    const idAgenciaEntrega = useRef<number>()
    const [fechaEntrega, setFechaEntrega] = useState<string>('');
    const [horaEntrega, setHoraEntrega] = useState<string>('');
    const [onFocus, setOnFocus] = useState(false);
    const [popup, setPopup] = useState(false);
    const [errorAgence, setErrorAgence] = useState(false)
    const navigator = useNavigate();
    const dispatch = useAppDispatch(); //dispatch para mas adelante para guardar los datos de la reserva
    const dataReserve = useAppSeletor(state=>state.dataReserve.dataReserve)//useSelector para recibir los datos de la agencia en el caso de haber seleccionado en la lista de agencias
    const allAgencias = useAppSeletor(state=>state.allAgencias.agencias)
    
    useEffect(() => {
    if(dataReserve?.idLugarRetiro){
      let agencia = allAgencias.find((agen)=>agen.id==dataReserve.idLugarRetiro)
      idAgenciaRetiro.current = agencia?.id      
      handleChange(setAgenciaRetiro,'agenciaRetiro',agencia?.name)
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
        let agenRetiro = allAgencias.find((agencia)=>agencia.name===agenciaRetiro);
        let agenEntrega = allAgencias.find((agencia)=>agencia.name===agenciaEntrega);
        if(agenRetiro && agenEntrega){
          idAgenciaRetiro.current = agenRetiro.id
          idAgenciaEntrega.current = agenEntrega.id
          dispatch(postReserve({
            lugarEntrega: agenciaEntrega,
            idLugarEntrega: idAgenciaEntrega.current,
            lugarRetiro: agenciaRetiro,
            idLugarRetiro: idAgenciaRetiro.current,
            fechaEntrega: fechaEntrega,
            fechaRetiro: fechaRetiro,
            horaEntrega: horaRetiro,
            horaRetiro: horaEntrega,
          }))
          navigator("/categoriasDeVehiculos/seleciona")
        }else{
            setErrorAgence(true)
            setTimeout(() => {
              setErrorAgence(false)
            }, 2000);
        }
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
      }}
     

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
     
      <div className={` Gradient-V p-4 my-6 rounded-xl flex flex-col justify-center mx-auto transition-all duration-200 ease-linear }`}>
          <div className={`flex flex-col md:flex-row justify-between transition-all duration-300 ease-linear h-[25 0px] md:h-[70px]`}>
            <p className="w-full md:w-[16%] text-white text-[16px] md:text-[20px] font-semibold md:self-center text-center">Nueva Reserva</p>
            <div className="md:w-[45%] lg:w-[50%] h-[70px] md:h-full relative">
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
            
            <div className=" flex md:w-[35%] lg:w-[30%] h-[70px] md:h-[100%] mt-5 md:mt-0">
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
          {onFocus&&<div className={`flex z-20 flex-col md:flex-row w-full md:justify-between items-center  transition-all duration-500 ease-linear mt-4 ${onFocus?'scale-y-100 md:h-[70px]':'scale-y-0 h-0'}`}>
            <button
              onClick={()=>{handleSubmit()}}
              className={`bg-text self-center w-[90%] md:w-[16%] text-white text-[20px] font-semibold rounded-md h-[70%] order-3 md:order-none`}
              type="submit"
            >
              Seguir
            </button>

            <div className={`w-full md:w-[45%] lg:w-[50%] relative h-[70px] md:h-full order-1 md:order-none`}>
                <div className="w-full h-[70px] md:h-full relative">
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
                  onFocusEntrega&&<ul className="absolute top-[68px] bg-background rounded-lg border-[1px] border-text z-[53] w-full">
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
            <div className={`flex w-full md:w-[35%] my-5 md:my-0 lg:w-[30%] relative h-[70px] md:h-full order-2 md:order-none`}>
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
      {popup&&<div className="absolute left-1/4 top-1/4 z-[55] w- [40%] p-5 text-center text-xl font- semibold border-[1px] border-[#707070] bg-[#F9D8B2] text-text shadow-lg">Completa los datos de tu reserva para seguir.</div>}
      {errorAgence&&<div className="absolute left-1/4 top-1/4 z-[55] w- [40%] p-5 text-center text-xl font- semibold border-[1px] border-[#707070] bg-[#ffffff] text-accent shadow-lg">Nombre de agencia incorrecta.</div>}
    </div>
  );
};
export default NuevaReserva;
