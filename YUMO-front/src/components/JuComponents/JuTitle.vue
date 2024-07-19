<template>
  <div class="ju-title">
    <div class="pot"></div>
    <div class="title" :class="[props.h]">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface JuTitleModel {
  h: string;
}

const props = defineProps<JuTitleModel>();
</script>
<style lang="scss" scoped>
.ju-title {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  box-sizing: border-box;
  .pot {
    width: 10px;
    height: 100%;
    background-color: var(--theme-color);
    border-radius: 3px;
    margin-right: 6px;
  }
  .h1 {
    font-size: 30px;
    height: 50px;
    line-height: 50px;
  }
  .h2 {
    font-size: 24px;
    height: 40px;
    line-height: 40px;
  }
  .h3 {
    font-size: 20px;
    height: 30px;
    line-height: 30px;
  }
  .h4 {
    font-size: 18px;
    height: 24px;
    line-height: 24px;
  }
  .h5 {
    font-size: 16px;
    height: 20px;
    line-height: 20px;
  }
}
</style>
