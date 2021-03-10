export function parseAddress(address) {
  return `${address.address1}, ${address.city}, ${address.state}, ${address.country}`;
}

export function getDay(day) {
  let formattedDay = "";
  switch (day) {
    case 0:
      formattedDay = "Lunes";
      break;
    case 1:
      formattedDay = "Martes";
      break;
    case 2:
      formattedDay = "Miércoles";
      break;
    case 3:
      formattedDay = "Jueves";
      break;
    case 4:
      formattedDay = "Viernes"
      break;
    case 5:
      formattedDay = "Sábado";
      break;
    case 6:
      formattedDay = "Domingo";
      break;
    default:
      formattedDay = "NA";
      break;
  }
  return formattedDay;
}

export default parseAddress;
