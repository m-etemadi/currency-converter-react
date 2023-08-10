export function fixCurrency(data) {
  const maxDigit = {
    maximumFractionDigits: 0,
  };

  return data >= 1000 ? data.toLocaleString(undefined, maxDigit) : data;
}

export function getCurrentDateTime() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  let fullDate = `${day < 10 ? `0${day}` : day}-${
    month < 10 ? `0${month}` : month
  }-${year}`;

  let time = `${hour < 10 ? `0${hour}` : hour}:${
    minute < 10 ? `0${minute}` : minute
  }:${second < 10 ? `0${second}` : second}`;

  let dateTime = fullDate + ' | ' + time;

  return dateTime;
}
