<template>
  <header class="document-header">
    <img :src="bg" alt="" />
    <div class="document-info">
      <div class="info_head">
        <a href="javascript:;" class="doc">前端开发</a>
        <a href="javascript:;" class="tag">CSS</a>
      </div>
      <div class="info_title font-famaily__title">Proxy 对象</div>
      <div class="info_foot">
        <div class="time-bar">
          <ju-icon name="calendar" :size="20" />
          <span>发布于：2021-09-15</span>
        </div>
        <div class="time-bar">
          <ju-icon name="update" :size="20" />
          <span>更新于：2021-09-15</span>
        </div>
      </div>
    </div>
    <wave />
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Wave from "../common/Wave.vue";

const bg = ref(
  "https://xiaojubusongoss.oss-cn-beijing.aliyuncs.com/img/wallhaven-l8r8dr.jpg"
);
</script>
<style lang="scss" scoped>
.document-header {
  width: 100vw;
  height: 500px;
  position: relative;
  display: flex;
  align-items: center;
  color: var(--theme-color-light);
  overflow: hidden;
  img {
    position: absolute;
    top: 0%;
    left: -5%;
    width: 110%;
    height: 100%;
    object-fit: cover;
    filter: blur(8px) brightness(80%);
    user-select: none;
  }
  .document-info {
    width: 95vw;
    max-width: $widthMax;
    margin: auto;
    z-index: 2;
    .info_head {
      line-height: 32px;
      height: 32px;
      display: flex;
      font-size: 1rem;
      a {
        color: #fff;
      }
      .doc {
        border-radius: 8px;
        padding: 0 12px;
        background: var(--bg-light2);
        margin-right: 20px;
      }
      .tag {
        &::before {
          content: "#";
          color: var(--theme-color-light_second);
          padding-right: 2px;
        }
      }
    }
    .info_title {
      margin: 50px 0;
      height: 50px;
      line-height: 50px;
      font-size: 2.5rem;
      font-weight: bold;
    }
    .info_foot {
      display: flex;
      gap: 20px;
      .time-bar {
        height: 32px;
        line-height: 32px;
        display: flex;
        align-items: center;
        user-select: none;
        span {
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
