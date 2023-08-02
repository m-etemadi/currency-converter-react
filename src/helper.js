export function fixCurrency(data) {
  const maxDigit = {
    maximumFractionDigits: 0,
  };

  return data >= 1000 ? data.toLocaleString(undefined, maxDigit) : data;
}

export function getCurrentDateTime() {
  const date = new Date();

  let fullDate =
    date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();

  let time =
    date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

  let dateTime = fullDate + ' | ' + time;

  return dateTime;
}
