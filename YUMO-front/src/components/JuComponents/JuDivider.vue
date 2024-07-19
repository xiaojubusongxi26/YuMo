<template>
  <div class="ju-divider">
    <div class="divider__line"></div>
    <div class="divider__text">
      <template v-if="props.title">
        <span>{{ props.title }}</span>
      </template>
      <slot v-else></slot>
    </div>
    <div class="divider__line"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["title"]);
</script>
<style lang="scss" scoped>
.ju-divider {
  display: flex;
  align-items: center;
  .divider__text {
    font-size: 12px;
    color: var(--text-second);
    text-wrap: nowrap;
    span {
      padding: 10px;
    }
  }
  .divider__line {
    width: 100%;
    height: 1px;
    background-color: var(--divider);
  }
}
</style>
