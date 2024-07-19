export interface DateDataModule {
  date: string;
  year: number;
  month: number;
  day: number;
  week: number;
  number: number;
}

// 初始化365天数据
export function initDate(): DateDataModule[] {
  const date = new Date();

  // 日期数据
  const dateData: DateDataModule[] = [];

  // 循环365天
  for (let i = 1; i <= 365; i++) {
    // 计算彼时
    const dms = date.getTime() - (365 - i) * 24 * 60 * 60 * 1000;
    const d = new Date(dms);
    const day: DateDataModule = {
      date: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate}`,
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate(),
      week: d.getDay(),
      number: 0,
    };

    dateData.push(day);
  }

  return dateData;
}
