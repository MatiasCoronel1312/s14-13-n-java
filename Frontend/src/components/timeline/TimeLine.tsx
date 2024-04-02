import { useState } from "react";

 const TimeLine = () => {
  const [stage, setStage] = useState<number>(1)
  const stageUno = (num:number=0) =>{
    setStage(num)
  }
  return (
    <div className="container">
      <div className="containerTimeLine">
        <div className="containerLine">
          <div onClick={()=>{stageUno(1)}} className={`circulos ${stage>=1&&'circulo_activo'}`}>

          </div>
          <div className={`lineas ${stage>=1&&'linea_activa'}`}></div>
          <div onClick={()=>{stageUno(2)}} className={`circulos ${stage>=1&&'circulo_activo'}`}>
            {stage==1&&<div className="circulo_interno"></div>}
          </div>
          <div className={`lineas ${stage>=2&&'linea_activa'}`}></div>
          <div onClick={()=>{stageUno(3)}} className={`circulos ${stage>=2&&'circulo_activo'}`}>
             {stage<=2&&<div className="circulo_interno"></div>}
          </div>
          <div className={`lineas ${stage>=3&&'linea_activa'}`}></div>
          <div onClick={()=>{stageUno(4)}} className={`circulos ${stage>=3&&'circulo_activo'}`}>
             {stage<=3&&<div className="circulo_interno"></div>}
          </div>
        </div>
        <div className="containerTitle">
          <div onClick={()=>{stageUno(1)}} className={`title ${stage==1&&'title_activo'}`}>Local, fecha y hora de reserva</div>
          <div onClick={()=>{stageUno(2)}} className={`title ${stage==2&&'title_activo'}`}>Categorías de vehículos</div>
          <div onClick={()=>{stageUno(3)}} className={`title ${stage==3&&'title_activo'}`}>Cargos y adicionales</div>
          <div onClick={()=>{stageUno(4)}} className={`title ${stage==4&&'title_activo'}`}>Datos de registro</div>
        </div>
      </div>
    </div>
  )
}
export default TimeLine;