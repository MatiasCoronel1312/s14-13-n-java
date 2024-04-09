import { FiEdit } from "react-icons/fi";

const SummaryBooking = () => {
  return (
    <div className="Gradient-T p-5 w-[1200px] h-[500px] rounded-[15px] mb-10">
      <h1 className="text-center text-[20px] text-white ">
        {" "}
        Resumen de la Reserva
      </h1>
      <div className="flex text-text ">
        <div className="flex flex-col bg-white w-[580px] h-[405px] rounded-l-[10px] me-3 ">
          <div className="flex justify-between h-1/3 px-6 border-b-[1px] border-black">
            <div className="flex flex-col my-auto">
              <h1 className="text-[#854900] text-[20px] ">Lugar de Retiro</h1>
              <p className="text-text text-[20px]">
                30 de marzo de 2024 a las 16:00
              </p>
              <p className="text-text text-[14px]">Aeropuerto - Mendoza</p>
            </div>
            <div className="flex justify-center items-center ">
              <p className="ml-5">
                <FiEdit />
              </p>
            </div>
          </div>

          <div className="flex justify-between h-1/3 px-6 border-b-[1px] border-black">
            <div className="flex flex-col my-auto">
              <h1 className="text-[#854900] text-[20px] ">Devolución</h1>
              <p className="text-text text-[20px]">
                01 de abril de 2024 a las 16:00
              </p>
              <p className="text-text text-[14px]">Aeropuerto - Mendoza</p>
            </div>
            <div className="flex justify-center items-center ">
              <p className="ml-5">
                <FiEdit />
              </p>
            </div>
          </div>

          <div className="flex justify-between h-1/3 px-6">
            <div className="flex flex-col my-auto">
              <h1 className="text-[#854900] text-[20px] ">Grupo</h1>
              <p className="text-text text-[20px]">
                Grupo PX - 4x4 Especial Automático
              </p>
              <p className="text-text text-[14px]">
                Chevrolet S10X 2.8 Automática
              </p>
            </div>
            <div className="flex justify-center items-center ">
              <p className="ml-5">
                <FiEdit />
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white w-[580px] h-[405px] rounded-r-[10px] justify-between ms-3">
          <h1 className=" text-center">PAGAR EN EL MOSTRADOR</h1>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p>Diarias</p>
              <p>2x U$S 50,00</p>
              <p>Protecciones</p>
              <p>Protección Especial con Franquicia 2 diarias x U$S 0,03/día</p>
              <p>Cargos Administrativos (12%)</p>
              <p>I.V.A. (21%)</p>
            </div>

            <div className="flex flex-col">
              <p>Total</p>
              <p>U$S 100,00</p>
              <p>&nbsp;</p>
              <p>U$S 0,06</p>
              <p>U$S 6,00</p>
              <p>U$S 21,00</p>
            </div>
          </div>
          <div className="flex flex-col items-center align-middle text-center bg-[#8F8F8F] w-full h-[140px] rounded-br-[10px]">
            <p className="text-center place-self-center flex">Valor Total</p>
            <p className=" text-[48px] text-white font-sans">U$S 127,06</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SummaryBooking;
