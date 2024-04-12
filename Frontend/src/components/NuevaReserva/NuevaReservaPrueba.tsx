
import { useAppDispatch, useAppSeletor } from "../../redux/store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

export const NuevaReserva = () => {
  
    const [onFocus, setOnFocus] = useState(false)
    const [filtro, setFiltro] = useState<string>();
    const [dataEntrega, setDataEntrega] = useState(false);
    const navigator = useNavigate();
    const dispatch = useAppDispatch(); //dispatch para mas adelante para guardar los datos de la reserva
    const dataReserve = useAppSeletor(state=>state.dataReserve.dataReserve)//useSelector para recibir los datos de la agencia en el caso de haber seleccionado en la lista de agencias
    const allAgencias = useAppSeletor(state=>state.allAgencias.agencias)
    
    useEffect(() => {
    if(dataReserve.lugar){
      handleChange('agenciasRetiro',dataReserve.lugar)
        console.log()
    }
    }, [dataReserve])
 
   const handleFocus = () =>{
    setTimeout(() => {
      setOnFocus(!onFocus);
    }, 300);
   }
    const handleChange = (name:string, agencia?:string) => {
      const element = document.getElementById(name) as HTMLInputElement | null;
       if (agencia) {
        
        setFiltro(agencia);
      }else if(element){
          setFiltro(element.value);
        }
    }
    const opcionesFiltradas = allAgencias.filter(agencia =>
        agencia.name.toLowerCase().includes(filtro?filtro.toLowerCase():'')
      );
  
  return (
    <div className="w-full">
      <div className=" Gradient-V min-h-[129px] max-h-[244px] p-5 my-6 rounded-xl lg:w-[85%] md:w-[90%] flex flex-col mx-auto ">
          <div className="flex justify-between h-[45%] mb-4">
            <p className="w-[16%] text-white text-[20px] font-semibold self-center ">Nueva Reserva</p>
            <div className="w-[50%] h-[70px] relative">
                <div className="w-full h-[70px] relative">
                    <input
                      className="w-full h-full rounded-md p-4 font-sans text-text "
                      type="text"
                      name="agenciaRetiro"
                      id="agenciaRetiro"
                      value={filtro}
                      onBlur={handleFocus}
                      onFocus={handleFocus}
                      onChange={()=>{handleChange('agenciaRetiro')}}
                      placeholder={'Ingresá la agencia de retirada (ej. Bariloche, Buenos Aires)'}
                    />
                    <FaLocationDot className="absolute bottom-[1.5rem] right-[1rem] w-[19px] h-[26px] text-text"/>
                </div>
                  {
                  onFocus&&<ul className="absolute top-[68px] bg-background rounded-lg border-2 border-text">
                  {filtro?.length&&filtro.length>2&& opcionesFiltradas.map((opcion, index) => (
                    <li onClick={()=>{handleChange('agenciasRetiro',opcion.name)}} className="cursor-pointer p-2" key={index}>{opcion.name}</li>
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
              />

              <input
                className="w-1/2 h-full text-text rounded-r-md border-l-2 border-text px-2"
                type="time"
                placeholder="Hora de Retiro"
                
              />
            </div>
          </div>
          {dataEntrega&&<div className="flex justify-between h-[45%]">
            <button
              onClick={()=>{navigator("/categoriasDeVehiculos/seleciona")}}
              className="bg-black h-[62px]  self-center w-[16%] text-white text-[20px] font-semibold rounded-md "
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
                      value={filtro}
                      onBlur={handleFocus}
                      onFocus={handleFocus}
                      onChange={()=>{handleChange('agenciaEntrega')}}
                      placeholder="Ingresá la agencia de entrega (ej. Bariloche, Buenos Aires)"
                    />
                    <FaLocationDot className="absolute bottom-[1.5rem] right-[1rem] w-[19px] h-[26px] text-text"/>
                </div>
                  {
                  onFocus&&<ul className="absolute top-[68px] bg-background rounded-lg border-2 border-text">
                  {filtro.length>2&& opcionesFiltradas.map((opcion, index) => (
                    <li onClick={()=>{handleChange('agenciasRetiro',opcion.name)}} className="cursor-pointer p-2" key={index}>{opcion.name}</li>
                  ))}
                </ul>
                }
            </div>
            <div className=" flex lg:w-[30%] h-[70px] ">
              <input
                className="w-1/2 h-full rounded-l-md px-2"
                type="date"
                name="fechaEntrega"
                placeholder="Fecha de Entrega"
              />

              <input
                className="w-1/2 h-full text-text rounded-r-md border-l-2 border-text px-2"
                type="time"
                placeholder="Hora de Entrega"
                
              />
            </div>

          </div>}
      </div>
    </div>
  );
};
export default NuevaReserva;
