interface Props {
  id: number,
  imagen: string, 
  descripcion: string
}

<<<<<<< HEAD
=======

>>>>>>> a69aed6d3b8c1cc86ecf12d5de19465c549ed3be
const CardDestinoTurismo = ({id, imagen, descripcion}: Props) => {

  //const navigator = useNavigate();
  const handleClick =(id:number)=>{
      // navigator("/")
      console.log(id);
  };

  return (
    <div onClick={()=>{handleClick(id)}} className='bg-white flex flex-col items-center w-[211px] h-[167px] cursor-pointer'>
<<<<<<< HEAD
=======

>>>>>>> a69aed6d3b8c1cc86ecf12d5de19465c549ed3be
      <img className="mt-[12px] h-[122px] rounded-[15px]" src={imagen} />
      <p className="mt-2 text-[#B81C00]">{descripcion}</p>
    </div>
  )
}
  
export default CardDestinoTurismo