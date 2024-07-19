<template>
  <div class="ju-popover">
    <div
      class="popover-reference ellipsis"
      ref="referenceRef"
      @mouseenter="visible = true"
      @mouseleave="visible = false"
    >
      <slot name="reference"></slot>
    </div>
    <Teleport to="body">
      <div
        ref="bodyRef"
        class="popover-box"
        :style="{ left: position.x + 'px', top: position.y + 'px' }"
        v-if="visible"
      >
        <div class="popover-content">
          <slot></slot>
          <span v-if="!isDefaultSolt" v-html="referenceContent"></span>
          <span class="popover-arrow"></span>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, reactive, ref, useSlots, watch } from "vue";

// 默认插槽是否有内容
const isDefaultSolt = !!useSlots().default;
const referenceRef = ref();
const referenceContent = ref("");
const bodyRef = ref();
const visible = ref(false);
const position = reactive({
  x: 0,
  y: 0,
});

watch(visible, async (val) => {
  if (val) {
    referenceContent.value = referenceRef.value.innerHTML;
    await nextTick();
    computedPosition();
  }
});

// 计算位置
function computedPosition() {
  const referenceRect = referenceRef.value.getBoundingClientRect();
  const bodyRect = bodyRef.value.getBoundingClientRect();
  const bodyContent = document.querySelector("body")?.getBoundingClientRect();

  position.x =
    referenceRef.value.offsetLeft +
    referenceRect.width / 2 -
    bodyRect.width / 2;
  // body 被卷去的高度 + reference到顶部的绝对距离 - bodyRef的高度
  position.y =
    Math.abs(bodyContent?.top || 0) + referenceRect.top - bodyRect.height;
}

onMounted(() => {});
</script>
<style lang="scss" scoped>
.popover-box {
  max-width: 150px;
  position: absolute;
  background-color: var(--ju-popover-background);
  color: #fff;
  border-radius: 5px;
  z-index: 100003;
  .popover-content {
    position: relative;
    line-height: 16px;
    font-size: 12px;
    padding: 8px;
    .popover-arrow {
      width: 10px;
      height: 10px;
      transform: rotate(45deg);
      transform-origin: center;
      position: absolute;
      bottom: -5px;
      background-color: var(--ju-popover-background);
      left: calc(50% - 5px);
    }
  }
}
</style>
