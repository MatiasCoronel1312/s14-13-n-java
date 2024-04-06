import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

 const TimeLine = () => {
  const [stage, setStage] = useState<number>(1);
  const circulos:string = 'rounded-full border-[4px] border-[#8F8F8F] w-[34px] transition-all duration-1000 ease-in-out h-[34px] flex justify-center items-center cursor-pointer';
  const lineas:string = ' border-[3px] border-[#8F8F8F] w-[200px] h-0 transition-all duration-1000 ease-in-out';
  const circulo_interno:string = 'rounded-full border-[3px] bg-[#F8C381] w-[27px] h-[27px] transition-all duration-1000 ease-in-out';
  const circulo_activo:string = 'rounded-full border-[4px] border-secondary Gradient-T ';
  const linea_activa:string = ' border-secondary';
  const title:string = 'text-center text-[20px] w-[25%] cursor-pointer transition-all duration-1000 ease-in-out';
  const stageUno = (num:number=0):void =>{
    setStage(num)
  }
  return (
    <div className="flex justify-center pt-5">
      <div className="border-[1px] border-black w-[900px] h-[134px] flex flex-col items-center justify-around">
        <div className="flex justify-around items-center h-[34px] w-[736px]">
          <div onClick={()=>{stageUno(1)}} className={`${circulos} ${stage>=1&&circulo_activo}`}>
          {stage>=1&&<FaCheck className="text-[#F8C381]"/>}
          </div>
          <div className={`${lineas} ${stage>=1&&linea_activa}`}></div>
          <div onClick={()=>{stageUno(2)}} className={`${circulos} ${stage>=1&&circulo_activo}`}>
            {stage<=1?<div className={circulo_interno}></div>:<FaCheck className="text-[#F8C381] transition-all duration-1000 ease-in-out"/>}

          </div>
          <div className={`${lineas} ${stage>=2&&linea_activa}`}></div>
          <div onClick={()=>{stageUno(3)}} className={`${circulos} ${stage>=2&&circulo_activo}`}>
          {stage<=2?<div className={circulo_interno}></div>:<FaCheck className="text-[#F8C381] transition-all duration-1000 ease-in-out"/>}
          </div>
          <div className={`${lineas} ${stage>=3&&linea_activa}`}></div>
          <div onClick={()=>{stageUno(4)}} className={`${circulos} ${stage>=3&&circulo_activo}`}>
          {stage<=3?<div className={circulo_interno}></div>:<FaCheck className="text-[#F8C381] transition-all duration-1000 ease-in-out"/>}
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div onClick={()=>{stageUno(1)}} className={`${title} ${stage==1?'text-[#C26A00]':'text-text'}`}>Local, fecha y hora de reserva</div>
          <div onClick={()=>{stageUno(2)}} className={`${title} ${stage==2?'text-[#C26A00]':'text-text'}`}>Categorías de vehículos</div>
          <div onClick={()=>{stageUno(3)}} className={`${title} ${stage==3?'text-[#C26A00]':'text-text'}`}>Cargos y adicionales</div>
          <div onClick={()=>{stageUno(4)}} className={`${title} ${stage==4?'text-[#C26A00]':'text-text'}`}>Datos de registro</div>
        </div>
      </div>
    </div>
  )
}
export default TimeLine;