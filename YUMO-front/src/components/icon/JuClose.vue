<template>
  <svg
    t="1716529496188"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="7980"
    :width="props.size"
    :height="props.size"
  >
    <path
      d="M806.2 281.8L281.9 806.2c-17.5 17.5-46 17.5-63.6 0-17.5-17.5-17.5-46 0-63.6l524.3-524.3c17.5-17.5 46-17.5 63.6 0s17.6 46 0 63.5z"
      :fill="props.color"
      p-id="7981"
    ></path>
    <path
      d="M806.2 806.2c-17.5 17.5-46 17.5-63.6 0L218.3 281.8c-17.5-17.5-17.5-46 0-63.6s46-17.5 63.6 0l524.3 524.3c17.6 17.7 17.6 46.1 0 63.7z"
      :fill="props.color"
      p-id="7982"
    ></path>
  </svg>
</template>

<script setup lang="ts">
const props = defineProps(["color", "size"]);
</script>
<style lang="scss" scoped></style>
