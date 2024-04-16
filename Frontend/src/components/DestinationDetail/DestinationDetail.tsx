import { FaArrowCircleLeft } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { DestinationBestTime, DestinationInfo, DestinationTipExtra, DestinationUbication } from "./destination.interface";


const SummaryBooking = () => {

  const destinationInfo : DestinationInfo = {
    imgDestination: "src/assets/DestinationDetail/VillaGeneralBelgrano.jpg",
    nameDestination: "Villa General Belgrano",
    province: ["Córdoba"],
    description: "Villa General Belgrano queda en la provincia de Córdoba y tiene una gran diversidad cultural, incluyendo los arcos en Villa General Belgrano. ¡Vení con nosotros a descubrir qué hacer en esta ciudad encantadora!",
  }

  const destinationUbication : DestinationUbication = {
    imgDUbication: "src/assets/DestinationDetail/generalBelgrano1.jpg",
    distance: "A menos de dos horas desde la capital de Córdoba la mejor opción es ir por la autopista en el vehículo que mejor se adapte a vos",
    imgDUbication2: "src/assets/DestinationDetail/generalBelgrano2.jpg",
  }

  const destinationBestTime : DestinationBestTime = {
     description: " tiene 300 días de sol durante el año, en todo momento es excelente para visitar la pintoresca ciudad, te encantará. El pueblo cuenta con cuatro principales fiestas tradicionales:",
     itemParties: ["Para aprovechar el clima ameno de otoño, la Fiesta de la Masa Vienesa sucede en abril, en Semana Santa.",
     "Para a quien le gusta el invierno, en julio sucede el Festival de Chocolate Alpino.",
     "Recibiendo la primavera de brazos abiertos, en Octubre la ciudad celebra la Fiesta Nacional de la Cerveza,una de las tres mayores Oktoberfest del mundo."
     ],
    
    imgMejorEpoca: "src/assets/DestinationDetail/generalBelgrano3.jpg",
     nameParties: ["Fiesta de la Massa Vienesa","Fiesta de Chocolate Alpino","Oktoberfest: La Fiesta Nacional de la Cerveza"],
     descriptionParties: ["La fiesta es una antigua tradición en la ciudad, durante la Semana Santa.Los turistas que están en Villa General Belgrano, durante las celebraciones, podrán aprovechar: actividades litúrgicas, muchos bailes, presentaciones artísticas y hasta un tour gastronómico probando dulces de la región.",
       "¿Qué tal aprovechar la época más fría del año para degustar chocolates de todos los tipos, acompañados de dulces europeos? La fiesta tradicional de Villa General Belgrano fue introducida en la ciudad por los residentes inmigrantes de países como Alemania, Italia, Suiza y Austria. La cultura centroeuropea es fuerte por allá, pero no solamente eso. Durante la fiesta, los visitantes pueden ver presentaciones folclóricas, latinoamericanas y mucho jazz.",
       "Es una de las tres mayores Oktoberfest del mundo! La fiesta recibe turistas de diversas ciudades y países, cuenta con más de 20 tipos de cervezas artesanales.Para probar que Villa General Belgrano es un pedacito de Alemania en Argentina, al pedir una cerveza, aseguráte que tu bebida sea servida junto a un frasco de maní como acompañamiento. Esa es una fuerte tradición alemana.Además de las variedades de cervezas, el público puede ver los shows y muchas presentaciones artísticas."
     ],
 }

 const destinationTipExtra : DestinationTipExtra ={
    imgTipExtra: "src/assets/DestinationDetail/generalBelgrano4.jpg",
    description: " tiene además de la arquitectura europea,las maravillosas cervezas artesanales, los increíbles restaurantes y de gente re acogedora.",
    tipsDestination: ["Parque acuático en la Villa General Belgrano: Aventura y diversión en la medida adecuada para los niños.", 
                       "Caminatas guiadas por la sierra de la ciudad: Para todos los niveles de caminatas."],
  }
  return (
    <div className="w-[1170px] h-[2718px]">
        <div className=" w-[1174px] h-[31px] border-b-[1.5px] border-[#8F8F8F] ">
            <p className="text-primary text-[14px] fontFamily-mono">Home/Tips De Viajes/{destinationInfo.nameDestination}</p>
        </div>
        
        <p className="text-[#B81C00] text-[36px] fontFamily-mono font-bold text-center pt-12 pb-2"> Tips de Viajes</p>
        <p className="text-text text-[32px] fontFamily-mono text-center pb-20">Vení a inspirarte para tu próximo destino</p>

        <button><FaArrowCircleLeft className="text-[#B81C00]"/></button>
        <span className="text-text text-[20px] fontFamily-mono font-bold ml-2">{destinationInfo.nameDestination}: ¿Qué hacer en esta ciudad encantadora? </span>
    
         
        <img src={destinationInfo.imgDestination}  className="pt-3 w-[1440px] h-[392px] "/>
        
        <div className="flex ">
             <div className="flex flex-col  bg-[#F5F5F5] w-[661px] h-[1959px] pt-8 ">
                  <p className="text-black text-[14px] fontFamily-mono font-bold w-[659px] h-[45px] ">
                      {destinationInfo.description}
                  </p>

                  <p className="text-[#EF2A06] text-[16px] fontFamily-mono font-bold pt-6">¿Cómo llegar a {destinationInfo.nameDestination}?</p>
                  
                  <img className="pt-3 w-[280px] h-[171px]" src={destinationUbication.imgDUbication} />

                  <p className="pt-3 text-[14px] fontFamily-mono w-[659px] h-[45px]">
                    <span className="font-bold">
                    {destinationUbication.distance}
                    </span>
                      . Por ejemplo, alquilando un auto, vos tendrás la facilidad de movilizarte  
                      por toda la ciudad descubiendo y visitando lugares con mayor seguridad y comodidad.
                  </p>
                  
                  <p className="mt-12 text-[14px] fontFamily-mono w-[659px] h-[45px]">
                     ¿<span className="font-bold">{destinationInfo.nameDestination}</span> ya está en tus planes? Entonces aprovechá para reservar tu auto y viví la experiencia completa. 
                     Si ahora, esa bella ciudad, encantadora y acogedora, aún no está en tus planes, 
                     revisá aquí todos los tips y ¡Enamorate!
                  </p>

                  <img className="pt-10 w-[280px] h-[200px]" src={destinationUbication.imgDUbication2} />

                  <p className="text-[#EF2A06] text-[16px] fontFamily-mono font-bold pt-6">¿Cuál es la mejor época del año para visitar {destinationInfo.nameDestination}?</p>
                  
                  <p className="pt-3 text-[14px] fontFamily-mono w-[661px] h-[150px]">
                  {destinationInfo.nameDestination} {destinationBestTime.description}

                    <ul className="list-disc ml-4 pl-4">
                            <li>{destinationBestTime.itemParties[0]}</li>
                            <li>{destinationBestTime.itemParties[1]}</li>
                            <li>{destinationBestTime.itemParties[2]}</li>
                            <li>Y, para cerrar el año, recibiendo el verano con mucha celebración en familia, en diciembre los visitantes 
                                pueden disfrutar de la Feria de Navidad, con músicas típicas del lugar.</li>
                    </ul> 
                  </p>

                  <br/>
                  <img className="pt-10 w-[280px] h-[171px]" src={destinationBestTime.imgMejorEpoca} />

                  <p className="text-[#EF2A06] text-[14px] fontFamily-mono font-bold pt-6">{destinationBestTime.nameParties[0]}</p>
                     
                  <p className="text-[14px] fontFamily-mono pt-3 w-[513px] h-[60px]">{destinationBestTime.descriptionParties[0]}</p>

                  <p className="text-[#EF2A06] text-[14px] fontFamily-mono font-bold mt-12">{destinationBestTime.nameParties[1]}</p>

                  <p className="text-[14px] fontFamily-mono pt-3 w-[637px] h-[90px]">{destinationBestTime.descriptionParties[1]}</p>

                  <p className="text-[#EF2A06] text-[14px] fontFamily-mono font-bold mt-10">{destinationBestTime.nameParties[2]}</p>

                  <p className="text-[14px] fontFamily-mono pt-3 w-[498px] h-[120px]">{destinationBestTime.descriptionParties[2]}</p>

                  <p className="text-[#EF2A06] text-[16px] fontFamily-mono font-bold pt-14">Tip extra: ¡El plan que nadie te cuenta!</p>

                  <img className="pt-3 w-[280px] h-[171px]" src={destinationTipExtra.imgTipExtra} />

                  <p className="pt-3 text-[14px] fontFamily-mono w-[661px] h-[240px]">
                    Para cerrar este resumen de tips sobre qué hacer en esta encantadora ciudad, traemos una ruta llena 
                    de descubrimientos para vos. {destinationInfo.nameDestination} {destinationTipExtra.description}
                     <br/>
                            
                    La ciudad también gana los corazones aventureros. Mirá otros tips imperdibles:
                    <ul className="list-disc ml-7">
                        <li>{destinationTipExtra.tipsDestination[0]}</li>
                        <li>{destinationTipExtra.tipsDestination[1]} </li>
                    </ul>

                    <br/>
                    ¿Vamos a vivir esa aventura juntos?
                    <br/>
                    Tenemos la movilidad correcta para que consigas crear memorias inolvidables en {destinationInfo.nameDestination}. 
                    Acercate a una de nuestras agencias o reserva por la web o APP.<br/>
                    Retirando tu auto en {destinationInfo.province[0]} podes devolverlo en cualquiera de nuestras agencias. 
                    Así tu experiencia es completa y confortable según lo que vos precises.
                    ¡Nosotros tenemos todo lo que vos necesitás!
                  
                  </p>
             </div>

             <div className="flex flex-col ms-10">
                 <div className="w-[455px] h-[339px] bg-[#D9D9D9] mt-12">
                    <p className="pt-9 text-[20px] fontFamily-mono font-bold text-center ">¡Alquila un vehículo ahora!</p>

                    <p className="pt-9 text-[16px] fontFamily-mono w-[401px] h-[36px] ml-7">Para ayudarte en tu viaje, GoCar pensó en condiciones especiales para ti.</p>
                   
                    <p className="pt-14 mt-6 text-[16px] fontFamily-mono w-[401px] h-[36px] ml-7">¡Aprovecha nuestras ofertas por tiempo limitado y vive experiencias increíbles!</p>
                  
                    <div className="flex justify-center">
                       <button className="w-[210px] h-[62px] Gradient-T mt-16  rounded-[8px] fontFamily-mono text-[20px] text-[#F5F5F5] ">RESERVA YA</button>
                    </div>
                 
                 </div>


                 <div className="w-[455px] h-[339px] bg-[#D9D9D9] mt-12 ">
              
                    <p className="pt-9 text-[16px] fontFamily-mono font-bold w-[401px] h-[36px] text-center">Consulta también otros destinos</p>
        
                   <div className="flex justify-center pt-14">
                      <button className="w-[381px] h-[53px] bg-[#FFFFFF] pt-5  rounded-[10px] text-[#B81C00] ">
                          <span className="float-left ml-4 mr-14 text-[14px] fontFamily-mono mb-4">Río Gallegos: Puerta de la Patagonia Austral</span><IoIosArrowForward className="text-[#B81C00] " />
                        </button>
                   </div>
                 
                   <div className="flex justify-center pt-14">
                      <button className="w-[381px] h-[53px] bg-[#FFFFFF] pt-5  rounded-[10px] text-[#B81C00] ">
                          <span className="float-left ml-4 mr-8 text-[14px] fontFamily-mono mb-4">Salta: Turismo de aventura en el Norte Argentino</span><IoIosArrowForward className="text-[#B81C00] " />
                        </button>
                   </div>

                   <div className="flex justify-center pt-7">
                      <a href="" className="text-[#B81C00] text-[14px] fontFamily-mono underline">
                        Consultar todos los destinos
                      </a>
                   </div>

                 </div>

             </div>

        </div>
        

    </div>

  )
}
export default SummaryBooking;