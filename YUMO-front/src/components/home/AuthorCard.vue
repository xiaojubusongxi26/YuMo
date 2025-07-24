<template>
  <div
    class="author-box box-shadow br-12 mb-30 pl-20 pr-20 pb-30 border-default box-sizing color-default bg-default"
  >
    <header class="author-head">
      <ju-image :src="webOption.avatar" />
      <h3>{{ webOption.author }}</h3>
      <h5>{{ webOption.sign }}</h5>
    </header>
    <ju-divider :title="'网站记录'" />
    <div class="record-box">
      <div class="record-item">
        <span class="record-icon flex-c">
          <ju-icon name="web" :size="20" />
        </span>
        <span class="record-title">建站天数：</span>
        <span class="record-data">300天</span>
      </div>
      <div class="record-item">
        <span class="record-icon flex-c">
          <ju-icon name="document" :size="20" />
        </span>
        <span class="record-title">文章：</span>
        <span class="record-data">128篇</span>
      </div>
      <div class="record-item">
        <span class="record-icon flex-c">
          <ju-icon name="travel" :size="20" />
        </span>
        <span class="record-title">游记：</span>
        <span class="record-data">26篇</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import JuIcon from "../JuComponents/JuIcon.vue";
import { appStore } from "@/store/app";
const { webOption } = appStore();
</script>
<style lang="scss" scoped>
.author-box {
  width: 100%;
  .author-head {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 60px 0 30px;
    cursor: default;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50px;
      margin-bottom: 16px;
      object-fit: cover;
    }
    h5 {
      margin-top: 10px;
    }
  }
  .record-box {
    padding-top: 10px;
    .record-item {
      height: 40px;
      line-height: 40px;
      display: flex;
      .record-icon {
        padding-right: 10px;
        svg {
          color: var(--text);
        }
      }
      .record-data {
        flex: 1;
        text-align: right;
      }
    }
  }
}
</style>
