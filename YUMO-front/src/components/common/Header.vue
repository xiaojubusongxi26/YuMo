<template>
  <nav :class="{ top: !isTop }">
    <div class="nav">
      <div class="title">{{ webOption.webTitle }}</div>
      <div class="menus">
        <router-link class="menu" to="/">首页</router-link>
        <router-link class="menu" to="/document">文档</router-link>
        <router-link class="menu" to="/drawer">抽屉</router-link>
        <router-link class="menu" to="/map">游记</router-link>
        <router-link class="menu" to="/work">工作台</router-link>
        <router-link class="menu" to="/tools">工具箱</router-link>
      </div>
      <div class="theme">
        <theme-handoff />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import ThemeHandoff from "@/components/common/ThemeHandoff.vue";
import { useWindowScroll } from "@/hooks/useWindowScroll";
import { ref, watchEffect } from "vue";
import { appStore } from "@/store/app";

// 获取当前滚动位置
const { top } = useWindowScroll();
const { webOption } = appStore();

// 是否触顶
let isTop = ref<boolean>(true);

watchEffect(() => {
  isTop.value = top?.value > 0;
});
</script>

<style lang="scss" scoped>
@import "@/styles/media.scss";
.top {
  background: rgba($color: var(--bg-main), $alpha: 0.6);
}
nav {
  width: 100vw;
  background: var(--bg-main);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: 0.4s;
  position: sticky;
  top: 0;
  z-index: 2000;
  // margin-bottom: 20px;
}
.nav {
  display: flex;
  align-items: center;
  margin: auto;
  height: 70px;
  padding: 0 2vw;
  color: var(--text);
  user-select: none;
  .title {
    flex: 1;
    font-size: 32px;
  }
  .menus {
    .menu {
      margin: 0 3px;
      color: var(--text);
      display: inline-block;
      width: 70px;
      text-align: center;
      height: 32px;
      line-height: 32px;
      border-radius: 5px;
      transition: 0.3s all;
      &:hover {
        background: var(--bg-menu__hover);
      }
    }
  }
  .theme {
    width: auto;
  }
}
</style>
