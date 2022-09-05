export const getToday = () => {
  const today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);

  return today;
};

export const getForDaysAhead = (d) => {
  const today = getToday();

  const days = new Date(today);

  days.setDate(days.getDate() + d);
  return days;
};

export const getNumberOfDaysFromToday = (date) => {
  date = new Date(date);

  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);

  const today = getToday();

  const difference = today.getTime() - new Date(date).getTime();
  const diffInDays = Math.floor(difference / (24 * 60 * 60 * 1000));

  return diffInDays;
};

export const formatDate = (date, forFormInput = false) => {
  let newDate = new Date(date).toLocaleDateString();
  let [day, month, year] = newDate.split(".");
  if (day.length === 1) day = "0" + day;

  if (forFormInput) return `${year}-${month}-${day}`;
  return `${day}.${month}.${year}`;
};
