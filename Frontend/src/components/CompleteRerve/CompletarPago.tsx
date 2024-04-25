import { useAppSeletor } from "../../redux/store";
import usePostReserve from "./hooks/usePostReserve";

export default function CompletarPago() {
  const userReduces = useAppSeletor((state) => state.user.userData);
  const userIsLogin = userReduces != undefined;
  const {
    title,
    text,
    showReservation,
    completeReservationAction,

    showError,
  } = usePostReserve(userIsLogin);

  return (
    <section className="relative ">
      {showReservation && (
        <div className="absolute top-1/2 left-1/2 w-[440px] h-[250px] rounded-2xl transform -translate-x-1/2 -translate-y-1/2 bg-white border border-black flex justify-center items-center shadow-xl">
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-2xl font-bold">
              {showError === "" ? "Completada reserva" : "Error"}
            </p>
            <p>{showError != "" ? showError : ""}</p>
          </div>
        </div>
      )}
      <div className="flex flex-col justify-center items-center w-[600px] h-[300px]  mx-auto gap-20 ">
        <div
          onClick={completeReservationAction}
          className={`text-[#F5F5F5] font-sl  rounded-lg   ${
            userIsLogin ? "w-[236px]" : "w-[136px]"
          } h-[44px] bg-[#333333] flex  justify-center items-center cursor-pointer`}
        >
          {title}
        </div>
        <p>{text}</p>
      </div>
    </section>
  );
}
