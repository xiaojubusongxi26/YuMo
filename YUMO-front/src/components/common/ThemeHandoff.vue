<template>
  <div class="theme-handoff" @click="switchTheme">
    <span class="light theme--span" :style="{ top: theme ? '0' : '-30px' }">
      <svg
        t="1707471849820"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1479"
        width="30"
        height="30"
      >
        <path
          d="M692.38 468.47l-75.84-47.85-94.5-17.5s-72.32-7-78.16 0c-5.84 7-130.66 84-130.66 84l-67.68 94.5-7 66.5-9.32 144.87h68.82l19.84-168 40.84-85.37s58.32-43.15 61.82-43.15 90.8-19.85 90.8-19.85l59.7 15.18 91.01 45.5 40.82 59.5 24.5 161-4.66 35.19h65.34v-178.7l-95.67-145.82z"
          fill="#5D9CEC"
          p-id="1480"
        ></path>
        <path
          d="M830.05 525.62l-94.72-117.25-83.78-53.07-130.09-22.75h-68.25l-81.68 26.25-113.16 73.5-65.91 103.82-26.25 163.35-12.84 93.51h65.34l11.66-78.94 3.5-100.32 23.34-47.25 58.32-85.18 42.59-35 51.91-25.68 82.84-12.25s72.34 2.93 77.59 4.1c5.25 1.15 90.41 30.32 90.41 30.32l87.5 80.01 22.18 60.57 15.16 37.93v95.07l2.34 76.62h67.66V632.37l-25.66-106.75z"
          fill="#A0D468"
          p-id="1481"
        ></path>
        <path
          d="M936.21 644.62l-45.5-177.33-96.83-114.32-124.83-78.17-147.01-22.18h-86.32l-92.18 32.68-89.82 54.82-86.34 91-54.84 91.68-29.16 142.82v127.36h70l5.84-191.51 24.5-73.5 59.5-87.5 73.5-58.16 98-42.19 113.16-8.15 98 17.5 123.67 71.15 95.66 136.5 23.34 235.86h73.5z"
          fill="#FC6E51"
          p-id="1482"
        ></path>
        <path
          d="M511.34 456.99c-123.72 0-224 100.27-224 224v112h37.34v-112c0-49.87 19.42-96.74 54.67-132.01 35.25-35.25 82.13-54.66 131.99-54.66 49.86 0 96.74 19.42 131.99 54.66 35.25 35.26 54.67 82.13 54.67 132v112h37.34v-112c0-123.72-100.29-223.99-224-223.99z"
          fill="#AC92EB"
          p-id="1483"
        ></path>
        <path
          d="M511.34 382.31c-164.95 0-298.66 133.71-298.66 298.67v112H250v-112c0-35.3 6.9-69.53 20.52-101.72 13.17-31.12 32.02-59.06 56.03-83.1 24.01-24.01 51.96-42.85 83.08-56 32.18-13.62 66.4-20.54 101.7-20.54s69.52 6.92 101.7 20.54c31.12 13.15 59.08 31.99 83.08 56 24.01 24.04 42.86 51.98 56.03 83.1 13.62 32.18 20.52 66.42 20.52 101.72v112H810v-112c0-164.96-133.71-298.67-298.66-298.67z"
          fill="#4FC2E9"
          p-id="1484"
        ></path>
        <path
          d="M511.34 307.63C305.15 307.63 138 474.79 138 680.98v112h37.34v-112c0-45.39 8.87-89.39 26.39-130.78 16.93-40 41.15-75.93 72.02-106.8 30.87-30.87 66.82-55.13 106.82-72.02 41.4-17.53 85.39-26.39 130.77-26.39 45.38 0 89.37 8.86 130.77 26.39 40 16.9 75.95 41.15 106.82 72.02 30.87 30.87 55.1 66.8 72.02 106.8 17.51 41.4 26.39 85.39 26.39 130.78v112h37.34v-112c-0.01-206.19-167.16-373.35-373.34-373.35z"
          fill="#FFCE54"
          p-id="1485"
        ></path>
        <path
          d="M511.34 232.99c-247.42 0-448 200.57-448 448v112h37.34v-112c0-55.48 10.84-109.24 32.25-159.85 20.68-48.89 50.3-92.83 88.02-130.54 37.74-37.73 81.65-67.35 130.55-88.02 50.6-21.41 104.38-32.27 159.84-32.27 55.45 0 109.24 10.86 159.84 32.27 48.9 20.67 92.82 50.28 130.55 88.02 37.72 37.71 67.33 81.65 88.02 130.54C911.15 571.75 922 625.5 922 680.98v112h37.34v-112c-0.01-247.43-200.59-447.99-448-447.99z"
          fill="#ED5564"
          p-id="1486"
        ></path>
      </svg>
    </span>
    <span class="dark theme--span" :style="{ top: !theme ? '0' : '30px' }">
      <svg
        t="1707471868931"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1711"
        width="24"
        height="24"
      >
        <path
          d="M551.41 326.72h-74.14c-10.24 0-18.56-8.3-18.56-18.54 0-10.24 8.31-18.54 18.56-18.54h74.14c10.24 0 18.56 8.3 18.56 18.54 0 10.24-8.32 18.54-18.56 18.54z"
          fill="#F6BB42"
          p-id="1712"
        ></path>
        <path
          d="M773.93 697.54c-245.78 0-445.01-199.23-445.01-445 0-55.23 10.08-108.13 28.48-156.94C189.08 159.05 69.34 321.61 69.34 512.14c0 245.76 199.23 445 445.01 445 190.51 0 353.07-119.74 416.51-288.07-48.8 18.4-101.7 28.47-156.93 28.47z"
          fill="#FFCE54"
          p-id="1713"
        ></path>
        <path
          d="M551.41 920.05c-245.75 0-444.98-199.23-444.98-445 0-113.41 42.44-216.91 112.26-295.48-91.61 81.5-149.35 200.28-149.35 332.57 0 245.76 199.23 445 445.01 445 132.26 0 251.05-57.74 332.55-149.37-78.57 69.85-182.08 112.28-295.49 112.28z"
          fill="#F6BB42"
          p-id="1714"
        ></path>
        <path
          d="M736.84 308.17c0 10.24-8.31 18.54-18.55 18.54-10.22 0-18.53-8.3-18.53-18.54 0-10.24 8.32-18.54 18.53-18.54 10.24 0 18.55 8.3 18.55 18.54z"
          fill="#4A89DC"
          p-id="1715"
        ></path>
        <path
          d="M644.14 493.59c0 10.23-8.31 18.54-18.56 18.54-10.24 0-18.53-8.32-18.53-18.54 0-10.24 8.29-18.54 18.53-18.54 10.25 0 18.56 8.3 18.56 18.54z"
          fill="#48CFAD"
          p-id="1716"
        ></path>
        <path
          d="M959.33 270.79c0 10.24-8.31 18.54-18.53 18.54-10.24 0-18.56-8.3-18.56-18.54 0-10.24 8.31-18.54 18.56-18.54 10.22 0 18.53 8.29 18.53 18.54z"
          fill="#ED5564"
          p-id="1717"
        ></path>
        <path
          d="M625.58 85.37c0 10.24-8.29 18.54-18.53 18.54-10.24 0-18.56-8.3-18.56-18.54 0-10.23 8.31-18.53 18.56-18.53 10.25 0 18.53 8.3 18.53 18.53z"
          fill="#AC92EB"
          p-id="1718"
        ></path>
        <path
          d="M514.35 234c-10.24 0-18.56 8.31-18.56 18.54V363.8c0 10.23 8.31 18.53 18.56 18.53 10.22 0 18.53-8.3 18.53-18.53V252.54c0-10.23-8.31-18.54-18.53-18.54z"
          fill="#FFCE54"
          p-id="1719"
        ></path>
        <path
          d="M829.55 437.96c-10.24 0-18.53 8.3-18.53 18.54v111.24c0 10.24 8.29 18.54 18.53 18.54 10.24 0 18.53-8.3 18.53-18.54V456.51c-0.01-10.25-8.29-18.55-18.53-18.55z"
          fill="#F6BB42"
          p-id="1720"
        ></path>
        <path
          d="M866.63 530.67h-74.17c-10.24 0-18.53-8.3-18.53-18.53 0-10.24 8.29-18.54 18.53-18.54h74.17c10.24 0 18.53 8.3 18.53 18.54 0 10.22-8.28 18.53-18.53 18.53z"
          fill="#FFCE54"
          p-id="1721"
        ></path>
      </svg>
    </span>
    <span class="selected" :style="{ left: theme ? '0' : '44px' }"></span>
  </div>
