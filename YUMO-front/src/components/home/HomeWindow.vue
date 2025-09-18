<template>
  <div class="window-box flex-c">
    <template v-if="isDark">
      <div class="movie_bar" style="top: 0"></div>
      <div class="movie_bar" style="bottom: 0"></div>
    </template>
    <div class="mask"></div>
    <div class="wallpaper" ref="windowRef"></div>
    <!-- <wave v-if="!isDark" /> -->
    <h1>嘿，好久不见</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
// import wave from "@/components/common/Wave.vue";
import { appStore } from "@/store/app";

const app = appStore();
const webOption = app.webOption;

const isDark = ref<boolean>(false);

watch(
  () => app.theme,
  (val) => {
    isDark.value = val === "dark";
  },
  {
    immediate: true,
  }
);

const windowRef = ref();

onMounted(() => {
  windowRef.value.style.backgroundImage = `url(${webOption.homeWallPaper})`;
});
</script>

<style scoped lang="scss">
.window-box {
  width: 100%;
  height: 100vh;
  border-radius: 12px;
  margin-bottom: 30px;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 0;
  border: none;
  overflow: hidden;
  position: relative;
  transition:
    0.5s width,
    0.5s height;
  .wallpaper {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    background-size: cover;
    background-position: center;
    transition: 1.8s all;
    position: static;
  }
  .mask {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--mask-window);
  }
  h1 {
    z-index: 3;
    color: #f8f9fe;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: show-in 2s ease-out;
    text-shadow:
      0px 0px 10px #f8f9fe,
      0px 0px 20px #f8f9fe,
      0px 0px 30px #f8f9fe,
      0px 0px 40px #f8f9fe;
    opacity: 0.8;
    @keyframes show-in {
      from {
        opacity: 0.3;
      }
      to {
        opacity: 0.8;
      }
    }
  }
  .movie_bar {
    position: absolute;
    width: 100%;
    background-color: #000;
    max-height: 60px;
    z-index: 3;
    animation: show-in-bar 2s ease-out forwards;
    @keyframes show-in-bar {
      from {
        height: 0;
        min-height: 0;
      }
      to {
        height: 5vw;
        min-height: 50px;
      }
    }
  }
}
</style>
