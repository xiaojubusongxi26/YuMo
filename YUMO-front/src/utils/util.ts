import dayjs from "dayjs";

// 过滤一个函数中的另一个函数
export function filterArrayInArray(listA: any, listB: any) {
  return listA.filter((itemA: any) => {
    return listB.every((itemB: any) => {
      return itemB !== itemA;
    });
  });
}

// 将大驼峰转换为分隔符
export function getKebabCase(str: string): string {
  let temp = str.replace(/[A-Z]/g, function (i) {
    return "-" + i.toLowerCase();
  });
  if (temp.slice(0, 1) === "-") {
    temp = temp.slice(1); //如果首字母是大写，执行replace时会多一个_，需要去掉
  }
  return temp;
}

// 获取当前时间
export function getFormattedNow(formatStr: string): string {
  return dayjs().format(formatStr);
}