export function formatDate(milliseconds) {
  let x = new Date();
  x.setTime(milliseconds);
  let date = x.toString();
  let [, month, day, year] = date.split(" ");
  return `${day} ${month} ${year}`;
}
export function formatDateNum(milliseconds) {
  let x = new Date(milliseconds);
  let day = x.getDate();
  let month = x.getMonth();
  let realMonth = month + 1;
  if (realMonth < 10) {
    realMonth = "0" + realMonth;
  }
  let year = x.getFullYear();
  return `${year}-${realMonth}-${day}`;
}
export function calculateDays(date1, date2) {
  const arrivalDate = date1;
  const departureDate = date2;
  const daysDifference = departureDate - arrivalDate;
  const countDays = Math.round(daysDifference / (1000 * 60 * 60 * 24));
  return countDays;
}
export function formatDateToMilliseconds(date) {
  let x = new Date(date);
  let milliseconds = x.getTime();
  return milliseconds;
}
