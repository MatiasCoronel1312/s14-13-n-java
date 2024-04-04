const CardDestinoTurismo = ({imagen, descripcion}: {imagen: string, descripcion: string}) => {
    return (
      <div className='bg-white border flex flex-col items-center'>
        <div className="">{imagen}</div>
        <p className="mt-2 text-[#B81C00]">{descripcion}</p>
      </div>
    )
  }
  
  export default CardDestinoTurismo