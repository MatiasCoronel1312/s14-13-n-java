import NuevaReservaPrueba from "../components/NuevaReserva/NuevaReservaPrueba";
import { FaPlane } from "react-icons/fa6";
import { useAppDispatch, useAppSeletor } from "../redux/store";
import { postReserve } from "../redux/reserveSlice";

const RedDeAgencias = () => {
  const dispatch = useAppDispatch();
  const allAgencias = useAppSeletor((state) => state.allAgencias.agencias);

  const handleReserve = (id:number) =>{
    dispatch(postReserve({idLugarRetiro: id}))

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const airplane = (name: string) => {
    if (name.includes("Aeropuerto")) {
      return <FaPlane className="h-[35px] w-[35px]" />;
    } else {
      return <></>;
    }
  };

  return (

    <div className='w-full bg-background flex  justify-center'>
      <div className="lg:w-[85%] w-[90%] h-full flex flex-col item-center">
          <NuevaReservaPrueba />
          <div className="flex items-center flex-col">
          <div className="text-accent text-[32px] text-center font-semibold my-5">Red de Agencias</div>
          <div className="text-text text-[22px] text-left w-full font-semibold mb-3">Encontrá la agencia más cercana:</div>
          <div className="w-full rounded-[10px] my-10">
            {
              allAgencias.map((agencia, index)=>
                <div key={agencia.id} className={`text-text w-full gap-1 md h-48 md:h-28 bg-[#${index%2===0?'F8C381':'background'}] flex justify-between`}>
                  <div className="flex justify-center items-center h-full w-20 md:w-28 ">{airplane(agencia.name)}</div>
                  <div className="h-full flex flex-col justify-evenly w-[25%]">
                    <div className="font-semibold text-[14px] md:text-[16px]">{agencia.country}</div>
                    <div className="text-[14px] md:text-[18px]">{agencia.name}</div>
                  </div>
                  <div className="h-full flex flex-col justify-evenly w-[35%]">
                    <div>
                      <div className="font-semibold text-[14px]">Direccion:</div>
                      <div className="text-[12px] md:text-[14px]">{agencia.address}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-[14px]">Horario:</div>
                      <div className="text-[12px] md:text-[14px]">Atencion las 24hs.</div>
                    </div>
                  </div>
                  <div className="h-full flex flex-col justify-evenly w-[30%]">
                    <div>
                      <div className="font-semibold text-[14px]">Telefono:</div>
                      <div className="text-[12px] md:text-[14px]">{agencia.phone}</div>
                    </div>
                    <div>
                      <button onClick={()=>{handleReserve(agencia.id)}} className="Gradient-H_hover border-2 border-accent text-accent hover:text-black hover:border-none w-3/4 p-1 rounded-lg text-[12px] md:text-[14px]">Seleccionar agencia</button>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
          </div> 
      </div>
    </div> 
  )
}
export default RedDeAgencias;
