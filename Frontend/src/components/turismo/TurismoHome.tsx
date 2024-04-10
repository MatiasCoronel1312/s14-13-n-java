import { useState } from "react"
import CarouselTourism from "./CarouselTourism"
import ButtonTourism from "./ButtonTourism"

type SitioTuristico = {id: number, imagen: string, descripcion: string}

const showSites: SitioTuristico[] = [
  {
    id: 1,
    imagen: "Mendoza.png",
    descripcion: "¿Qué hacer en Mendoza?"
  },
  {
    id: 2,
    imagen: "Córdoba.png",
    descripcion: "¿Qué hacer en Cordoba?"
  },
  {
    id: 3,
    imagen: "Santa Fe.png",
    descripcion: "¿Qué hacer en Santa Fe?"
  }
]

/* interface Props {
  showSites: SitioTuristico[];
} */

const TurismoHome = () => {

  const [indexSite, setIndexSite] = useState(0);
  const addIndex = () => {
      if (indexSite < showSites.length - 1) {
          setIndexSite((state) => (state += 1));
      }
  };
  const lessIndex = () => {
      if (indexSite > 0) {
          setIndexSite((state) => (state -= 1));
      }
  };

    return (
      <div className='w-full h-[500px] bg-white border p-6 flex flex-col items-center'>
        <h2 className="text-3xl text-[#B81C00]">Destinos para descubrir e inspirarte</h2>
        <p className="mt-2 mb-4">Más que alquilarte un auto, nosotros cuidamos de tu camino, consultá nuestros tips y viajá sin preocupaciones para tu próximo destino.</p>
        <div className="mb-4">
          <CarouselTourism 
            showSites={showSites} 
            addIndex={addIndex}
            lessIndex={lessIndex}
            indexSite={indexSite}
            setIndexSite={setIndexSite} 
          />
        </div>
        <ButtonTourism title="Consulta todos los destinos" path="" />
      </div>
    )
  }
  
  export default TurismoHome