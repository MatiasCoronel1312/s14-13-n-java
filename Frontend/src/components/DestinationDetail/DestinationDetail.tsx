
// import { DestinationBestTime, DestinationInfo, DestinationTipExtra, DestinationUbication } from "./destination.interface";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

import { useAppSeletor } from "../../redux/store";
import NuevaReservaPrueba from "../NuevaReserva/NuevaReservaPrueba";

const SummaryBooking = () => {
  const todoLugares = useAppSeletor((state) => state.allDestinos.destinations) 
  const navigator = useNavigate();
  //const [todoLugares, setLugares] = useState<DataDestination[]>([]);
  const params = useParams();
  const indiceAleatorio1 = Math.floor(Math.random() * (todoLugares.length));
  const indiceAleatorio2 =  (indiceAleatorio1 < todoLugares.length -1  && indiceAleatorio1 > 1 ) ? indiceAleatorio1 + 1: indiceAleatorio1 - 1;
  const lugar1 = todoLugares[indiceAleatorio1];
  const lugar2 = todoLugares[indiceAleatorio2 < 0 ? 0 : indiceAleatorio2] ;

  
      const lugar = todoLugares.find((lugares) => lugares.id == parseInt(params.id ?? "1"));
  
      console.log(lugar);
      


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
    
    <div className="lg:w-[85%] md:w-[90%] flex flex-col justify-center">
        <div className="w-full h-[308px] ">
            <NuevaReservaPrueba/>

          <p className="text-primary text-[36px] fontFamily-mono font-bold text-center pt-8 pb-2"> Tips de Viajes</p>
          <p className="text-text text-[32px] fontFamily-mono text-center ">Vení a inspirarte para tu próximo destino</p>
          <p className="text-black text-[32px] fontFamily-mono text-center pb-8">{lugar?.city} </p>

          <button className="pl-3" onClick={()=>{ navigator("/tipsTuristicos")}}><FaArrowCircleLeft className="text-[#B81C00]"/></button>
        <span className="text-text text-[20px] fontFamily-mono font-bold ml-3">{lugar?.title} </span>
        </div>
        <div className="pt-28">
          <img src={lugar?.images[0]}  className=" w-[1440px] h-[392px] "/>
        </div>
        
        

        <div className="w-full h-[1010px]">
            <div className="flex ">
                <div className="flex flex-col  bg-[#F5F5F5] w-[661px] h-[1010px] pt-8 pl-7">

                    <p className="text-black text-[14px] fontFamily-mono font-bold w-[659px] h-[45px] ">
                       {lugar?.subtitle}
                    </p>

                    <p className="text-primary text-[16px] fontFamily-mono font-bold pt-9"> {lugar?.locationTitle}</p>

                     {/* Card 1 */}
                    <div className="flex pt-2">
                      <div className="w-[280px] h-[171px]">
                        <img src={lugar?.images[1]} alt="" className="" />
                      </div>
                      <div className="pl-2 w-[657px] h-[198px]">
                          <p className="text-[16px] fontFamily-mono  object-right" >

                             {lugar?.location}
                           </p>
                      </div>
                    </div>

                     {/* Card 2 */}
                     <p className="text-primary text-[16px] fontFamily-mono font-bold pt-8">{lugar?.highSeasonTitle}</p>
                    <div className="flex pt-3">
                    
                      <div className="w-[1180px] h-[90px]">
                        {lugar?.highSeason}
                      </div>
                      <div className="pl-2 w-[657px] h-[200px]">

                         <img src={lugar?.images[2]} alt="" className="" />
                      </div>
                    </div>

                     {/* Card 3 */}

                     <p className="text-primary text-[16px] fontFamily-mono font-bold pt-4">{lugar?.celebrationsTitle}</p>

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

                <div className="flex flex-col ms-10">

                 <div className="w-[455px] h-[339px] bg-[#FFDDD7] mt-12">

                    <p className="pt-9 text-[20px] fontFamily-mono font-bold text-center ">¡Alquila un vehículo ahora!</p>

                    <p className="pt-9 text-[16px] fontFamily-mono w-[401px] h-[36px] ml-7">Para ayudarte en tu viaje, GoCar pensó en condiciones especiales para ti.</p>
                   
                    <p className="pt-14 mt-6 text-[16px] fontFamily-mono w-[401px] h-[36px] ml-7">¡Aprovecha nuestras ofertas por tiempo limitado y vive experiencias increíbles!</p>
                  
                    <div className="flex justify-center   ">
                        <Link to="/categoriasDeVehiculos/:destino" className="flex mt-16 Gradient-T w-[210px] h-[62px] rounded-[8px] text-center cursor-pointer hover:bg-primary ">
                              <div className="text-background text-[20px] pt-[17px] z-10 Gradient-T m-auto w-[208px] h-[60px] Gradient-T_hover transition-all duration-300 ease-in-out  rounded-[8px] cursor-pointer hover:text-background">
                                  RESERVA YA
                              </div>
                        </Link>   
                    </div>
                 
                 </div>
                 <div className="w-[455px] h-[339px] bg-[#FFDDD7] mt-12 ">

              
                    <p className="pt-9 text-[16px] fontFamily-mono font-bold w-[401px] h-[36px] text-center">Consulta también otros destinos</p>
        
                   <div className="flex justify-center pt-6">
                     <div className="flex mt-9 Gradient-H w-[400px] h-[64px] rounded-[8px] text-center cursor-pointer hover:bg-primary">
                        <button onClick={()=> {handleClick(lugar1?.id)}} className="text-primary text-[20px]  z-10 bg-[#FFDDD7] m-auto w-[398px] h-[62px] Gradient-H_hover transition-all duration-300 ease-in-out  rounded-[8px] cursor-pointer hover:text-[#FFDDD7]">
                          {lugar1?.title}
                        </button>
                     </div>
                   </div>
                 
                   <div className="flex justify-center pt-2">
                     <div className="flex mt-9 Gradient-H w-[400px] h-[64px] rounded-[8px] text-center cursor-pointer hover:bg-primary">
                        <button onClick={()=> {handleClick(lugar2?.id)}} className="text-primary text-[20px]  z-10 bg-[#FFDDD7] m-auto w-[398px] h-[62px] Gradient-H_hover transition-all duration-300 ease-in-out  rounded-[8px] cursor-pointer hover:text-[#FFDDD7]">
                          {lugar2?.title}
                        </button>
                     </div>
                
                   </div>

                   <div className="flex justify-center pt-7">
                      <a onClick={()=>{ navigator("/tipsTuristicos")}} className="text-primary text-[14px] fontFamily-mono underline cursor-pointer">
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