<template>
  <svg
    t="1716788119978"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="8697"
    :width="props.size"
    :height="props.size"
  >
    <path
      d="M653.8 840.4c12.1 0 24.2-4.6 33.4-13.8 18.5-18.5 18.5-48.3 0-66.8L437.5 510.1l249.7-249.7c18.5-18.5 18.5-48.3 0-66.8s-48.3-18.5-66.8 0L337.3 476.7c-18.5 18.5-18.5 48.3 0 66.8l283.1 283.1c9.2 9.2 21.3 13.8 33.4 13.8z"
      :fill="props.color"
      p-id="8698"
    ></path>
  </svg>
</template>

<script setup lang="ts">
const props = defineProps(["color", "size"]);
</script>
<style lang="scss" scoped></style>
