import { useEffect, useState } from "react";
import CardTur from "../components/DestinosCard/CardTur";
import lugares from "../components/DestinosCard/DataDestinos";
import ButtonTag from "../components/DestinosCard/ButtonTag";
import { FaSearch } from "react-icons/fa";


const TipsTuristicos = () => {
  const [filtro, setFiltro] = useState("")
  const filtros =["Fiestas","Aventura","Historia","Gastronomia","Naturaleza"]
  useEffect(() => {

    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}, []);
  const lugaresFiltrados = filtro.length<2?lugares: lugares.filter(lugar => 
    
    {
      const tagMinuscula = lugar.tag.map(dato=>dato.toLowerCase())      
      return tagMinuscula.some(name=>name.includes(filtro.toLowerCase()))
    });
  const handleChange =(e: React.ChangeEvent<HTMLInputElement>)=> {
    setFiltro(e.target.value)
  }
  return (
    <div className='w-full bg-background flex justify-center font-mono'>
      <div className="h-full lg:w-[85%] md:w-[90%] ">
        <h1 className="text-primary font-bold text-4xl text-center p-5">Tips de viajes</h1>
        <h2 className="text-3xl text-center pb-5"> Vení a inspirarte para tu próximo destino</h2>
        <div className="w-[85%] h-full flex flex-col item-center mx-auto">
        <p>Busque por categoría o palabra clave:</p>
        <div className="flex justify-start gap-5 items-center">
          <div className="relative w-[860px] h-[40px]">
            <FaSearch className="absolute left-3 top-3 text-[#707070]"/>
            <input 
              type="text" 
              className="w-full p-3 pl-10 h-full border-[#707070] border-2 rounded-lg"
              placeholder="Ej: Aventura"
              value={filtro}
              onChange={handleChange}/>
          </div>
          <div>
            <a className="text-accent cursor-pointer hover:underline" onClick={()=>{setFiltro("")}}>
              Limpiar filtro
            </a>
          </div>
        </div>
        <div className="flex justify-start ml-5 flex-row gap-5 py-5">
          {
            filtros.map((filter)=>
              <ButtonTag  setFiltro={setFiltro} tag={filter} />
            )
          }
        </div>
        </div>
        <div className="flex flex-wrap p-4 mb-4 justify-between ">
          {
            lugaresFiltrados.map(lugar=>(
              <CardTur lugar={lugar}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TipsTuristicos;
