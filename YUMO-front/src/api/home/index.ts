import { Get, Post } from "@/utils/request";
import { getFormattedNow } from "@/utils/util";

export async function getSolarDate(year: string) {
  return await Get("/birthday/getSolarDate", { year });
}

/*
 * @params: 获取今日TODO列表
 * */
export async function getTodayTodoList(currentDate?: string) {
  const date = currentDate || getFormattedNow("YYYY-MM-DD");
  return await Get("/todo/getTodayTodo", { date });
}

/*
 * @params: 添加todo任务
 * todoThing：事件内容
 * todoDate：事件时间
 * isEnd：是否完成
 * todoSort: 优先级
 * */
export async function addTodo(params: any) {
  const date = getFormattedNow("YYYY-MM-DD");
  return await Post("/todo/add", { ...params, todoDate: date, isEnd: 0 });
}

/*
 * @params: 删除任务
 * */
export async function deleteTodo(id: number) {
  return await Get("/todo/delete", { id });
}

/*
 * @params: 修改任务
 * id: 任务id
 * todoThing：事件内容
 * todoSort: 优先级
 * isEnd: 是否完成
 * */
export async function updateTodo(params: any) {
  return await Post("/todo/update", params);
}
