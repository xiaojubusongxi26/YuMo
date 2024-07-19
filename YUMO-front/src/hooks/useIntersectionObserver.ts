import { computed, watch, toValue } from "vue";
import type { MaybeComputedElementRef } from "@/modules/common";

interface UseIntersectionObserverOptions {
  root?: MaybeComputedElementRef;
  rootMargin?: string;
  threshold?: number | number[];
}

// 监听全局滚动事件
export function useIntersectionObserver(
  target: MaybeComputedElementRef | MaybeComputedElementRef[],
  callback: IntersectionObserverCallback,
  options: UseIntersectionObserverOptions = {}
) {
  // IntersectionObserver参数
  const { root, rootMargin = "0px", threshold = 0.1 } = options;

  // 销毁监听器
  let clearup = () => {};

  const targets = computed(() => {
    const _target = toValue(target);
    return Array.isArray(_target) ? _target : [_target];
  });

  // 监听并存储停止监听事件
  const stopWatch = watch(
    () => targets.value,
    (val: MaybeComputedElementRef[]) => {
      const observer = new IntersectionObserver(callback, {
        root: (toValue(root) as Element | Document) || null,
        rootMargin,
        threshold,
      });
      // 开始监听
      val.forEach(
        (el: MaybeComputedElementRef) => el && observer.observe(el as Element)
      );

      clearup = () => {
        observer.disconnect();
      };
    },
    { immediate: true, flush: "post" }
  );

  // 销毁监听器
  const stop = () => {
    clearup();
    stopWatch();
  };
  return { stop };
}
