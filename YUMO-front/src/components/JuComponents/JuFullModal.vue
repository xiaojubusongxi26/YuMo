<template>
  <Teleport to="body">
    <Transition name="fade" appear>
      <div class="ju-full-modal" v-if="value">
        <div class="mask" @click="closeModal"></div>
        <div
          class="modal-content"
          :class="{
            modal__full: props.type === 'full',
            modal__bottom: props.type === 'bottom',
          }"
        >
          <div class="close" v-if="showClose" @click="closeModal">
            <ju-icon name="close"></ju-icon>
          </div>
          <slot></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { watch } from "vue";
import JuIcon from "./JuIcon.vue";

type JuFullModal = {
  type?: string;
  showClose?: boolean;
};

const props = withDefaults(defineProps<JuFullModal>(), {
  type: "bottom",
  showClose: true,
});

const value = defineModel({ type: Boolean, default: true });

watch(
  () => value.value,
  (val) => {
    if (val) {
      stopMove();
    } else {
      Move();
    }
  },
  {
    immediate: true,
  }
);

// ------------------------------ 关闭弹窗 ------------------------------
function closeModal() {
  value.value = false;
}

// 停止页面滚动
function stopMove() {
  const m = (e: TouchEvent) => {
    e.preventDefault();
  };
  // 保存事件处理函数以便在 removeEventListener 时使用
  (stopMove as any).handler = m;
  document.body.style.overflow = "hidden";
  document.addEventListener("touchmove", m, { passive: false }); // 禁止页面滑动
}

// 开启页面滚动
function Move() {
  const m = (stopMove as any).handler;
  document.body.style.overflow = ""; // 出现滚动条
  if (m) {
    document.removeEventListener("touchmove", m, {
      passive: true,
    } as EventListenerOptions);
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/mixin";
.ju-full-modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10002;
  width: 100vw;
  height: 100vh;
  .mask {
    width: 100%;
    height: 100%;
    background: var(--mask30);
    transition: all 0.2s;
  }
  .modal-content {
    width: 100vw;
    left: 0;
    background-color: var(--bg-main);
    position: fixed;
    transition: opacity 0.3s, top 0.3s;
    box-shadow: 0px -4px 16px 10px rgba(0, 0, 0, 0.1);
    padding: 80px 50px;
    box-sizing: border-box;
    .close {
      @include flex-center();
      background-color: var(--theme-color);
      width: 50px;
      height: 50px;
      border-radius: 10px;
      position: absolute;
      right: 20px;
      top: 20px;
      opacity: 1;
      cursor: pointer;
      svg {
        transition: 0.3s all;
        color: #fff;
      }
    }
  }
  .modal__full {
    top: 0;
    height: 100vh;
    border-radius: 0;
  }
  .modal__bottom {
    top: 10vh;
    height: 90vh;
    border-radius: 20px 20px 0 0;
  }
}
/*
  动画
*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, top 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  .mask {
    opacity: 0;
  }
  .modal-content {
    opacity: 0;
    top: 40vh;
  }
}
.fade-enter-to,
.fade-leave-from {
  .mask {
    opacity: 1;
  }
}
</style>
