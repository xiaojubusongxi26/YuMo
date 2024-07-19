<template>
  <div class="ju-pagination">
    <!-- 上一页 -->
    <div
      class="page_num page_btn"
      v-if="pageNum !== 1"
      @click="goPreOrNext(-1)"
      style="left: 0"
    >
      <div class="page_btn--box">
        <span class="arrow__btn arrow__btn__pre">
          <svg
            t="1714056994025"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4553"
            width="16"
            height="16"
          >
            <path
              d="M294.13376 512c0-13.70112 5.23264-27.40224 15.6672-37.84704l328.704-328.69376c20.91008-20.91008 54.80448-20.91008 75.70432 0 20.89984 20.89984 20.89984 54.79424 0 75.70432L423.36256 512l290.83648 290.83648c20.89984 20.89984 20.89984 54.80448 0 75.70432-20.89984 20.91008-54.79424 20.91008-75.70432 0l-328.704-328.69376C299.35616 539.40224 294.13376 525.70112 294.13376 512z"
              p-id="4554"
              fill="currentColor"
            ></path>
          </svg>
        </span>
        <span class="page_btn__text btn__pre">上页</span>
      </div>
    </div>
    <!-- 页码 -->
    <div
      class="page_num"
      :class="{ 'page_num--active': pageNum === page + 1 }"
      v-for="page in pageNumberList"
      :key="page"
      @click="goOtherPage(page + 1)"
    >
      {{ page + 1 }}
    </div>
    <!-- 当前页码 -->
    <template v-if="isShrink && pageNum && pageNum > 3 && pageNum < pageMax">
      <span class="space__point" v-if="pageNum !== 4">...</span>
      <div
        class="page_num page_num--active"
        @click="goOtherPage(pageNum as number)"
      >
        {{ pageNum }}
      </div>
    </template>
    <!-- 最后一页 -->
    <template v-if="pageMax > 5">
      <span class="space__point" v-if="pageNum !== pageMax - 1">...</span>
      <div
        class="page_num"
        :class="{ 'page_num--active': pageNum === pageMax }"
        @click="goOtherPage(pageMax)"
      >
        {{ pageMax }}
      </div>
    </template>
    <!-- 指定页码 -->
    <div
      class="page_num page_pointer"
      :style="{ width: showInput ? '100px' : '40px' }"
    >
      <input
        class="pointer__input"
        :key="Number(showInput)"
        v-model="inputPageNum"
        :max="pageNumberList.length"
        step="1"
        type="number"
        v-InputFocusAuto="showInput"
        @keydown.enter="goPointer"
        @blur="inputBlur"
      />
      <div class="arrow__input" @click="showInput = true">
        <svg
          t="1714063568598"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="14717"
          width="20"
          height="20"
        >
          <path
            d="M832.038608 64.662657H192.030028C121.255125 64.662657 63.940169 121.98845 63.940169 192.694717v446.793671C63.940169 710.205493 121.255125 767.643272 192.030028 767.643272h133.353183a63.940169 63.940169 0 0 1 55.219742 31.576328l76.099638 129.83828c12.358154 21.093031 33.790754 31.626903 55.216129 31.626903s42.832688-10.544709 55.198067-31.619678l76.222461-129.870792a63.940169 63.940169 0 0 1 55.212517-31.551041h133.54103c70.576219 0 127.732228-57.289669 127.732227-127.800865V192.391272C959.825022 121.85479 902.643727 64.662657 832.038608 64.662657zM895.884854 639.842407A63.85347 63.85347 0 0 1 832.092795 703.703103h-133.54103a127.753903 127.753903 0 0 0-110.349172 63.09847l-76.222461 129.856342a0.274545 0.274545 0 0 1 0-0.050574h-0.032512s-0.021675 0.061411-0.032512 0.061412l-76.1466-129.85273A127.804477 127.804477 0 0 0 325.383211 703.703103H192.030028A64.207489 64.207489 0 0 1 127.880338 639.488388V192.694717A64.102729 64.102729 0 0 1 192.030028 128.602826h640.00858A63.799284 63.799284 0 0 1 895.884854 192.391272v447.451135z"
            fill="currentColor"
            p-id="14718"
          ></path>
          <path
            d="M608.154093 288.092004A31.970084 31.970084 0 0 0 576.184009 320.062089v160.078006l-134.650049-179.278119A31.970084 31.970084 0 0 0 384.002258 320.062089v255.760676a31.970084 31.970084 0 0 0 63.940169 0v-159.958796l134.650048 179.274507a31.970084 31.970084 0 0 0 57.531703-19.200113V320.062089a31.970084 31.970084 0 0 0-31.970085-31.970085z"
            fill="currentColor"
            p-id="14719"
          ></path>
        </svg>
      </div>
    </div>
    <!-- 下一页 -->
    <div
      class="page_num page_btn"
      v-if="pageNum !== pageMax"
      @click="goPreOrNext(1)"
      style="right: 0"
    >
      <div class="page_btn--box">
        <span class="arrow__btn arrow__btn__next">
          <svg
            t="1714062022208"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4775"
            width="16"
            height="16"
          >
            <path
              d="M714.19904 549.84704l-328.704 328.69376c-20.91008 20.91008-54.80448 20.91008-75.70432 0-20.89984-20.89984-20.89984-54.80448 0-75.70432L600.63744 512 309.80096 221.16352c-20.89984-20.91008-20.89984-54.80448 0-75.70432 20.89984-20.91008 54.79424-20.91008 75.70432 0l328.704 328.69376c10.4448 10.45504 15.6672 24.14592 15.6672 37.84704S724.64384 539.40224 714.19904 549.84704z"
              p-id="4776"
              fill="currentColor"
            ></path>
          </svg>
        </span>
        <span class="page_btn__text btn__next">下页</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  pageSize: number;
  total: number;
}>();

