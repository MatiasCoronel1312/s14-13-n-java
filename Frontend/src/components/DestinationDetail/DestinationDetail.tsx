
// import { DestinationBestTime, DestinationInfo, DestinationTipExtra, DestinationUbication } from "./destination.interface";

import { FaArrowCircleLeft } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";


const SummaryBooking = () => {

 /*  const destinationInfo : DestinationInfo = {
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
  } */
  return (
    <div>
        <div className="w-[1170px] h-[308px]">
          <div className=" w-[1174px] h-[31px] border-b-[1.5px] border-[#8F8F8F] ml-24 ">
            <p className="text-primary text-[14px] fontFamily-mono ">Home/Tips De Viajes/Villa General Belgrano</p>
          </div>

          <p className="text-[#B81C00] text-[36px] fontFamily-mono font-bold text-center pt-12 pb-2"> Tips de Viajes</p>
          <p className="text-text text-[32px] fontFamily-mono text-center ">Vení a inspirarte para tu próximo destino</p>
          <p className="text-text text-[32px] fontFamily-mono text-center pb-8">Villa General Belgrano - Córdoba</p>
          <button className="pl-3"><FaArrowCircleLeft className="text-[#B81C00]"/></button>
        <span className="text-text text-[20px] fontFamily-mono font-bold ml-3">Villa General Belgrano: ¿Qué hacer en esta ciudad encantadora? </span>
        </div>
        
        <img src="src/assets/DestinationDetail/VillaGeneralBelgrano.jpg"  className=" w-[1440px] h-[392px] "/>
        
        <div className="w-[1170px] h-[2410px]">
            <div className="flex ">
                <div className="flex flex-col  bg-[#F5F5F5] w-[661px] h-[1959px] pt-8 pl-7">
                    <p className="text-black text-[14px] fontFamily-mono font-bold w-[659px] h-[45px] ">
                       Villa General Belgrano queda en la provincia de Córdoba y tiene una gran diversidad cultural, incluyendo los arcos en Villa General Belgrano. 
                       ¡Vení con nosotros a descubrir qué hacer en esta ciudad encantadora!
                    </p>

                    <p className="text-[#EF2A06] text-[16px] fontFamily-mono font-bold pt-9">¿Cómo llegar a Villa General Belgrano?</p>

                     {/* Card 1 */}
                    <div className="flex pt-2">
                      <div className="w-[280px] h-[171px]">
                        <img src="src/assets/DestinationDetail/generalBelgrano1.jpg" alt="" className="" />
                      </div>
                      <div className="pl-2 w-[657px] h-[205px]">
                          <p className="text-[14px] fontFamily-mono  object-right" >
                            <span className="font-bold">
                              A menos de dos horas desde la capital de Córdoba la mejor opción es ir por la autopista en el vehículo que mejor se adapte a vos
                            </span>
                              . Por ejemplo, alquilando un auto, vos tendrás la facilidad de movilizarte  
                              por toda la ciudad descubiendo y visitando lugares con mayor seguridad y comodidad. <br/>
                              ¿ <span className="font-bold">Villa General Belgrano</span> ya está en tus planes? Entonces aprovechá para reservar tu auto y viví la experiencia completa. 
                              Si ahora, esa bella ciudad, encantadora y acogedora, aún no está en tus planes, 
                              revisá aquí todos los tips y ¡Enamorate!
                           </p>
                      </div>
                    </div>

                     {/* Card 2 */}
                     <p className="text-[#EF2A06] text-[16px] fontFamily-mono font-bold pt-10">¿Cuál es la mejor época del año para visitar Villa General Belgrano?</p>
                    <div className="flex pt-3">
                    
                      <div className="w-[1180px] h-[101px]">
                          <span className="font-bold">Villa General Belgrano</span> tiene 300 días de sol durante el año, en todo momento es excelente para visitar la pintoresca ciudad, te encantará. 
                          El pueblo cuenta con cuatro principales fiestas tradicionales:

                          <ul className="list-disc ml-4 pl-4">
                               <li>Para aprovechar el clima ameno de otoño, la Fiesta de la Masa Vienesa sucede en abril, en Semana Santa.</li>
                               <li>Para a quien le gusta el invierno, en julio sucede el Festival de Chocolate Alpino.</li>
                               <li>Recibiendo la primavera de brazos abiertos, en Octubre la ciudad celebra la Fiesta Nacional de la Cerveza, una de las tres mayores Oktoberfest del mundo.</li>
                               <li>Y, para cerrar el año, recibiendo el verano con mucha celebración en familia, en diciembre los visitantes pueden disfrutar de la Feria de Navidad, con músicas típicas del lugar.</li>
                          </ul>
                      </div>
                      <div className="pl-2 w-[657px] h-[245px]">
                         <img src="src/assets/DestinationDetail/generalBelgrano2.jpg" alt="" className="" />
                      </div>
                    </div>

                     {/* Card 3 */}
                     <p className="text-[#EF2A06] text-[16px] fontFamily-mono font-bold pt-56">Fiesta de la Massa Vienesa.</p>
                     <div className="flex pt-3">
                      <div className="w-[280px] h-[171px]">
                        <img src="src/assets/DestinationDetail/generalBelgrano3.jpg" alt="" className="" />
                      </div>
                      <div className="pl-2 w-[657px] h-[205px]">
                          <p className="text-[14px] fontFamily-mono  object-right" >
                             La fiesta es una antigua tradición en la ciudad, durante la Semana Santa.
                             Los turistas que están en Villa General Belgrano, durante las celebraciones,
                              podrán aprovechar: actividades litúrgicas, muchos bailes, presentaciones artísticas 
                              y hasta un tour gastronómico probando dulces de la región.
                           </p>
                      </div>
                    </div>




                    

                </div>

                <div className="flex flex-col ms-28">
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

    </div>
 
    
       
    

  )
}
export default SummaryBooking;