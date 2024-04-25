
import NuevaReservaPrueba from "../components/NuevaReserva/NuevaReservaPrueba";
import TurismoHome from "../components/turismo/TurismoHome";
import Carrusel from "./../components/CarCarousel/Carrusel";

const Home = () => {
  return (
    <div className="w-full flex justify-center ">
      <div className="lg:w-[85%] w-[90%] h-full flex flex-col item-center">
        <Carrusel />
        <NuevaReservaPrueba />
        <TurismoHome />
      </div>
    </div>
  );
};

export default Home;
