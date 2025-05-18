import type { Directive } from "vue";

type DebounceBindingValue = {
  handler: Function;
  delay?: number;
};

const keyModifiersMap: Record<string, string> = {
  enter: "Enter",
  esc: "Escape",
  tab: "Tab",
  space: " ",
  delete: "Delete",
  backspace: "Backspace",
};

export default <Directive>{
  mounted(el, binding) {
    const eventType = binding.arg || "click";
    const { handler, delay = 300 }: DebounceBindingValue = binding.value;
    console.log("eventType", eventType);

    if (typeof handler !== "function") {
      console.warn("v-debounce requires a function as handler");
      return;
    }

    const modifiers = Object.keys(binding.modifiers);

    let timer: any = null;

    const debouncedHandler = (e: Event) => {
      // 修饰符判断（如 .enter）
      if (eventType.startsWith("key") && modifiers.length) {
        const keyboardEvent = e as KeyboardEvent;
        const matched = modifiers.some((mod) => {
          const key = keyModifiersMap[mod] || mod;
          return keyboardEvent.key === key;
        });

        if (!matched) return;
      }

      clearTimeout(timer);
      timer = setTimeout(() => {
        handler.call(el, e);
      }, delay);
    };

    el.__debounce_event__ = debouncedHandler;
    el.addEventListener(eventType, debouncedHandler);
  },
  unmounted(el, binding) {
    const eventType = binding.arg || "click";
    el.removeEventListener(eventType, el.__debounce_event__);
    delete el.__debounce_event__;
  },
};
