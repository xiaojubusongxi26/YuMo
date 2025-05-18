<template>
  <div class="default-box edit-box">
    <div class="edit-bar">
      <div class="icon-bg">
        <ju-upload>
          <ju-icon name="img" :size="20"></ju-icon>
        </ju-upload>
      </div>
    </div>
    <ju-textarea v-model="liveInfo.content" class="edit-input"></ju-textarea>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const liveInfo = ref({
  content: "",
});
</script>
<style lang="scss" scoped>
@import "@/styles/mixin";
.edit-box {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.edit-bar {
  @include flex-center(flex-start);
  padding: 0px 10px;
  height: 50px;
  border-radius: 10px 10px 0 0;
  border-bottom: 2px solid var(--border);
  background-color: var(--bg-menu__hover);
}
.edit-input {
  flex: 1;
  border: none !important;
  background-color: var(--bg-menu__hover);
}
</style>
