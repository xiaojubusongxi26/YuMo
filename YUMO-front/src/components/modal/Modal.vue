<template>
  <div class="modal-box">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { reactive, watchEffect } from "vue";

const props = defineProps({
  x: Number,
  y: Number,
});

const mouse = reactive<any>({
  left: `0px`,
  top: `0px`,
});

watchEffect(() => {
  mouse.left = `${(props.x || 0) - 160}px`;
  mouse.top = `${(props.y || 0) - 110}px`;
  console.log(mouse.value);
});
</script>
<style scoped>
.modal-box {
  position: absolute;
  left: v-bind("mouse.left");
  top: v-bind("mouse.top");
  width: 150px;
  height: 100px;
  background: var(--bg);
  box-sizing: border-box;
  padding: 20px;
  border-radius: 10px;
  transition: 0.3s all;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: var(--text);
  box-shadow: -43px -22px 71px 10px rgba(0, 0, 0, 0.1);
}
</style>
