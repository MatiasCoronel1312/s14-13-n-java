import CarouselTourism from "./CarouselTourism"
import ButtonTourism from "./ButtonTourism"
import { useAppSeletor } from "../../redux/store";

const TurismoHome = () => {

  const todoLugares = useAppSeletor((state) => state.allDestinos.destinations) 

  return (
    <div className='w-full h-[500px] bg-white border p-6 flex flex-col items-center mb-5'>
      <h2 className="text-3xl text-[#B81C00]">Destinos para descubrir e inspirarte</h2>
      <p className="mt-2 mb-4">Más que alquilarte un auto, nosotros cuidamos de tu camino, consultá nuestros tips y viajá sin preocupaciones para tu próximo destino.</p>
      <div className="mb-4">
        <CarouselTourism 
          showSites={todoLugares} 
        />
      </div>
      <ButtonTourism title="Consulta todos los destinos" path="/tipsTuristicos" />
    </div>
  )
}
  
export default TurismoHome