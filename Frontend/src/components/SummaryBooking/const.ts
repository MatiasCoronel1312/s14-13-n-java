export function convertirFecha(fechaString: string) {
  // Objeto para mapear nombres de meses
  const meses: Record<string, string> = {
    "01": "enero",
    "02": "febrero",
    "03": "marzo",
    "04": "abril",
    "05": "mayo",
    "06": "junio",
    "07": "julio",
    "08": "agosto",
    "09": "septiembre",
    "10": "octubre",
    "11": "noviembre",
    "12": "diciembre",
  };

  // Separar la fecha en año, mes y día
  const [ano, mes, dia] = fechaString.split("-");

  // Obtener el nombre del mes
  const nombreMes: string = meses[mes];

  // Formatear la nueva fecha en el formato deseado
  const fechaFormateada = `${dia} de ${nombreMes} de ${ano}`;

  return fechaFormateada;
}

export function diferenciaEnDias(fecha1: string | Date, fecha2: string | Date) {
  // Convertir las cadenas de fecha en objetos Date
  const date1 = new Date(fecha1);
  const date2 = new Date(fecha2);

  // Calcular la diferencia en milisegundos entre las dos fechas
  const diferenciaMs = Math.abs(date1 - date2);

  // Convertir la diferencia en días (1 día = 24 horas * 60 minutos * 60 segundos * 1000 milisegundos)
  const diferenciaDias = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));

  return diferenciaDias;
}
