import { Solar, HolidayUtil } from "lunar-javascript";

export interface DateInfoBaseModel {
  date: string;
  year: number;
  month: number;
  day: number;
  weekday: string;
}

export interface HolidayModel {
  name: string;
  isWork: boolean;
  target: string;
}

export interface DateInfoModel extends DateInfoBaseModel {
  lunar: string;
  holiday: HolidayModel | null;
  isCurrentMonth: boolean;
  solarTerm: string | null;
  isWork?: boolean;
  happy?: boolean;
}

export function getCurrentMonth() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // 获取当前月份的天数

  const weekdays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  const datesArray = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const currentDate = new Date(year, month, day);
    // 格式化日期为 YYYY-MM-DD
    const formattedDate = currentDate
      .toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\//g, "-");

    const weekday = weekdays[currentDate.getDay()];

    datesArray.push({
      date: formattedDate,
      weekday: weekday,
    });
  }

  return datesArray;
}

// 获取今日信息
export function getTodayDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekdayNames = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  const weekday = weekdayNames[date.getDay()];

  const formattedDate = `${year}-${String(month).padStart(2, "0")}-${String(
    day
  ).padStart(2, "0")}`;

  return {
    date: formattedDate,
    year: year,
    month: month,
    day: day,
    weekday: weekday,
  };
}

// 获取展示数据
export function getCalendarDates(year: number, month: number): DateInfoModel[] {
  const weekdays = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];

  // 获取某月的天数
  function getDaysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
  }

  // 当前月天数
  const daysInCurrentMonth = getDaysInMonth(year, month);
  // 当前月第一天是星期几
  const firstDayOfCurrentMonth = (new Date(year, month, 1).getDay() + 6) % 7;

  // 计算上个月显示的天数
  const prevMonthDaysToShow = firstDayOfCurrentMonth; // 因为从周一开始

  // 上个月的年份和月份
  const prevMonth = month === 0 ? 11 : month - 1;
  const prevYear = month === 0 ? year - 1 : year;
  // 上个月的天数
  const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth);

  // 计算上个月显示的日期
  const prevMonthDates = [];
  for (let i = prevMonthDaysToShow; i > 0; i--) {
    const date = daysInPrevMonth - i + 1;
    const solar = Solar.fromYmd(prevYear, prevMonth + 1, date);
    const lunar = solar.getLunar();
    const holiday = HolidayUtil.getHoliday(prevYear, prevMonth + 1, date);

    const dateObj = <DateInfoModel>{
      date: `${prevYear}-${String(prevMonth + 1).padStart(2, "0")}-${String(
        date
      ).padStart(2, "0")}`,
      year: prevYear,
      month: prevMonth + 1,
      day: date,
      weekday: weekdays[(prevMonthDaysToShow - i) % 7],
      isCurrentMonth: false,
      lunar: lunar.getDayInChinese(),
      solarTerm: lunar.getJieQi(),
      holiday: !holiday
        ? null
        : {
            name: holiday.getName(),
            isWork: holiday.isWork(),
            target: holiday.getTarget(),
          },
    };
    dateObj.isWork = isWorkDay(dateObj);

    prevMonthDates.push(dateObj);
  }

  // 当前月日期
  const currentMonthDates = [];
  for (let i = 1; i <= daysInCurrentMonth; i++) {
    const solar = Solar.fromYmd(year, month + 1, i);
    const lunar = solar.getLunar();
    const holiday = HolidayUtil.getHoliday(year, month + 1, i);

    const dateObj = <DateInfoModel>{
      date: `${year}-${String(month + 1).padStart(2, "0")}-${String(i).padStart(
        2,
        "0"
      )}`,
      year: year,
      month: month + 1,
      day: i,
      weekday: weekdays[(firstDayOfCurrentMonth + i - 1) % 7],
      lunar: lunar.getDayInChinese(),
      solarTerm: lunar.getJieQi(),
      isCurrentMonth: true,
      happy: true,
      holiday: !holiday
        ? null
        : {
            name: holiday.getName(),
            isWork: holiday.isWork(),
            target: holiday.getTarget(),
          },
    };
    dateObj.isWork = isWorkDay(dateObj);

    currentMonthDates.push(dateObj);
  }

  // 下个月的年份和月份
  const nextMonth = month === 11 ? 0 : month + 1;
  const nextYear = month === 11 ? year + 1 : year;

  // 计算下个月显示的日期
  const nextMonthDates = [];
  const remainingDays =
    6 * 7 - (prevMonthDates.length + currentMonthDates.length);
  for (let i = 1; i <= remainingDays; i++) {
    const solar = Solar.fromYmd(nextYear, nextMonth + 1, i);
    const lunar = solar.getLunar();
    const holiday = HolidayUtil.getHoliday(nextYear, nextMonth + 1, i);

    const dateObj = <DateInfoModel>{
      date: `${nextYear}-${String(nextMonth + 1).padStart(2, "0")}-${String(
        i
      ).padStart(2, "0")}`,
      year: nextYear,
      month: nextMonth + 1,
      day: i,
      weekday:
        weekdays[(firstDayOfCurrentMonth + daysInCurrentMonth + i - 1) % 7],
      isCurrentMonth: false,
      lunar: lunar.getDayInChinese(),
      solarTerm: lunar.getJieQi(),
      holiday: !holiday
        ? null
        : {
            name: holiday.getName(),
            isWork: holiday.isWork(),
            target: holiday.getTarget(),
          },
    };
    dateObj.isWork = isWorkDay(dateObj);

    nextMonthDates.push(dateObj);
  }

  // 返回完整的日期数组
  return [...prevMonthDates, ...currentMonthDates, ...nextMonthDates];
}

// 计算要展示的日期信息：节假日 > 节气 > 农历
export function computedDateInfo(date: DateInfoModel): string {
  if (date.holiday && date.holiday.target === date.date) {
    // 为节假日当天
    return date.holiday.name;
  } else if (date.solarTerm) {
    // 二十四节气
    return date.solarTerm;
  } else {
    return date.lunar;
  }
}

// 是否休息
export function isWorkDay(date: DateInfoModel): boolean {
  if (date.holiday) {
    return date.holiday.isWork;
  } else if (
    !date.holiday &&
    (date.weekday === "周日" || date.weekday === "周六")
  ) {
    return false;
  } else {
    return true;
  }
}

// 选中某天
export function getSelectDateInfo(date: string | undefined) {
  if (!date) return;
  const solar = Solar.fromDate(new Date(date));
  const lunar = solar.getLunar();

  const dateObj = {
    lunarStr: `${lunar.getYearInChinese()}年${lunar.getMonthInChinese()}月${lunar.getDayInChinese()}日`,
    ji: lunar.getDayYi().toString(),
    xiong: lunar.getDayJi().toString(),
  };
  return dateObj;
}
