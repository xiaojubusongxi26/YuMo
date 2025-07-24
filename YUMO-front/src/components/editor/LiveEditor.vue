<template>
  <div class="color-default edit-box">
    <div class="edit-bar flex justify-start items-center">
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
.edit-box {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.edit-bar {
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
.icon-bg {
  transition: 0.1 all;
  cursor: pointer;
  padding: 8px;
  border-radius: 5px;
  &:hover {
    background-color: var(--box-border);
    color: var(--bg);
  }
}
</style>
