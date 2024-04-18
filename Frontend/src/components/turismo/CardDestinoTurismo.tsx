interface Props {
  id: number,
  imagen: string, 
  descripcion: string
}

const CardDestinoTurismo = ({imagen, descripcion}: Props) => {
  return (
    <div className='bg-white flex flex-col items-center w-[211px] h-[167px]'>
      <img className="mt-[12px] h-[122px] rounded-[15px]" src={imagen} />
      <p className="mt-2 text-[#B81C00]">{descripcion}</p>
    </div>
  )
}
  
export default CardDestinoTurismo