</template>
t

<script setup lang="ts">
import { onUnmounted, ref, watch } from "vue";
import { appStore } from "@/store/app";
import { useRouter } from "vue-router";

const router = useRouter();

// 当前主题 true：light，false：dark
let theme = ref<boolean>(appStore().theme === "light");

// 禁止切换
const disabled = ref<boolean>(false);
const lastTheme = ref<string>("");
// 切换主题
const switchTheme = () => {
  if (disabled.value) return;
  theme.value = !theme.value;
  const themeName = `theme-${theme.value ? "light" : "dark"}`;
  appStore().toggleTheme(theme.value ? "light" : "dark");
  let html = document.querySelector("html");
  // 设置要使用的主题class名
  html?.setAttribute("class", themeName);
};

// ------------------------------ 进入游记，直接切换为暗色主题 ------------------------------
watch(
  () => router.currentRoute.value.path,
  (val) => {
    if (val.includes("/map")) {
      lastTheme.value = theme.value ? "light" : "dark";
      theme.value && switchTheme();
      disabled.value = true;
    } else {
      disabled.value = false;
      if (lastTheme.value === 'light') {
        switchTheme();
        lastTheme.value = "";
      }
    }
  },
  {
    immediate: true,
  }
);
</script>

<style lang="scss" scoped>
.theme-handoff {
  height: 36px;
  line-height: 36px;
  width: 100px;
  border: 3px solid var(--theme-border);
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: var(--theme-bg);
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  .theme--span {
    position: absolute;
    top: 0;
    z-index: 2;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 47px;
    height: 30px;
  }
  .light {
    left: 0;
  }
  .dark {
    right: 0;
  }
  .selected {
    width: 50px;
    height: 30px;
    background: var(--theme-select);
    border-radius: 15px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transition: 0.3s all;
  }
}
</style>
