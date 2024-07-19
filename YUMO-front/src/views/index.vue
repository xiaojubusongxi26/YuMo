<template>
  <div class="frame">
    <Header class="header" />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/common/Header.vue";
import { appStore } from "@/store/app";
// 设置默认主题
(function () {
  let html = document.querySelector("html");
  // 设置要使用的主题claas名
  html?.setAttribute(
    "class",
    appStore().theme !== "dark" ? "theme-light" : "theme-dark"
  );
})();
</script>

<style scoped>
.frame {
  position: relative;
  .header {
    top: 0;
  }
}
</style>
