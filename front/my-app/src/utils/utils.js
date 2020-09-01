export function formateDate(milliseconds) {
  let x = new Date();
  x.setTime(milliseconds);
  let date = x.toString();
  let [, month, day, year] = date.split(" ");
  return `${day} ${month} ${year}`;
}
