// 过滤一个函数中的另一个函数
export function filterArrayInArray(listA: any, listB: any) {
  return listA.filter((itemA: any) => {
    return listB.every((itemB: any) => {
      return itemB !== itemA;
    });
  });
}
