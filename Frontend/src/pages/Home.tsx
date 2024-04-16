
import DestinationDetail from "../components/DestinationDetail/DestinationDetail";
import NuevaReserva from "../components/NuevaReserva/NuevaReserva";
import TurismoHome from "../components/turismo/TurismoHome";

import Carrusel from "./../components/CarCarousel/Carrusel";


const Home = () => {
  return (

    <div className='w-full flex flex-col items-center '>
      <Carrusel />
      <NuevaReserva />
      <TurismoHome/>
      <DestinationDetail/>
    </div>
  );
};

export default Home;
