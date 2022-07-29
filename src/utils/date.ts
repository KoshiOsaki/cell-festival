export const dateToString = (_date: Date): string => {
  let date = new Date(_date); //なぜか_dateがDate型でない時があるため

  let year_str = date.getFullYear();
  let month_str: any = 1 + date.getMonth();
  let day_str: any = date.getDate();
  month_str = ('0' + month_str).slice(-2);
  day_str = ('0' + day_str).slice(-2);
  return [year_str, month_str, day_str].join('-');
};
