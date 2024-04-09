interface Props {
  imagen: string, 
  descripcion: string
}

const CardDestinoTurismo = ({imagen, descripcion}: Props) => {
    return (
      <div className='bg-white border flex flex-col items-center w-[211px] h-[167px]'>
        <div className="mt-[12px] h-[122px]">{imagen}</div>
        <p className="mt-2 text-[#B81C00]">{descripcion}</p>
      </div>
    )
  }
  
  export default CardDestinoTurismo