import type { Directive, DirectiveBinding } from "vue";

const map = new WeakMap();
const observe = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      const animation = map.get(entry.target);
      animation && animation.play();
    }
  }
});

// 检验时视口之下的元素
function isBelowViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return rect.top - window.innerHeight > 0;
}

export default <Directive>{
  mounted: (el: HTMLElement, binding: DirectiveBinding) => {
    if (!isBelowViewport(el)) {
      return;
    }
    const animation = el.animate(
      [
        {
          transform: `translateY(100px)`,
          opacity: 0.8,
        },
        {
          transform: `translateY(0px)`,
          opacity: 1,
        },
      ],
      {
        duration: 500,
        easing: "ease-out",
        fill: "forwards",
      }
    );
    animation.pause();
    map.set(el, animation);
    observe.observe(el);
  },
  unmounted: (el: HTMLElement) => {
    observe.unobserve(el);
  },
};
