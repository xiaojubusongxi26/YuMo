<template>
  <div class="login-box">
    <img class="login--bg" ref="loginBgRef" :src="loginBg" alt="" />
    <div class="login--card">
      <span
        class="web--title"
        @click="triggerInput"
        :style="{ color: mainColor }"
        >{{ webOption.webTitle }}</span
      >
      <span class="web--detail">{{ webOption.webDetail }}</span>
      <div class="pwd-box__input">
        <span
          class="pwd-icon pwd-icon--left"
          ref="iconRef"
          :style="{
            left: isShowPwd ? '5px' : '-40px',
            width: iconBoxWidth + 'px',
            background: isShowPwd ? '#275DC5' : '#fff',
          }"
        >
          <svg
            t="1707201532876"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="65479"
            width="36"
            height="36"
          >
            <path
              d="M464 736v144a32 32 0 0 1-32 32h-112a32 32 0 0 1-32-32v-64c0-129.28 176-168.96 176-80zM736 800v64c0 33.6-14.4 48-32 48h-112a32 32 0 0 1-32-32c0-150.88-4.8-159.04 14.08-177.92C616.32 659.84 736 716.96 736 800z"
              fill="#FFE5C0"
              p-id="65480"
            ></path>
            <path
              d="M560 848h176v64H560zM288 848h176v64H288z"
              fill="#68539B"
              p-id="65481"
            ></path>
            <path
              d="M472 94.88A238.88 238.88 0 0 1 608 310.4a423.36 423.36 0 0 0 156.48 328.64C870.4 725.6 864 728.16 864 848h80c0-64 7.68-122.08-50.72-169.12-61.28-49.76-118.72-91.04-164.16-186.4A424.64 424.64 0 0 1 688 310.4 240 240 0 0 0 512 80a238.88 238.88 0 0 0-40 14.88z"
              fill="#FFE5C0"
              p-id="65482"
            ></path>
            <path
              d="M80 848h208v-48c0-103.36 176-157.28 176-64a240 240 0 0 1 47.04-144A237.92 237.92 0 0 1 560 736c0-89.44 176-48.96 176 80v32h128c0-64 7.68-122.08-50.72-169.12-61.28-49.76-118.72-91.04-164.16-186.4A424.64 424.64 0 0 1 608 310.4a238.88 238.88 0 0 0-136-215.52A240 240 0 0 0 336 310.4a423.04 423.04 0 0 1-156.48 328.64C73.6 725.6 80 728.16 80 848z"
              fill="#FEF5E3"
              p-id="65483"
            ></path>
            <path
              d="M80 784h208v64H80zM736 784h208v64H736z"
              fill="#68539B"
              p-id="65484"
            ></path>
            <path
              d="M560 733.92V896a48 48 0 0 1-96 0c0-153.76-12.48-224 48.96-304A236.96 236.96 0 0 1 560 733.92z"
              fill="#898EC9"
              p-id="65485"
            ></path>
            <path
              d="M624 336c0 1.6 6.08 0-224 0a105.28 105.28 0 0 1 23.2-65.92C446.4 240 476.16 234.24 512 224c46.56 13.28 36.48 11.04 38.08 11.04A105.76 105.76 0 0 1 624 336z"
              fill="#2DE0C7"
              p-id="65486"
            ></path>
            <path
              d="M498.24 336h-36.96l-38.08-65.92A96 96 0 0 1 448 247.84zM608.96 336h-73.92l-58.72-101.76c1.6 0 19.52-5.44 36.32-10.24 34.72 9.92 36.32 10.24 37.92 11.04s-0.48-1.28 58.4 100.96z"
              fill="#93E6D9"
              p-id="65487"
            ></path>
            <path
              d="M591.04 118.4a96 96 0 0 1-158.08 0A234.4 234.4 0 0 1 512 80a232.96 232.96 0 0 1 79.04 38.4z"
              fill="#68539B"
              p-id="65488"
            ></path>
            <path
              d="M220.48 576.96A407.04 407.04 0 0 0 320 310.4a256 256 0 0 1 109.44-209.12A16 16 0 0 1 446.72 128 224 224 0 0 0 352 310.4a437.92 437.92 0 0 1-107.52 288 16 16 0 0 1-24-21.44zM288 864H80a16 16 0 0 1-16-16c0-68.48-7.68-129.6 56.64-181.6C176 621.92 172.8 624 176 620.64a16 16 0 0 1 21.76 23.36c-4.16 3.84 0.96 0-57.44 48C88.96 733.12 96 786.24 96 832h176v-16c0-114.56 128-171.2 181.6-131.84a256 256 0 0 1 46.72-101.92 16 16 0 0 1 26.56 1.44 253.76 253.76 0 0 1 44 100.16 89.44 89.44 0 0 1 75.04-6.72 16 16 0 0 1-3.68 32c-6.4 0-38.72-13.44-56.8 4.8A32 32 0 0 0 576 736a16 16 0 0 1-16 16c-32 0 1.6-49.12-48-131.52A226.56 226.56 0 0 0 480 736a16 16 0 0 1-32 0c0-65.6-144-27.52-144 80v32a16 16 0 0 1-16 16zM944 864H736c-39.36 0 14.4-72.32-48.96-129.28a16 16 0 0 1 21.44-23.68C756.16 753.92 752 794.56 752 832h176c0-99.36 4.48-100.48-93.6-180.64A436.64 436.64 0 0 1 672 310.4 224 224 0 0 0 512 96c-4.16 1.12-8.32 2.56-12.32 4a16 16 0 0 1-10.88-30.08A56.48 56.48 0 0 1 516.16 64 256 256 0 0 1 704 310.4a405.28 405.28 0 0 0 150.56 316.16l48.8 40C969.28 720 960 787.52 960 848a16 16 0 0 1-16 16z"
              fill="#35214C"
              p-id="65489"
            ></path>
            <path
              d="M320 624V304a16 16 0 0 1 32 0v320a16 16 0 0 1-32 0zM672 624V304a16 16 0 0 1 32 0v320a16 16 0 0 1-32 0zM432 928h-48a16 16 0 0 1 0-32h48a16 16 0 0 0 16-16v-144c0-62.72-144-29.76-144 80v64a16 16 0 0 0 16 16 16 16 0 0 1 16 16c0 30.56-64 16-64-32v-64c0-149.12 208-193.12 208-80v144a48 48 0 0 1-48 48zM704 928h-112a48 48 0 0 1-48-48c0-147.2-6.24-164.16 18.72-189.28 22.08-22.08 52.48-22.08 83.2-13.6a16 16 0 1 1-8.16 30.88c-17.92-4.96-39.2-7.68-52.32 5.44S576 723.68 576 880a16 16 0 0 0 16 16h112c21.76 0 16-48 16-96a92.16 92.16 0 0 0-32.96-65.28 16 16 0 0 1 21.44-23.68C760.64 757.92 752 801.6 752 864c0 48-24.8 64-48 64z"
              fill="#35214C"
              p-id="65490"
            ></path>
            <path
              d="M512 960a64 64 0 0 1-64-64c0-149.92-13.12-228.16 52.32-313.76a16 16 0 0 1 26.56 1.44A256 256 0 0 1 576 733.92V896a64 64 0 0 1-64 64z m0-339.52c-42.56 69.76-32 121.76-32 275.52a32 32 0 0 0 64 0c0-167.2 8.32-208-31.2-275.52zM624 352h-128a16 16 0 0 1 0-32h110.56a90.72 90.72 0 0 0-64-70.72L512 240c-32.8 9.28-57.12 12.8-78.4 41.12A88.32 88.32 0 0 0 417.44 320H432a16 16 0 0 1 0 32h-32a16 16 0 0 1-16-16 121.92 121.92 0 0 1 88.48-117.28c49.28-13.92 31.2-13.92 79.2 0A122.72 122.72 0 0 1 640 336a16 16 0 0 1-16 16zM419.84 128a16 16 0 0 1 3.68-22.08l5.92-4.16a16 16 0 0 1 24.16 17.28 80 80 0 0 0 113.92 3.04A219.52 219.52 0 0 0 512 96c-4.16 1.12-8.32 2.56-12.32 4a16 16 0 0 1-10.88-30.08A56.48 56.48 0 0 1 516.16 64a249.92 249.92 0 0 1 84.48 41.6 16 16 0 0 1 3.52 22.4 112 112 0 0 1-184.32 0zM880 800h-144a16 16 0 0 1 0-32h144a16 16 0 0 1 0 32zM288 800H144a16 16 0 0 1 0-32h144a16 16 0 0 1 0 32z"
              fill="#35214C"
              p-id="65491"
            ></path>
            <path
              d="M464 864h-112a16 16 0 0 1 0-32h112a16 16 0 0 1 0 32zM688 864h-112a16 16 0 0 1 0-32h112a16 16 0 0 1 0 32z"
              fill="#35214C"
              p-id="65492"
            ></path>
          </svg>
        </span>
        <input
          class="pwd__input"
          ref="inputRef"
          @keydown.enter="login"
          :style="{ background: isShowPwd ? '#275DC5' : '#fff' }"
          type="password"
        />
        <div class="login--prompt" :style="{ top: isLogin ? '0' : '46px' }">
          登录成功
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick } from "vue";
import { useRouter } from "vue-router";
import { appStore } from "@/store/app";

