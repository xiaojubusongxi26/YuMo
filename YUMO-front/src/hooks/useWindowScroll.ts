import { ref } from "vue";

// 监听全局滚动事件
export function useWindowScroll() {
  // 文档顶部的距离
  const top = ref<number>(0);

  // 监听窗口滚动事件
  window.addEventListener("scroll", () => {
    top.value = window.scrollY;
  });

  return { top };
}
