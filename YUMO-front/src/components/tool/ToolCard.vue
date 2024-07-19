<template>
  <div class="tool-card">
    <h1>{{ props.tools.title }}</h1>
    <JuDivider />
    <div class="web-box">
      <a
        v-for="web in props.tools.webs"
        :href="web.url"
        :key="web.url"
        class="web-item"
        target="_blank"
      >
        <img :src="web.icon" alt="" />
        <div>{{ web.title }}</div>
        <div class="description">{{ web.description }}</div>
      </a>
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
@import "@/styles/mixin";
.tool-card {
  h1 {
    margin: 10px 0;
  }
  .web-box {
    padding: 20px 0 60px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    .web-item {
      @include card-box();
      @include box-border();
      width: 200px;
      height: 70px;
      padding: 10px 10px 10px 70px;
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
      div {
        flex: 1;
        align-content: center;
      }
      .description {
        font-size: 12px;
        color: var(--text-second);
        @include ellipsis();
      }
    }
  }
}
</style>
