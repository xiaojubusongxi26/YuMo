<template>
  <div class="tool-card">
    <h1>{{ props.tools.title }}</h1>

    <JuDivider />
    <div class="web-box">
      <div v-for="web in props.tools.webs" :key="web.url" class="web-item">
        <!-- <img :src="web.icon" alt="" /> -->
        <div class="flex align-center">
          <div class="flex-1">{{ web.title }}</div>
          <div class="icon-hover copy" title="复制链接" v-copy="web.url">
            <ju-icon name="copy" :size="20"></ju-icon>
          </div>
        </div>
        <div class="description double-line-2" :title="web.description">
          {{ web.description }}
        </div>
        <a
          :href="web.url"
          class="link-default mt-10 fs-14 ellipsis flex-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ web.url }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ToolCardModel } from "@/modules/tool";
const props = defineProps<{
  tools: ToolCardModel;
}>();
</script>
<style lang="scss" scoped>
.tool-card {
  h1 {
    margin: 10px 0;
  }
  .copy {
    padding: 2px;
    border-radius: 4px;
  }
  .web-box {
    padding: 20px 0 60px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    .web-item {
      width: 100%;
      border-radius: 12px;
      margin-bottom: 30px;
      box-sizing: border-box;
      font-size: 18px;
      transition: 0.5s all;
      box-sizing: border-box;
      border: 1px solid var(--border);
      &:hover {
        border: 1px solid var(--box-border);
      }
      width: 30%;
      padding: 20px;
      margin-bottom: 0;
      position: relative;
      display: flex;
      flex-direction: column;
      color: var(--text);
      background-color: var(--bg-main);
      img {
        position: absolute;
        left: 12px;
        top: 12px;
        width: 46px;
        height: 46px;
        border-radius: 4px;
        object-fit: cover;
      }
      .description {
        line-height: 15px;
        height: 30px;
        margin-top: 10px;
        font-size: 14px;
        color: var(--text-second);
      }
    }
  }
}
</style>
