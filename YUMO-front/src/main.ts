import { createApp } from "vue";
import "./styles/index.scss";

import Directives from "@/directives/index.ts";

import JuDivider from "@/components/JuComponents/JuDivider.vue";
import JuPagination from "@/components/JuComponents/JuPagination.vue";
import JuImage from "@/components/JuComponents/JuImage.vue";
import JuPopover from "./components/JuComponents/JuPopover.vue";
import JuIcon from "./components/JuComponents/JuIcon.vue";
import JuTitle from "./components/JuComponents/JuTitle.vue";
import JuCalendar from "./components/JuComponents/Calendar/JuCalendar.vue";
import JuFullModal from "./components/JuComponents/JuFullModal.vue";

/* 引入重置样式 */
import "@/common/css/reset.css";
import App from "./App.vue";
import pinia from "./store";

// 引入路由
import router from "./router/index";

const app = createApp(App);

// 注册全局组件
app.component("JuDivider", JuDivider);
app.component("JuPagination", JuPagination);
app.component("JuImage", JuImage);
app.component("JuPopover", JuPopover);
app.component("JuIcon", JuIcon);
app.component("JuTitle", JuTitle);
app.component("JuCalendar", JuCalendar);
app.component("JuFullModal", JuFullModal);

app.use(router);
app.use(pinia);
app.use(Directives);

app.mount("#app");
