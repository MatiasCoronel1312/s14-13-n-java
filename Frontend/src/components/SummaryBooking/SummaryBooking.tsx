import { useAppSeletor } from "../../redux/store";
import { DataAuto, DataPago, DataReserva } from "./SummaryBooking.interface";
import { FiEdit } from "react-icons/fi";
import { convertirFecha, diferenciaEnDias } from "./const";

const SummaryBooking = () => {
  const dataReduces = useAppSeletor((state) => state);
  const dataReservaReduce = dataReduces.dataReserve.dataReserve;
  const dataAutoReduce = dataReduces.carro.cars[0];
  const dataCoberturasReduce = dataReduces.coberturas.cargos;

  //carculos
  const totalDias = diferenciaEnDias(
    dataReservaReduce.fechaRetiro!,
    dataReservaReduce.fechaEntrega!
  );

  const totalPrecioCarro =
    dataAutoReduce.price +
    dataAutoReduce.price * dataCoberturasReduce.metodoPago.price;

  const totalPorDia = totalPrecioCarro * totalDias;

  const totalPorProteccion = dataCoberturasReduce.seguridad.price * totalDias;
  const totalcargoAdministrativo = totalPrecioCarro * 0.12;
  const totalIva = totalPrecioCarro * 0.21;
  const totalPorMetodoPago =
    totalPrecioCarro * dataCoberturasReduce.metodoPago.price;
  const totalTodosImpuestos =
    totalPorDia +
    totalPorProteccion +
    totalcargoAdministrativo +
    totalIva +
    totalPorMetodoPago;
  // data
  const dataReserva: DataReserva = {
    agenciaRetiro: dataReservaReduce.agenciaRetiro ?? "",
    fechaRetiro: convertirFecha(dataReservaReduce.fechaRetiro ?? ""),
    horaRetiro: dataReservaReduce.horaRetiro ?? "",
    agenciaEntrega: dataReservaReduce.agenciaEntrega ?? "",
    fechaEntrega: convertirFecha(dataReservaReduce.fechaEntrega ?? ""),
    horaEntrega: dataReservaReduce.horaEntrega ?? "",
  };
  const dataAuto: DataAuto = {
    grupoAuto: dataAutoReduce.category,
    autoName: dataAutoReduce.brand,
  };
  const dataPago: DataPago = {
    formaDePago: dataCoberturasReduce.metodoPago?.name,
    cantidadDia: totalDias,
    precioPorDia: totalPrecioCarro,
    precioTotalPorDia: totalPorDia,
    protecciones: [
      ` ${
        dataCoberturasReduce.seguridad.name?.length > 5
          ? `${dataCoberturasReduce.seguridad.name} ${totalDias} diarias x U$S ${dataCoberturasReduce.seguridad.price}/día`
          : "Sin proteccion todavia"
      }`,
    ],
    precioPorProteccion: totalPorProteccion,
    cargoAdministrativo: totalcargoAdministrativo.toFixed(2),
    iva: totalIva.toFixed(2),
    precioTotal: totalTodosImpuestos.toFixed(2),
  };

  return (
    <div className="Gradient-T p-2 w-[1200px] h-[500px] rounded-[15px]">
      <h1 className="text-center text-[32px] text-white fontFamily-sans pb-2 ">
        {" "}
        Resumen de la Reserva
      </h1>
      <div className="flex text-text ">
        <div className="flex flex-col bg-white w-[580px] h-[405px] rounded-l-[10px] me-3 ">
          <div className="flex justify-between h-1/3 px-6 border-b-[1px] border-black">
            <div className="flex flex-col my-auto">
              <h1 className="text-[#854900] text-[20px] fontFamily-sans ">
                Lugar de Retiro
              </h1>
              <p className="text-text text-[20px] fontFamily-sans">
                {dataReserva.fechaRetiro} a las {dataReserva.horaRetiro}
              </p>
              <p className="text-text text-[14px] fontFamily-sans">
                {dataReserva.agenciaRetiro}
              </p>
            </div>
            <div className="flex justify-center items-center ">
              <p className="ml-5">
                <FiEdit />
              </p>
            </div>
          </div>

          <div className="flex justify-between h-1/3 px-6 border-b-[1px] border-black">
            <div className="flex flex-col my-auto">
              <h1 className="text-[#854900] text-[20px] fontFamily-sans">
                Devolución
              </h1>
              <p className="text-text text-[20px] fontFamily-sans">
                {dataReserva.fechaEntrega} a las {dataReserva.horaEntrega}
              </p>
              <p className="text-text text-[14px] fontFamily-sans">
                {dataReserva.agenciaEntrega}
              </p>
            </div>
            <div className="flex justify-center items-center ">
              <p className="ml-5">
                <FiEdit />
              </p>
            </div>
          </div>

          <div className="flex justify-between h-1/3 px-6">
            <div className="flex flex-col my-auto">
              <h1 className="text-[#854900] text-[20px] fontFamily-sans ">
                Grupo
              </h1>
              <p className="text-text text-[20px] fontFamily-sans">
                {dataAuto.autoName}
              </p>
              <p className="text-text text-[14px] fontFamily-sans">
                {dataAuto.grupoAuto}
              </p>
            </div>
            <div className="flex justify-center items-center ">
              <p className="ml-5">
                <FiEdit />
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white w-[580px] h-[405px] rounded-r-[10px]  ms-3">
          <h1 className=" text-center text-[20px] pt-2 fontFamily-sans">
            {dataPago.formaDePago ? dataPago.formaDePago : "-"}
          </h1>
          <div className="flex flex-row justify-between pt-2">
            <div className="flex flex-col px-3 ">
              <p className="text-[20px] fontFamily-sans ">Diarias</p>
              <p className="text-[14px] my-2 fontFamily-mono">
                {dataPago.cantidadDia} x U$S {dataPago.precioPorDia}
              </p>
              <p className="text-[14px] my-2 fontFamily-mono">Protecciones</p>
              <p className="text-[14px] my-2 fontFamily-mono">
                {dataPago.protecciones}
              </p>
              <p className="text-[14px] my-2 fontFamily-mono">
                Cargos Administrativos (12%)
              </p>
              <p className="text-[14px] my-2 fontFamily-mono">I.V.A. (21%)</p>
            </div>

            <div className="flex flex-col px-9 text-right ">
              <p className="text-[20px]  fontFamily-sans">Total</p>
              <p className="text-[14px]  my-2 fontFamily-mono">
                U$S {parseInt(dataPago.precioTotalPorDia as string).toFixed(2)}
              </p>
              <p className="my-2">&nbsp;</p>
              <p className="text-[14px] my-2 fontFamily-mono">
                U$S {dataPago.precioPorProteccion}
              </p>
              <p className="text-[14px] my-2 fontFamily-mono">
                U$S {dataPago.cargoAdministrativo}
              </p>
              <p className="text-[14px] my-2 fontFamily-mono">
                U$S {dataPago.iva}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center align-middle text-center bg-[#8F8F8F] w-full h-[140px] rounded-br-[10px]">
            <p className="text-center place-self-center flex text-[20px] pt-2 fontFamily-sans">
              Valor Total
            </p>
            <p className=" text-[48px] text-white fontFamily-sans">
              U$S {dataPago.precioTotal}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryBooking;
