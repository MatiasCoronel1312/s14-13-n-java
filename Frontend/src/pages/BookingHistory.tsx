import axios from "axios";
import { useEffect, useState } from "react";
import { TMyReserve } from "../interfaces/reservar";
import { diferenciaEnDias } from "../components/SummaryBooking/const";
import { useAppSeletor } from "../redux/store";
import Home from "./Home";

function convertDateTimeToString(inputDateTime: Date): string {
  // Convert string to Date object
  const dateTimeObj: Date = new Date(inputDateTime);

  //Convert Date object to string
  const outputString: string = dateTimeObj
    .toISOString()
    .replace("T", " ")
    .slice(0, -5);

  return outputString;
}
const BookingHistory = () => {
  const [infoReservation, setInfoReservation] = useState<TMyReserve[]>([]);
  const dataReduces = useAppSeletor((state) => state);
  const token = dataReduces.token.tokenData;
  const getBookings = () => {
    const urlReserve = "https://gocarapp.onrender.com/api/reservation/user";

    axios
      .get<TMyReserve[]>(urlReserve, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setInfoReservation(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    getBookings();
  }, []);
  if (token === undefined) {
    return <Home />;
  }
  return (
    <div className="w-full h-full bg-background flex justify-center px-3">
      <div className="lg:w-[85%] md:w-[90%] w-full h-full flex flex-col items-center">
        <div className="text-accent text-[32px] text-center font-semibold my-5">
          Historial de reservas
        </div>
        <div className="w-full my-8">
          {infoReservation.map((reserve) => (
            <ReserveCard key={reserve.id} reserve={reserve} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;

function ReserveCard({ reserve }: { reserve: TMyReserve }) {
  return (
    <div className="text-text w-full bg-white p-2 mb-6 border-2 border-spacing-2 hover:border-accent rounded-3xl shadow-card flex flex-wrap justify-around">
      <div className="flex flex-col justify-center items-center w-[280px] py-2">
        <p className="text-l font-semibold text-center">
          {reserve.vehicle.model}
        </p>
        <p className="text-l text-center">{reserve.vehicle.category}</p>
        <img
          className="h-full w-[250px] rounded-[15px]"
          src={reserve.vehicle.image}
        />
      </div>
      <div className="flex flex-col justify-between w-auto">
        <div className="flex flex-wrap justify-evenly items-center w-full py-2">
          <div className="flex flex-col justify-center items-center w-[280px] px-2">
            <p className="text-4xl shadow-text">U$S {reserve.total}</p>
          </div>
          <div className="flex  justify-center items-center w-[280px] px-2 gap-2">
            <p className="text-2xl ">Dias: </p>
            <p className="text-2xl ">
              {diferenciaEnDias(
                reserve.reservationDates.retirementDate!,
                reserve.reservationDates.returnDate
              )}
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full py-2">
          <div className="w-full pl-[30px] mt-3 pr-4 pt-4 pb-2 border-2 border-[#F8C381] rounded-lg relative">
            <p className="px-2 text-center font-semibold bg-white absolute -top-3 left-2">
              Retiro
            </p>
            <p className="text-l ">
              Lugar: {reserve.reservationDates.retirementPlace.name}
            </p>
            <p className="text-l ">
              Fecha:{" "}
              {convertDateTimeToString(reserve.reservationDates.retirementDate)}
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full py-2">
          <div className="w-full pl-[30px] mt-3 pr-4 pt-4 pb-2 border-2 border-[#F8C381] rounded-lg relative">
            <p className="px-2 text-center font-semibold bg-white absolute -top-3 left-2">
              Devolución
            </p>
            <p className="text-l ">
              Lugar: {reserve.reservationDates.retirementPlace.name}
            </p>
            <p className="text-l ">
              Fecha:{" "}
              {convertDateTimeToString(reserve.reservationDates.returnDate)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
