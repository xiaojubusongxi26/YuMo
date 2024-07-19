<template>
  <div class="drawer-box">
    <div class="drawer-left">
      <drawer-sidebar />
    </div>
    <div class="drawer-right"></div>
  </div>
</template>

<script setup lang="ts">
import DrawerSidebar from "@/components/drawer/DrawerSidebar.vue";
</script>
<style lang="scss" scoped>
.drawer-box {
  height: calc(100vh - 90px);
  box-sizing: border-box;
  display: flex;
  .drawer-left {
    min-width: 300px;
    height: 100%;
    background-color: var(--bg-main);
  }
}
</style>
