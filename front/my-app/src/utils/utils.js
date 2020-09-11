export function formateDate(milliseconds) {
  let x = new Date();
  x.setTime(milliseconds);
  let date = x.toString();
  let [, month, day, year] = date.split(" ");
  return `${day} ${month} ${year}`;
}
export function formateDateNum(milliseconds) {
  let x = new Date(milliseconds);
  let day = x.getDate();
  let month = x.getMonth();
  if (month < 10) {
    month = "0" + month;
  }
  let year = x.getFullYear();
  return `${year}-${month}-${day}`;
}
export function calculateDays(date1, date2) {
  const arrivalDate = date1;
  const departureDate = date2;
  const daysDifference = departureDate - arrivalDate;
  const countDays = Math.round(daysDifference / (1000 * 60 * 60 * 24));
  return countDays;
}
