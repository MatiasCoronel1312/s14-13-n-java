interface Reserva {
  DataReserva: DataReserva;
  DataAuto: DataAuto;
  DataPago: DataPago;
}

export interface DataPago {
  formaDePago: string;
  cantidadDia: string | number;
  precioPorDia: string | number;
  precioTotalPorDia: string | number;
  protecciones: string[];
  precioPorProteccion: string | number;
  cargoAdministrativo: string | number;
  iva: string;
  precioTotal: string;
}

export interface DataAuto {
  grupoAuto: string;
  autoName: string;
}

export interface DataReserva {
  agenciaRetiro: string;
  fechaRetiro: string;
  horaRetiro: string;
  agenciaEntrega: string;
  fechaEntrega: string;
  horaEntrega: string;
}

export default Reserva;
