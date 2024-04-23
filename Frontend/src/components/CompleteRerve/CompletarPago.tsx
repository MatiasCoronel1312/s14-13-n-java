import usePostReserve from "./hooks/usePostReserve";

export default function CompletarPago({ isLogin }: { isLogin: boolean }) {
  const { title, text, showReservation, completeReservationAction } =
    usePostReserve(isLogin);

  return (
    <section className="relative ">
      {showReservation && (
        <div className="absolute top-1/2 left-1/2 w-[440px] h-[250px] rounded-2xl transform -translate-x-1/2 -translate-y-1/2 bg-white border border-black flex justify-center items-center shadow-xl">
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-2xl font-bold">Completada reserva</p>
            <p>Alert</p>
          </div>
        </div>
      )}
      <div className="flex flex-col justify-center items-center w-[600px] h-[300px]  mx-auto gap-20 ">
        <div
          onClick={completeReservationAction}
          className={`text-[#F5F5F5] font-sl  rounded-lg   ${
            isLogin ? "w-[236px]" : "w-[136px]"
          } h-[44px] bg-[#333333] flex  justify-center items-center cursor-pointer`}
        >
          {title}
        </div>
        <p>{text}</p>
      </div>
    </section>
  );
}
