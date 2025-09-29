<template>
  <div class="tools-box">
    <ToolCard
      v-for="(tool, index) in toolList"
      :tools="tool"
      :key="index"
    ></ToolCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ToolCard from "./../components/tool/ToolCard.vue";
import { ToolCardModel } from "@/modules/tool";

const toolList = ref<ToolCardModel[]>([
  {
    title: "js工具库",
    sort: 1,
    webs: [
      {
        title: "VueUse",
        url: "https://vueuse.nodejs.cn/",
        description: "Vue 组合式工具集",
      },
      {
        title: "lodashjs",
        url: "https://www.lodashjs.com/",
        description:
          "Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。",
      },
      {
        title: "autohue.js",
        url: "https://github.com/Auto-Plugin/autohue.js/",
        description:
          "自动提取图片主题色让图片和背景融为一体的工具，可以提取主题色、次主题色、边缘色（方便生成背景渐变）",
      },
      {
        title: "sortablejs",
        url: "https://sortablejs.com/",
        description: "功能强大的JavaScript 拖拽库",
      },
      {
        title: "md-editor-v3",
        url: "https://imzbf.github.io/md-editor-v3/zh-CN/demo/",
        description:
          "Markdown编辑器Vue3版本，使用jsx和typescript语法开发，支持切换主题、prettier美化文本等。",
      },
      {
        title: "lunarjs",
        url: "https://6tail.cn/calendar/api.html#start.html",
        description: "lunar是一个支持阳历、阴历、佛历和道历的日历工具库",
      },
      {
        title: "Vue3-Resource",
        url: "https://hu-snail.github.io/vue3-resource/",
        description: "包含web端&移动端&小程序&Electron等资源推荐",
      },
    ],
  },
  {
    title: "动画、CSS",
    sort: 2,
    webs: [
      {
        title: "VueBits",
        url: "https://vue-bits.dev/",
        description: "Vue动效库",
      },
      {
        title: "anime.js",
        url: "https://animejs.com/documentation/",
        description: "一款快速且多功能的 JavaScript 库，用于实现动画效果。",
      },
      {
        title: "box-shadow",
        url: "https://box-shadow.dev/",
        description: "box-shadow在线编辑器",
      },
      {
        title: "grid layoutit",
        url: "https://grid.layoutit.com/",
        description: "grid布局在线编辑",
      },
      {
        title: "typedjs",
        url: "https://mattboldt.com/demos/typed-js/",
        description: "打字效果动画库",
      },
    ],
  },
  {
    title: "开源项目",
    sort: 3,
    webs: [
      {
        title: "Fantastic-admin",
        url: "https://fantastic-admin.hurui.me/",
        description: "一款 开箱即用的 管理系统框架",
      },
      {
        title: "Vue源码解析",
        url: "https://ustbhuangyi.github.io/vue-analysis/",
        icon: "https://attractive-lavender-dormouse.faviconkit.com/ustbhuangyi.github.io/256",
        description: "全方位细致深度解析 Vue.js 的实现原理",
      },
    ],
  },
  {
    title: "WebGL",
    sort: 4,
    webs: [
      {
        title: "Galacea engine",
        url: "https://galacean.antgroup.com/engine/",
        description: "移动优先的游戏和互动应用在线创作平台",
      },
      {
        title: "Vue源码解析",
        url: "https://ustbhuangyi.github.io/vue-analysis/",
        icon: "https://attractive-lavender-dormouse.faviconkit.com/ustbhuangyi.github.io/256",
        description: "全方位细致深度解析 Vue.js 的实现原理",
      },
    ],
  },
]);
</script>

<style lang="scss" scoped>
.tools-box {
  max-width: 1080px;
  margin: 0 auto;
  color: var(--text);
}
</style>