const { webOption } = appStore();
const router = useRouter();

// ------------------------------ 密码控制 ------------------------------
// 输入框显示
let isShowPwd = ref<boolean>(false);
// 键入后动画控制
let isLogin = ref<boolean>(false);
// 输入框
const inputRef = ref();
const iconRef = ref();
let iconBoxWidth = ref<number>(0);

// 展示输入框
const triggerInput = () => {
  isShowPwd.value = !isShowPwd.value;
  iconBoxWidth.value = isShowPwd.value ? 36 : 0;
};

// 登录
const login = () => {
  loginSuccessAni();
};

// 登录成功后动画
const loginSuccessAni = () => {
  iconBoxWidth.value = inputRef.value.getBoundingClientRect().width + 45;
  isLogin.value = true;
  setTimeout(() => {
    router.push({
      path: "/",
    });
  }, 700);
};

// ------------------------------ 获取背景图主要色 ------------------------------
const loginBg = ref<string>("");
// 获取元素dom
const loginBgRef = ref();
// 主要颜色
const mainColor = ref<string>("");

const getMainColor = () => {
  loginBgRef.value.crossOrigin = "anonymous";
  loginBgRef.value.onload = () => {
    // 背景图宽高
    const w = loginBgRef.value.width;
    const h = loginBgRef.value.height;
    // 创建画布
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    // 绘制图片在画布上
    const context = canvas.getContext("2d");
    context.drawImage(loginBgRef.value, 0, 0);
    // 获取像素点rgba数据
    let imageData = context.getImageData(0, 0, w, h).data;
    // 使用 Map 存储颜色及其出现次数
    const blockSize = 100; // 设置块的大小
    const colorMap = new Map<string, number>();

    for (let y = 0; y < h; y += blockSize) {
      for (let x = 0; x < w; x += blockSize) {
        const index = (y * w + x) * 4; // 计算当前块的起始索引
        const r = imageData[index];
        const g = imageData[index + 1];
        const b = imageData[index + 2];
        const a = imageData[index + 3];
        const key = `${r},${g},${b},${a}`;
        colorMap.set(key, (colorMap.get(key) || 0) + 1);
      }
    }

    const sortedColors = [...colorMap.entries()].sort((a, b) => b[1] - a[1]);
    mainColor.value = `rgba(${sortedColors[0][0]})`;
  };
  loginBgRef.value.src = webOption.loginBg;
};

onMounted(() => {
  // getMainColor();
  loginBgRef.value.src = webOption.loginBg;
});
</script>

<style lang="scss" scoped>
@import "@/styles/login.scss";
</style>
