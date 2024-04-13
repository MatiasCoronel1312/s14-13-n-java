import CardTur from "../components/DestinosCard/CardTur";
const lugares =[
  {
    id: 0,
    imagen: "src/assets/fotosDestinosDeViajes/Cordoba844x492px.jpg",
    name: "Cordoba",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    
  {
    id: 1,
    imagen: "src/assets/fotosDestinosDeViajes/ROSARIO-844x492px.jpg",
    name: "Rosario",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    
  {
    id: 2,
    imagen: "src/assets/fotosDestinosDeViajes/MENDOZA-844x492-1.jpg",
    name: "Mendoza",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
    
  {
    id: 3,
    imagen: "src/assets/fotosDestinosDeViajes/PURMAMARCA-844x492px.jpg",
    name: "Purmamarca",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
    
  {
    id: 4,
    imagen: "src/assets/fotosDestinosDeViajes/Cordoba844x492px.jpg",
    name: "Neuquen",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."},
    
  {
    id: 5,
    imagen: "src/assets/fotosDestinosDeViajes/PURMAMARCA-844x492px.jpg",
    name: "Buenos Aires",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},
  
];



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