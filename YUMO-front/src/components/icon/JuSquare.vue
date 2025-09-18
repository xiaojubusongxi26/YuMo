<template>
  <svg
    t="1746716307566"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="11891"
    :width="props.size"
    :height="props.size"
  >
    <path
      d="M791.1 957.6H233.5c-75.5 0-136.9-61.4-136.9-136.9V199.5C96.6 124 158 62.6 233.5 62.6h557.7c75.5 0 136.9 61.4 136.9 136.9v621.2c-0.1 75.5-61.5 136.9-137 136.9zM233.5 152.1c-26.1 0-47.4 21.3-47.4 47.4v621.2c0 26.1 21.3 47.4 47.4 47.4h557.7c26.1 0 47.4-21.3 47.4-47.4V199.5c0-26.1-21.3-47.4-47.4-47.4H233.5z"
      :fill="props.color"
      class="finish-icon"
      p-id="11892"
    ></path>
    <path
      v-show="props.options.isEnd"
      d="M457.4 702c-11.4 0-22.9-4.4-31.6-13.1L286.3 549.4c-17.5-17.5-17.5-45.8 0-63.3s45.8-17.5 63.3 0l107.8 107.8L675 376.4c17.5-17.5 45.8-17.5 63.3 0s17.5 45.8 0 63.3L489.1 688.9c-8.8 8.7-20.2 13.1-31.7 13.1z"
      :fill="props.color"
      class="finish-icon"
      p-id="11893"
    ></path>
  </svg>
</template>

<script setup lang="ts">
const props = defineProps(["color", "size", "options"]);
</script>
<style lang="scss" scoped></style>
