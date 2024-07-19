<template>
  <header class="header-bar">
    <slot></slot>
  </header>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
@import "@/styles/mixin";
.header-bar {
  @include card-box();
  @include box-border(2px);
  background-color: var(--bg-main);
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 10px;
  height: 50px;
  line-height: 50px;
  margin-bottom: 30px;
  overflow: hidden;
  padding: 0 10px;
}
</style>