// 获取页码
const pageNum = defineModel<number>("pageNum");

const pageMax = Math.floor(props.total / props.pageSize) + 1;
const isShrink = ref<boolean>(false);
// 生成页码数组
const pageNumberList = ref([...new Array(pageMax).keys()]);

// 当页码超过5页进行缩减
(function () {
  if (pageMax > 5) {
    pageNumberList.value = [...new Array(3).keys()];
    isShrink.value = true;
  }
})();

// 跳转至其他页
const goOtherPage = (page: number) => {
  pageNum.value = page;
  // 清理输入框数据
  inputPageNum.value = undefined;
  showInput.value = false;
};

// 输入框
const inputPageNum = ref<number | undefined>(undefined);
const showInput = ref(false);
// 校验数据
const checkInput = (): boolean => {
  if (!inputPageNum.value) {
    inputPageNum.value = undefined;
    return false;
  }
  if (inputPageNum.value < 1 || inputPageNum.value > pageMax) {
    inputPageNum.value = undefined;
    return false;
  }
  return true;
};
// 失焦
const inputBlur = () => {
  inputPageNum.value = undefined;
  showInput.value = false;
};
// 跳转到指定页面
const goPointer = () => {
  inputPageNum.value && checkInput() && goOtherPage(inputPageNum.value);
};
// 翻页
const goPreOrNext = (countPage: number) => {
  const toPageNum = <number>pageNum.value + countPage;
  if (toPageNum < 1 || toPageNum > pageMax) return;
  pageNum.value = toPageNum;
};
</script>
<style lang="scss" scoped>
@import "@/styles/mixin";
.ju-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  color: var(--text);
  position: relative;
  .page_num {
    width: 40px;
    height: 40px;
    background-color: var(--bg-main);
    text-align: center;
    line-height: 40px;
    border-radius: 6px;
    margin: 0 8px;
    box-shadow: var(--shadow-border);
    cursor: pointer;
    @include box-border();
    transition: 0.3s all;
  }
  .page_btn {
    width: 80px;
    position: absolute;
    .page_btn--box {
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      position: relative;
      text-align: center;
      &:hover {
        color: var(--theme-color);
        .page_btn__text {
          opacity: 1;
        }
        .arrow__btn__pre {
          left: 12px;
        }
        .arrow__btn__next {
          right: 12px;
        }
        .btn__pre {
          left: 28px;
        }
        .btn__next {
          right: 28px;
        }
      }
      .arrow__btn {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        height: 40px;
        transition: 0.3s all;
      }
      .arrow__btn__pre {
        left: 32px;
      }
      .arrow__btn__next {
        right: 32px;
      }
      .page_btn__text {
        position: absolute;
        transition: 0.3s all;
        opacity: 0;
        overflow: hidden;
        text-wrap: nowrap;
      }
      .btn__pre {
        left: 56px;
      }
      .btn__next {
        right: 56px;
      }
    }
  }
  .page_pointer {
    min-width: 40px;
    width: auto;
    position: relative;
    overflow: hidden;
    transition: 0.3s all;
    .pointer__input {
      width: 100%;
      height: 40px;
      line-height: 40px;
      position: absolute;
      left: 0;
      top: 0;
      font-size: 16px;
      box-sizing: border-box;
      padding: 0 48px 0 12px;
      background: var(--bg);
      color: var(--text);
    }
    .arrow__input {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      position: absolute;
      right: 0;
      top: 0;
      &:hover {
        color: var(--theme-color);
        background-color: var(--bg-menu__hover);
      }
    }
  }
  .space__point {
    font-size: 22px;
    letter-spacing: 2px;
    margin: 0 5px;
    user-select: none;
  }
  .page_num--active {
    background-color: var(--theme-color);
    color: #fff;
  }
}
</style>
