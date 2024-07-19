import type { Directive, DirectiveBinding } from "vue";
interface ElType extends HTMLElement {
  copyData: string | number;
  __handleClick__: any;
}

// 输入框自动聚焦
export default <Directive>{
  mounted: (el: ElType, binding: DirectiveBinding) => {
    if (binding.value == true || binding.value == undefined) {
      el.focus();
    }
  },
};
