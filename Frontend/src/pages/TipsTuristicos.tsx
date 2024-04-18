import CardTur from "../components/DestinosCard/CardTur";
import lugares from "../components/DestinosCard/DataDestinos";
<<<<<<< HEAD

=======
>>>>>>> a69aed6d3b8c1cc86ecf12d5de19465c549ed3be

const TipsTuristicos = () => {
  return (
    <div className='w-full bg-background flex justify-center'>
      <div className="h-full lg:w-[85%] md:w-[90%] ">
        <div>TipsTuristicos</div>

        <div className="flex flex-wrap p-4 mb-4 justify-between ">
          {
            lugares.map(lugar=>(
              <CardTur lugar={lugar}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TipsTuristicos;
