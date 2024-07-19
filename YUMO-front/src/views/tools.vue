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
    title: "文件处理",
    sort: 1,
    webs: [
      {
        title: "picdiet",
        url: "https://picdiet.eula.club/",
        icon: "https://attractive-lavender-dormouse.faviconkit.com/picdiet.eula.club/256",
        description: "基于mozjpeg，能极速压缩80%的图片大小，而不损害其质量",
      },
      {
        title: "一键抠图",
        url: "https://remove.photos/zh-cn/",
        icon: "https://attractive-lavender-dormouse.faviconkit.com/remove.photos/256",
        description: "3秒自动去除背景，而且完全免费！",
      },
      {
        title: "一键抠图",
        url: "https://remove.photos/zh-cn/",
        icon: "https://attractive-lavender-dormouse.faviconkit.com/remove.photos/256",
        description: "3秒自动去除背景，而且完全免费！",
      },
      {
        title: "一键抠图",
        url: "https://remove.photos/zh-cn/",
        icon: "https://attractive-lavender-dormouse.faviconkit.com/remove.photos/256",
        description: "3秒自动去除背景，而且完全免费！",
      },
      {
        title: "一键抠图",
        url: "https://remove.photos/zh-cn/",
        icon: "https://attractive-lavender-dormouse.faviconkit.com/remove.photos/256",
        description: "3秒自动去除背景，而且完全免费！",
      },
      {
        title: "一键抠图",
        url: "https://remove.photos/zh-cn/",
        icon: "https://attractive-lavender-dormouse.faviconkit.com/remove.photos/256",
        description: "3秒自动去除背景，而且完全免费！",
      },
      {
        title: "一键抠图",
        url: "https://remove.photos/zh-cn/",
        icon: "https://attractive-lavender-dormouse.faviconkit.com/remove.photos/256",
        description: "3秒自动去除背景，而且完全免费！",
      },
      {
        title: "一键抠图",
        url: "https://remove.photos/zh-cn/",
        icon: "https://attractive-lavender-dormouse.faviconkit.com/remove.photos/256",
        description: "3秒自动去除背景，而且完全免费！",
      },
      {
        title: "一键抠图",
        url: "https://remove.photos/zh-cn/",
        icon: "https://attractive-lavender-dormouse.faviconkit.com/remove.photos/256",
        description: "3秒自动去除背景，而且完全免费！",
      },
      {
        title: "一键抠图",
        url: "https://remove.photos/zh-cn/",
        icon: "https://attractive-lavender-dormouse.faviconkit.com/remove.photos/256",
        description: "3秒自动去除背景，而且完全免费！",
      },
      {
        title: "一键抠图",
        url: "https://remove.photos/zh-cn/",
        icon: "https://attractive-lavender-dormouse.faviconkit.com/remove.photos/256",
        description: "3秒自动去除背景，而且完全免费！",
      },
    ],
  },
  {
    title: "文档",
    sort: 2,
    webs: [
      {
        title: "各个ES版本API",
        url: "https://es.npm8.com/",
        icon: "https://attractive-lavender-dormouse.faviconkit.com/es.npm8.com/256",
        description: "",
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
    title: "文档",
    sort: 2,
    webs: [
      {
        title: "各个ES版本API",
        url: "https://es.npm8.com/",
        icon: "https://attractive-lavender-dormouse.faviconkit.com/es.npm8.com/256",
        description: "",
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
    title: "文档",
    sort: 2,
    webs: [
      {
        title: "各个ES版本API",
        url: "https://es.npm8.com/",
        icon: "https://attractive-lavender-dormouse.faviconkit.com/es.npm8.com/256",
        description: "",
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
