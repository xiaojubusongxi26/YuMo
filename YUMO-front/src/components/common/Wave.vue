<template>
  <section class="wave-box waves-area">
    <svg
      class="waves-svg"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shape-rendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352Z"
        ></path>
      </defs>
      <g
        class="parallax"
        :class="{ 'wave-light': isLight, 'wave-dark': !isLight }"
      >
        <use href="#gentle-wave" x="48" y="0"></use>
        <use href="#gentle-wave" x="48" y="3"></use>
        <use href="#gentle-wave" x="48" y="5"></use>
        <use href="#gentle-wave" x="48" y="7"></use>
      </g>
    </svg>
  </section>
</template>

<script setup lang="ts">
import { watch, ref } from "vue";

import { appStore } from "@/store/app";

const app = appStore();

const isLight = ref<boolean>(true);

watch(
  () => app.theme,
  (val) => {
    isLight.value = val === "light";
  },
  {
    immediate: true,
  }
);
</script>
<style lang="scss" scoped>
.wave-box {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: -11px;
  z-index: 5;
  pointer-events: none;
  .waves-svg {
    width: 100%;
    height: 3.75rem;
    .parallax > use {
      animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
      will-change: transform;
    }
    .parallax > use:nth-child(1) {
      animation-delay: -2s;
      animation-duration: 7s;
    }

    .parallax > use:nth-child(2) {
      animation-delay: -3s;
      animation-duration: 10s;
    }
    .parallax > use:nth-child(3) {
      animation-delay: -4s;
      animation-duration: 13s;
    }
    .parallax > use:nth-child(4) {
      animation-delay: -5s;
      animation-duration: 20s;
    }
  }
}

$bglight: (
  1: rgba(247, 249, 254, 0.741),
  2: rgba(247, 249, 254, 0.51),
  3: rgba(247, 249, 254, 0.212),
  4: #f7f9fe,
);
.wave-light {
  @each $i, $color in $bglight {
    use:nth-child(#{$i}) {
      fill: $color;
    }
  }
}

$bgdark: (
  1: rgba(24, 23, 29, 0.784),
  2: rgba(24, 23, 29, 0.502),
  3: rgba(24, 23, 29, 0.243),
  4: #000000,
);
.wave-dark {
  @each $i, $color in $bgdark {
    use:nth-child(#{$i}) {
      fill: $color;
    }
  }
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
</style>
