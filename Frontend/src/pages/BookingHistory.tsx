import { useAppSeletor } from "../redux/store";
import Audi from "../assets/AudiA5.png";
import ChevroletExpress from "../assets/ChevroletExpress.png";

//const allBookings = useAppSeletor((state) => state.allAgencias.agencias);
type Vehicle = {
  id: number,
  model: string,
  image: string,
  category: string
}
type Reservation = {
  id: number,
  retirementPlace: string,
  retirementDate: string, 
  returnPlace: string,
  returnDate: string
}

type Booking = {
  id: number,
  vehicle: Vehicle,
  reservation: Reservation,
  total: number
}

const allBookings: Booking[] = [
  {
    id: 1,
    vehicle: {
      id: 1,
      model: 'Modelo',
      image: Audi,
      category: 'Categoría'
    },
    reservation: {
      id: 1,
      retirementPlace: 'Lugar de retiro',
      retirementDate: 'Fecha de retiro', 
      returnPlace: 'Lugar de regreso',
      returnDate: 'Fecha de regreso'
    },
    total: 127.05
  },
  {
    id: 2,
    vehicle: {
      id: 2,
      model: 'Modelo',
      image: ChevroletExpress,
      category: 'Categoría'
    },
    reservation: {
      id: 2,
      retirementPlace: 'Lugar de retiro',
      retirementDate: 'Fecha de retiro', 
      returnPlace: 'Lugar de regreso',
      returnDate: 'Fecha de regreso'
    },
    total: 189.05
  },
  {
    id: 3,
    vehicle: {
      id: 2,
      model: 'Modelo',
      image: Audi,
      category: 'Categoría'
    },
    reservation: {
      id: 2,
      retirementPlace: 'Lugar de retiro',
      retirementDate: 'Fecha de retiro', 
      returnPlace: 'Lugar de regreso',
      returnDate: 'Fecha de regreso'
    },
    total: 189.05
  },
];

const BookingHistory = () => {

  return (
    <div className="w-full h-full bg-background flex justify-center px-3">
      <div className="lg:w-[85%] md:w-[90%] w-full h-full flex flex-col items-center">
          <div className="text-accent text-[32px] text-center font-semibold my-5">Historial de reservas</div>
          <div className="w-full my-8">
            {
              allBookings.map((booking)=>
                <div key={booking.id} className="text-text w-full bg-white p-2 mb-6 border-2 border-spacing-2 hover:border-accent rounded-3xl shadow-card flex flex-wrap justify-around" >
                  <div className="flex flex-col justify-center items-center w-[280px] py-2" >
                    <p className="text-l font-semibold text-center">{booking.vehicle.category}</p>
                    <p className="text-l text-center">{booking.vehicle.model}</p>
                    <img className="h-full w-[250px] rounded-[15px]" src={booking.vehicle.image} />
                  </div>
                  <div className="flex flex-col justify-between w-auto">
                    <div className="flex flex-wrap justify-evenly items-center w-full py-2">
                      <div className="flex flex-col justify-center items-center w-[280px] px-2">
                        <p className="text-4xl shadow-text">U$S {booking.total}</p>
                      </div>
                      <div className="flex flex-col justify-center items-center w-[280px] px-2">
                        <p className="text-2xl ">Pago en Mostrador</p>
                      </div>
                    </div>
                    <div className="flex flex-col w-full py-2">
                      <div className="w-full pl-[30px] mt-3 pr-4 pt-4 pb-2 border-2 border-[#F8C381] rounded-lg relative">
                        <p className="px-2 text-center font-semibold bg-white absolute -top-3 left-2">Retiro</p>
                        <p className="text-l ">Lugar: {booking.reservation.returnPlace}</p>
                        <p className="text-l ">Fecha: {booking.reservation.returnDate}</p>
                      </div>
                    </div>
                    <div className="flex flex-col w-full py-2">
                      <div className="w-full pl-[30px] mt-3 pr-4 pt-4 pb-2 border-2 border-[#F8C381] rounded-lg relative">
                        <p className="px-2 text-center font-semibold bg-white absolute -top-3 left-2">Devolución</p>
                        <p className="text-l ">Lugar: {booking.reservation.returnPlace}</p>
                        <p className="text-l ">Fecha: {booking.reservation.returnDate}</p>
                      </div>
                    </div>
                  </div>
                </div> 
              )
            }
          </div>

      </div>
    </div>
  );
};

export default BookingHistory;