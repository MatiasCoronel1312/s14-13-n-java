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
    <div className='w-full h-full bg-background flex justify-center font-mono px-3'>
      <div className="lg:w-[85%] md:w-[90%] w-full h-full flex flex-col items-center">
        <h1 className="text-primary font-bold text-4xl text-center p-5">Tips de viajes</h1>
        <h2 className="text-3xl text-center pb-5"> Vení a inspirarte para tu próximo destino</h2>
        <div className="w-[85%] h-full flex flex-col item-center">
          <p>Busque por categoría o palabra clave:</p>
          <div className="w-full flex justify-start gap-5 items-center">
            <div className="relative w-full h-[40px]">
              <FaSearch className="absolute left-3 top-3 text-[#707070]"/>
              <input 
                type="text" 
                className="w-full p-3 pl-10 h-full border-[#707070] border-2 rounded-lg"
                placeholder="Ej: Aventura"
                value={filtro}
                onChange={handleChange}/>
            </div>
            <div className="flex w-auto ">
              <a className="text-accent whitespace-nowrap cursor-pointer hover:underline" onClick={()=>{setFiltro("")}}>
                Limpiar filtro
              </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-start flex-row gap-x-5 gap-y-2.5 p-5">
            {
              filtros.map((filter)=>
                <ButtonTag  setFiltro={setFiltro} tag={filter} />
              )
            }
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-5 pb-5">
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
