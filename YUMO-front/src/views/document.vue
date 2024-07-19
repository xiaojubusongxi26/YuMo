<template>
  <div class="view-box">
    <document-preview />
  </div>
</template>

<script setup lang="ts">
import DocumentPreview from "@/components/document/DocumentPreview.vue";
</script>
<style lang="scss" scoped>
.view-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-90px);
  width: 100vw;
  max-width: 100vw;
  padding-top: 0;
}
</style>
