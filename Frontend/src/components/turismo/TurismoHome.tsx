import CardDestinoTurismo from "./CardDestinoTurismo"

const TurismoHome = () => {
    return (
      <div className='bg-white border p-6 flex flex-col items-center'>
        <h2 className="text-3xl text-[#B81C00]">Destinos para descubrir e inspirarte</h2>
        <p className="mt-2 mb-4">Más que alquilarte un auto, nosotros cuidamos de tu camino, consultá nuestros tips y viajá sin preocupaciones para tu próximo destino.</p>
        <div className="mb-4 flex ">
            <CardDestinoTurismo imagen="Imagen Mendoza" descripcion="¿Qué hacer en Mendoza?"/>
            <CardDestinoTurismo imagen="Imagen Córdoba" descripcion="¿Qué hacer en Cordoba?"/>
        </div>
        <div className="border border-[#B81C00] p-4 text-[#B81C00]">Consulta todos los destinos</div>
      </div>
    )
  }
  
  export default TurismoHome