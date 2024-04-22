export const formatearFecha = (dateString: string, timeString: string) => {
  // Parsea la cadena de fecha en un objeto de fecha
  const dateParts = dateString.split("-");
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]) - 1; // Restamos 1 porque los meses en JavaScript son base 0
  const day = parseInt(dateParts[2]);
  const dateObject = new Date(year, month, day);

  // Parsea la cadena de hora en un objeto de fecha
  const timeParts = timeString.split(":");
  const hours = parseInt(timeParts[0]);
  const minutes = parseInt(timeParts[1]);
  dateObject.setHours(hours, minutes);

  // Objeto de fecha y hora combinado

  return dateObject;
};
