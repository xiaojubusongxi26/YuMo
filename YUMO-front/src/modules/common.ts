import type { Ref, ComponentPublicInstance } from "vue";

export type MaybeRef<T> = T | Ref<T>;
export type MaybeRefOrGetter<T> = MaybeRef<T> | (() => T);

export type VueInstance = ComponentPublicInstance;
export type MaybeElementRef<T extends MaybeElement = MaybeElement> =
  MaybeRef<T>;
export type MaybeComputedElementRef<T extends MaybeElement = MaybeElement> =
  MaybeRefOrGetter<T>;
export type MaybeElement =
  | HTMLElement
  | SVGElement
  | VueInstance
  | undefined
  | null;

export interface WebOptionModel {
  loginBg: string;
  webTitle: string;
  webDetail: string;
  homeWallPaper: string;
  avatar: string;
  author: string;
  sign: string;
  defaultImg: string;
}

// 代办事项
export interface TodoModel {
  id: number;
  todoThing: string;
  todoDate: string;
  isEnd: number | boolean;
  todoSort: number;
}
