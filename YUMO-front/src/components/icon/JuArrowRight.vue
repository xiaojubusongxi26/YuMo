<template>
  <svg
    t="1716788144009"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="8863"
    :width="props.size"
    :height="props.size"
  >
    <path
      d="M370.7 840.4c-12.1 0-24.2-4.6-33.4-13.8-18.5-18.5-18.5-48.3 0-66.8L587 510.1 337.3 260.4c-18.5-18.5-18.5-48.3 0-66.8s48.3-18.5 66.8 0l283.1 283.1c18.5 18.5 18.5 48.3 0 66.8L404.1 826.6c-9.2 9.2-21.3 13.8-33.4 13.8z"
      :fill="props.color"
      p-id="8864"
    ></path>
  </svg>
</template>

<script setup lang="ts">
const props = defineProps(["color", "size"]);
</script>
<style lang="scss" scoped></style>
