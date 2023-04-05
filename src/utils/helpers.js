export const dateFormatter = (date) => {
  var value = new Date(date),
    month = "" + (value.getMonth() + 1),
    day = "" + value.getDate(),
    year = value.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("/");
};

export const totalFiles = (obj) => {
  return Object.keys(obj).length;
};
