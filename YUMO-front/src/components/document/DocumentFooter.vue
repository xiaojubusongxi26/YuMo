<template>
  <div class="footer-box">
    <div
      class="next-box"
      v-for="(doc, index) in nextList"
      :key="doc.id"
      :style="{ backgroundImage: `url(${doc.cover})` }"
    >
      <div class="next-info">
        <div class="next_arrow">{{ index ? "下一篇" : "上一篇" }}</div>
        <div class="next-name">{{ doc.name }}</div>
      </div>
      <div class="mask"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const nextList = ref([
  {
    id: 12,
    cover:
      "https://xiaojubusongoss.oss-cn-beijing.aliyuncs.com/img/wallhaven-l8r8dr.jpg",
    name: "Proxy 详解",
  },
  {
    id: 12,
    cover:
      "https://xiaojubusongoss.oss-cn-beijing.aliyuncs.com/img/wallhaven-l8r8dr.jpg",
    name: "Proxy 详解",
  },
]);
</script>
<style lang="scss" scoped>
@import "@/styles/mixin";
.footer-box {
  margin-top: 20px;
  padding: 0 20px;
  box-sizing: border-box;
  width: 100%;
  height: 140px;
  display: flex;
  gap: 20px;
  .next-box {
    flex: 1;
    transition: 0.3s background-size ease-out;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    background-size: 100%;
    background-position: center;
    @include card-box();
    &:hover {
      background-size: 110%;
      .mask {
        opacity: 1;
      }
    }
    .next-info {
      height: 100%;
      position: relative;
      z-index: 1;
      color: var(--theme-color-light);
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
      padding-left: 40px;
      .next-name {
        @include font-title(18px);
      }
    }
    .mask {
      @include mask(0.4, 0);
      transition: 0.3s opacity;
    }
  }
}
</style>
