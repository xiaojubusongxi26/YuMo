import { App } from "vue";
// 导入自定义指令
import InputFocusAuto from "@/directives/InputFocusAuto";
import SlideIn from "./SlideIn";

const directives: any = {
  //汇总自定义指令
  InputFocusAuto,
  SlideIn,
};

export default {
  //导出自定义指令
  install(app: App<Element>) {
    // 以安装的方式插到app中
    Object.keys(directives).forEach((key) => {
      // 遍历directives对象的key
      app.directive(key, directives[key]); // 将每个directive注册到app中
    });
  },
};
