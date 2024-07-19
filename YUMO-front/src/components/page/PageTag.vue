<template>
  <div class="tag-box">
    <span class="font-famaily__title tag__pre"># </span>
    <span class="tag-name">{{ props.tag.tagName }}</span>
  </div>
</template>

<script setup lang="ts">
import { TagModule } from "@/modules/page";
const props = defineProps<{
  tag: TagModule;
}>();
</script>
<style lang="scss" scoped>
.tag-box {
  margin-right: 15px;
  user-select: none;
  box-sizing: border-box;
  position: relative;
  padding: 0 6px;
  &::before {
    content: "";
    position: absolute;
    width: 0;
    left: 0;
    bottom: 0;
    height: 3px;
    border-radius: 1px;
    background-color: var(--box-border);
    opacity: 0;
  }
  &:hover {
    .tag__pre {
      color: var(--box-border);
    }
    &::before {
      width: 100%;
      opacity: 1;
      transition: width 0.3s, opacity 0.3s 0.1s;
    }
  }
  cursor: pointer;
  .tag__pre {
    font-weight: bolder;
    color: var(--text-second);
  }
}
</style>
