<template>
  <svg
    t="1719123513082"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="7105"
    :width="props.size"
    :height="props.size"
  >
    <path
      d="M883.1 557.2H141.5c-24.8 0-44.9-20.1-44.9-44.9 0-24.8 20.1-44.9 44.9-44.9H883c24.8 0 44.9 20.1 44.9 44.9 0.1 24.7-20 44.9-44.8 44.9z"
      :fill="props.color"
      p-id="7106"
    ></path>
    <path
      d="M512.3 927.9c-24.8 0-44.9-20.1-44.9-44.9V141.5c0-24.8 20.1-44.9 44.9-44.9 24.8 0 44.9 20.1 44.9 44.9V883c0 24.8-20.1 44.9-44.9 44.9z"
      :fill="props.color"
      p-id="7107"
    ></path>
  </svg>
</template>

<script setup lang="ts">
const props = defineProps(["color", "size"]);
</script>
<style lang="scss" scoped></style>
