import CarouselTourism from "./CarouselTourism"
import ButtonTourism from "./ButtonTourism"


const showSites = [
  {
    id: 1,
    imagen: "src/assets/fotosDestinosDeViajes/Cordoba844x492px.jpg",
    descripcion: "¿Qué hacer en Cordoba?"
  },
  {
    id: 2,
    imagen: "src/assets/fotosDestinosDeViajes/MENDOZA-844x492-1.jpg",
    descripcion: "¿Qué hacer en Mendoza?"
  },
  {
    id: 3,
    imagen: "src/assets/fotosDestinosDeViajes/PURMAMARCA-844x492px.jpg",
    descripcion: "¿Qué hacer en Jujuy?"
  },
  {
    id: 4,
    imagen: "src/assets/fotosDestinosDeViajes/ROSARIO-844x492px.jpg",
    descripcion: "¿Qué hacer en Santa Fe?"
  }
]

/* interface Props {
  showSites: SitioTuristico[];
} */

const TurismoHome = () => {

    return (

      <div className='w-full h-[500px] bg-white border p-6 flex flex-col items-center mb-5'>

        <h2 className="text-3xl text-[#B81C00]">Destinos para descubrir e inspirarte</h2>
        <p className="mt-2 mb-4">Más que alquilarte un auto, nosotros cuidamos de tu camino, consultá nuestros tips y viajá sin preocupaciones para tu próximo destino.</p>
        <div className="mb-4">
          <CarouselTourism 
            showSites={showSites} 
          />
        </div>

        <ButtonTourism title="Consulta todos los destinos" path="/tipsTuristicos" />

  </div>
    )
}
  
export default TurismoHome