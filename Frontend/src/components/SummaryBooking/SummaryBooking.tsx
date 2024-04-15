import { DataAuto, DataPago, DataReserva } from './SummaryBooking.interface'
import { FiEdit } from 'react-icons/fi'

const SummaryBooking = () => {
  const dataReserva: DataReserva = {
    agenciaRetiro: "Aeropuerto - Mendoza",
    fechaRetiro: "30 de marzo de 2024",
    horaRetiro: "16:00",
    agenciaEntrega: "Aeropuerto - Mendoza",
    fechaEntrega: "1 de abril de 2024",
    horaEntrega: "16:00",
  }
  const dataAuto: DataAuto = {
    grupoAuto: "económico",
    autoName: "Chevrolet S10X 2.8 Automática",

  }
  const dataPago: DataPago = {
    formaDePago: "EN EL MOSTRADOR",
    cantidadDia: "2",
    precioPorDia: "50.00",
    precioTotalPorDia: "100,00",
    protecciones: ["Protección Especial con Franquicia 2 diarias x U$S 0,03/día"],
    precioPorProteccion: "0,06",
    cargoAdministrativo: "6,00",
    iva: "21,00",
    precioTotal: "127,06",

  }


return (
  <div className="Gradient-T p-2 w-[1200px] h-[500px] rounded-[15px]">
    <h1 className="text-center text-[32px] text-white fontFamily-sans pb-2 "> Resumen de la Reserva</h1>
    <div className="flex text-text ">

      <div className="flex flex-col bg-white w-[580px] h-[405px] rounded-l-[10px] me-3 ">
        <div className="flex justify-between h-1/3 px-6 border-b-[1px] border-black">
          <div className="flex flex-col my-auto">
            <h1 className="text-[#854900] text-[20px] fontFamily-sans ">Lugar de Retiro</h1>
            <p className="text-text text-[20px] fontFamily-sans">{dataReserva.fechaRetiro} a las {dataReserva.horaRetiro}</p>
            <p className="text-text text-[14px] fontFamily-sans">{dataReserva.agenciaRetiro}</p>
          </div>
          <div className="flex justify-center items-center ">

            <p className="ml-5"><FiEdit /></p>
          </div>
        </div>

        <div className="flex justify-between h-1/3 px-6 border-b-[1px] border-black">
          <div className="flex flex-col my-auto">
            <h1 className="text-[#854900] text-[20px] fontFamily-sans">Devolución</h1>
            <p className="text-text text-[20px] fontFamily-sans">{dataReserva.fechaEntrega} a las {dataReserva.horaEntrega}</p>
            <p className="text-text text-[14px] fontFamily-sans">{dataReserva.agenciaEntrega}</p>
          </div>
          <div className="flex justify-center items-center ">

            <p className="ml-5"><FiEdit /></p>
          </div>
        </div>

        <div className="flex justify-between h-1/3 px-6">
          <div className="flex flex-col my-auto">
            <h1 className="text-[#854900] text-[20px] fontFamily-sans ">Grupo</h1>
            <p className="text-text text-[20px] fontFamily-sans">{dataAuto.autoName}</p>
            <p className="text-text text-[14px] fontFamily-sans">{dataAuto.grupoAuto}</p>

          </div>
          <div className="flex justify-center items-center ">

            <p className="ml-5"><FiEdit /></p>
          </div>
        </div>

      </div>



      <div className="flex flex-col bg-white w-[580px] h-[405px] rounded-r-[10px]  ms-3">
        <h1 className=" text-center text-[20px] pt-2 fontFamily-sans">PAGAR {dataPago.formaDePago}</h1>
        <div className="flex flex-row justify-between pt-2">
          <div className="flex flex-col px-3 ">
            <p className="text-[20px] fontFamily-sans ">Diarias</p>
            <p className="text-[14px] my-2 fontFamily-mono">{dataPago.cantidadDia}x U$S {dataPago.precioPorDia}</p>
            <p className="text-[14px] my-2 fontFamily-mono">Protecciones</p>
            <p className="text-[14px] my-2 fontFamily-mono">{dataPago.protecciones}</p>
            <p className="text-[14px] my-2 fontFamily-mono">Cargos Administrativos (12%)</p>
            <p className="text-[14px] my-2 fontFamily-mono">I.V.A. (21%)</p>
          </div>

          <div className="flex flex-col px-9 text-right ">

            <p className="text-[20px]  fontFamily-sans">Total</p>
            <p className="text-[14px]  my-2 fontFamily-mono">U$S {dataPago.precioTotalPorDia}</p>
            <p className="my-2">&nbsp;</p>
            <p className="text-[14px] my-2 fontFamily-mono">U$S {dataPago.precioPorProteccion}</p>
            <p className="text-[14px] my-2 fontFamily-mono">U$S {dataPago.cargoAdministrativo}</p>
            <p className="text-[14px] my-2 fontFamily-mono">U$S {dataPago.iva}</p>

          </div>
        </div>
        <div className="flex flex-col items-center align-middle text-center bg-[#8F8F8F] w-full h-[140px] rounded-br-[10px]">
          <p className="text-center place-self-center flex text-[20px] pt-2 fontFamily-sans" >Valor Total</p>
          <p className=" text-[48px] text-white fontFamily-sans">U$S {dataPago.precioTotal}</p>
        </div>


      </div>


    </div>

  </div>

)
}

export default SummaryBooking

