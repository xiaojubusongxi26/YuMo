<template>
  <div
    class="tag-box"
    :class="{ 'tag-radius': props.isRadius, 'tag-line': !props.isRadius }"
  >
    <span class="font-famaily__title tag__pre"># </span>
    <span class="tag-name">{{ props.tag.tagName }}</span>
  </div>
</template>

<script setup lang="ts">
import { TagModule } from "@/modules/page";
import { ref } from "vue";
const props = defineProps<{
  tag: TagModule;
  isRadius?: boolean;
}>();

const colors = ref([
  "#FFB137",
  "#F36747",
  "#F197A2",
  "#4152A5",
  "#6EB572",
  "#FF4242",
  "#568BFC",
]);
const color = ref(colors.value[Math.floor(Math.random() * 7)]);
const colorH = ref(color.value + "DD");
</script>
<style lang="scss" scoped>
.tag-box {
  margin-right: 15px;
  user-select: none;
  box-sizing: border-box;
  position: relative;
  padding: 0 6px;
  cursor: pointer;
  .tag__pre {
    font-weight: bolder;
    color: var(--text-second);
  }
}
.tag-line {
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
}
.tag-radius {
  height: 30px;
  line-height: 30px;
  border-radius: 10px;
  background-color: v-bind(color);
  color: var(--theme-color-light);
  transition: 0.2s background-color;
  .tag__pre {
    color: var(--theme-color-light);
  }
  &:hover {
    background-color: v-bind(colorH);
  }
}
</style>
