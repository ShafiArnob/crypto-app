export const convertDateToUnixTimestamp = (date) => {
  return Math.floor(date.getTime() / 1000);
};

export const convertUnixTimestampToDate = (unixTimestamp) => {
  // const milliseconds = unixTimestamp;
  const dateObj = new Date(unixTimestamp)
  const dateFormat = dateObj.toLocaleString()
  return dateFormat.split(',')[0] //.getDate()
};

export const createDate = (date, days, weeks, months, years) => {
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days + 7 * weeks);
  newDate.setMonth(newDate.getMonth() + months);
  newDate.setFullYear(newDate.getFullYear() + years);
  return newDate;
};