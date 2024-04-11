
import NuevaReserva from "../components/NuevaReserva/NuevaReserva";
import TurismoHome from "../components/turismo/TurismoHome";

import Carrusel from "./../components/CarCarousel/Carrusel";


const Home = () => {
  return (
    <div>

    <div className='w-full flex flex-col items-center '>
      <Carrusel />
      <NuevaReserva />
      <TurismoHome/>
    </div>
  );
};

export default Home;
