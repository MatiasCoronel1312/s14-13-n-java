
// import { DestinationBestTime, DestinationInfo, DestinationTipExtra, DestinationUbication } from "./destination.interface";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { DataDestination } from "../DestinosCard/DataDestination.interface";
import { useAppSeletor } from "../../redux/store";

const SummaryBooking = () => {
  const todoLugares = useAppSeletor((state) => state.allDestinos.destinations) 
  const navigator = useNavigate();
  const [lugar, setLugar] = useState<DataDestination>();
  //const [todoLugares, setLugares] = useState<DataDestination[]>([]);
  const params = useParams();
  const indiceAleatorio1 = Math.floor(Math.random() * (todoLugares.length));
  const indiceAleatorio2 =  (indiceAleatorio1 < todoLugares.length -1  && indiceAleatorio1 > 1 ) ? indiceAleatorio1 + 1: indiceAleatorio1 - 1;
  const lugar1 = todoLugares[indiceAleatorio1];
  const lugar2 = todoLugares[indiceAleatorio2 < 0 ? 0 : indiceAleatorio2] ;

  useEffect(() => {
      const destinationD = todoLugares.find((lugares) => lugares.id == parseInt(params.id ?? "1"));
      setLugar(destinationD);

}, []);

  useEffect(() => {

     scrollTop();

}, []);
   //console.log(lugar1,lugar2);
   console.log(indiceAleatorio1,indiceAleatorio2);
   
  const handleClick = (id: number | undefined) => {
    navigator(`/DestinationDetail/${id}`)
    scrollTop();
  }
   const scrollTop = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
   }
  return (
    
    <div>
        <div className="w-[1170px] h-[308px]">
          {/* <div className=" w-[1174px] h-[31px] border-b-[1.5px] border-[#8F8F8F] ml-24 ">
            <p className="text-primary text-[14px] fontFamily-mono ">Home/Tips De Viajes/{lugar?.city}</p>
          </div> */}

          <p className="text-primary text-[36px] fontFamily-mono font-bold text-center pt-12 pb-2"> Tips de Viajes</p>
          <p className="text-text text-[32px] fontFamily-mono text-center ">Vení a inspirarte para tu próximo destino</p>
          <p className="text-black text-[32px] fontFamily-mono text-center pb-8">{lugar?.city} </p>

          <button className="pl-3" onClick={()=>{ navigator("/tipsTuristicos")}}><FaArrowCircleLeft className="text-[#B81C00]"/></button>
        <span className="text-text text-[20px] fontFamily-mono font-bold ml-3">{lugar?.title} </span>
        </div>
        
        <img src={lugar?.images[0]}  className=" w-[1440px] h-[392px] "/>
        

        <div className="w-[1170px] h-[1010px]">
            <div className="flex ">
                <div className="flex flex-col  bg-[#F5F5F5] w-[661px] h-[1010px] pt-8 pl-7">

                    <p className="text-black text-[14px] fontFamily-mono font-bold w-[659px] h-[45px] ">
                       {lugar?.subtitle}
                    </p>

                    <p className="text-[#EF2A06] text-[16px] fontFamily-mono font-bold pt-9"> {lugar?.locationTitle}</p>

                     {/* Card 1 */}
                    <div className="flex pt-2">
                      <div className="w-[280px] h-[171px]">
                        <img src={lugar?.images[1]} alt="" className="" />
                      </div>
                      <div className="pl-2 w-[657px] h-[205px]">
                          <p className="text-[16px] fontFamily-mono  object-right" >

                             {lugar?.location}
                           </p>
                      </div>
                    </div>

                     {/* Card 2 */}
                     <p className="text-[#EF2A06] text-[16px] fontFamily-mono font-bold pt-10">{lugar?.highSeasonTitle}</p>
                    <div className="flex pt-3">
                    
                      <div className="w-[1180px] h-[90px]">
                        {lugar?.highSeason}
                      </div>
                      <div className="pl-2 w-[657px] h-[200px]">

                         <img src={lugar?.images[2]} alt="" className="" />
                      </div>
                    </div>

                     {/* Card 3 */}

                     <p className="text-[#EF2A06] text-[16px] fontFamily-mono font-bold pt-2">{lugar?.celebrationsTitle}</p>

                     <div className="flex pt-3">
                      <div className="w-[280px] h-[171px]">
                        <img src={lugar?.images[3]} alt="" className="" />
                      </div>
                      <div className="pl-2 w-[657px] h-[205px]">
                          <p className="text-[16px] fontFamily-mono  object-right" >
                             {lugar?.celebrations}
                           </p>
                      </div>
                    </div>

                </div>

                <div className="flex flex-col ms-28">

                 <div className="w-[455px] h-[339px] bg-[#FFDDD7] mt-12">

                    <p className="pt-9 text-[20px] fontFamily-mono font-bold text-center ">¡Alquila un vehículo ahora!</p>

                    <p className="pt-9 text-[16px] fontFamily-mono w-[401px] h-[36px] ml-7">Para ayudarte en tu viaje, GoCar pensó en condiciones especiales para ti.</p>
                   
                    <p className="pt-14 mt-6 text-[16px] fontFamily-mono w-[401px] h-[36px] ml-7">¡Aprovecha nuestras ofertas por tiempo limitado y vive experiencias increíbles!</p>
                  
                    <div className="flex justify-center   ">
                        <Link to="/Login" className="flex mt-16 Gradient-V w-[210px] h-[62px] rounded-[8px] text-center cursor-pointer hover:bg-primary ">
                              <div className="text-primary text-[20px] pt-[17px] z-10 bg-[#FFDDD7] m-auto w-[208px] h-[60px] Gradient-V_hover transition-all duration-300 ease-in-out  rounded-[8px] cursor-pointer hover:text-primary">
                                  RESERVA YA
                              </div>
                      </Link>   
                    </div>
                 
                 </div>
                 <div className="w-[455px] h-[339px] bg-[#FFDDD7] mt-12 ">

              
                    <p className="pt-9 text-[16px] fontFamily-mono font-bold w-[401px] h-[36px] text-center">Consulta también otros destinos</p>
        
                   <div className="flex justify-center pt-14">
                      <button onClick={()=> {handleClick(lugar1?.id)}} className="w-[381px] h-[53px] bg-[#FF8C00] pt-3  rounded-[10px] text-[#F5F5F5] ">
                          <p className="float-left ml-4 mr-14 text-[20px] fontFamily-mono mb-4 text-center"> {lugar1?.title}</p>

                        </button>
                   </div>
                 
                   <div className="flex justify-center pt-14">
                      <button onClick={()=> {handleClick(lugar2?.id)}} className="w-[381px] h-[53px] bg-[#FF8C00] pt-3  rounded-[10px] text-[#F5F5F5] ">
                          <p className="float-left ml-4 mr-8 text-[20px] fontFamily-mono mb-4 text-center"> {lugar2?.title}</p>

                        </button>
                   </div>

                   <div className="flex justify-center pt-7">
                      <a onClick={()=>{ navigator("/tipsTuristicos")}} className="text-[#B81C00] text-[14px] fontFamily-mono underline cursor-pointer">
                        Consultar todos los destinos
                      </a>
                   </div>

                 </div>

                </div>
            </div>
        </div>

    </div>
 
    
       
    

  )
}
export default SummaryBooking;