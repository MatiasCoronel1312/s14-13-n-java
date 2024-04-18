import CarouselTourism from "./CarouselTourism"
import ButtonTourism from "./ButtonTourism"
import DataDestinos from "./../DestinosCard/DataDestinos"
<<<<<<< HEAD
=======

import DataDestinos from "./../DestinosCard/DataDestinos"

>>>>>>> a69aed6d3b8c1cc86ecf12d5de19465c549ed3be

const TurismoHome = () => {

    return (

      <div className='w-full h-[500px] bg-white border p-6 flex flex-col items-center mb-5'>

        <h2 className="text-3xl text-[#B81C00]">Destinos para descubrir e inspirarte</h2>
        <p className="mt-2 mb-4">Más que alquilarte un auto, nosotros cuidamos de tu camino, consultá nuestros tips y viajá sin preocupaciones para tu próximo destino.</p>
        <div className="mb-4">
          <CarouselTourism 
<<<<<<< HEAD
            showSites={DataDestinos} 
=======

            showSites={DataDestinos} 

>>>>>>> a69aed6d3b8c1cc86ecf12d5de19465c549ed3be
          />
        </div>

        <ButtonTourism title="Consulta todos los destinos" path="/tipsTuristicos" />

  </div>
    )
}
  
export default TurismoHome