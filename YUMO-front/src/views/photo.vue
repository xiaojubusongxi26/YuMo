<template>
  <div class="photo-box" ref="photoContainer">
    <div class="photo-view">
      <div
        class="photo-list"
        v-for="(listCol, indexCol) in list"
        :key="indexCol"
      >
        <div
          class="list-item"
          v-for="(img_info, imgIndex) in listCol"
          :key="imgIndex"
          :style="{
            transform: `translate(${img_info.x}px, ${img_info.y}px)`,
            width: pageInitData.img_width + 'px',
            height: pageInitData.img_height + 'px',
            display: img_info.visible ? 'block' : 'none',
          }"
        >
          <img :src="img_info.src" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const imgs = ref<string[]>([
  "https://xiaojubusongoss.oss-cn-beijing.aliyuncs.com/img/wallhaven-d6q21o.jpg",
  "https://xiaojubusongoss.oss-cn-beijing.aliyuncs.com/img/wallhaven-qz8z3d.jpg",
  "https://xiaojubusongoss.oss-cn-beijing.aliyuncs.com/img/wallhaven-851rey.jpg",
  "https://xiaojubusongoss.oss-cn-beijing.aliyuncs.com/img/wallhaven-7po93e.png",
  "https://xiaojubusongoss.oss-cn-beijing.aliyuncs.com/img/wallhaven-l8r6oy.jpg",
  "https://xiaojubusongoss.oss-cn-beijing.aliyuncs.com/img/wallhaven-rrjwem.jpg",
  "https://xiaojubusongoss.oss-cn-beijing.aliyuncs.com/img/wallhaven-l8r8dr.jpg",
  "https://xiaojubusongoss.oss-cn-beijing.aliyuncs.com/img/wallhaven-wewvxp.jpg",
  "https://xiaojubusongoss.oss-cn-beijing.aliyuncs.com/img/wallhaven-jxrvqq.jpg",
  "https://xiaojubusongoss.oss-cn-beijing.aliyuncs.com/img/wallhaven-exrvgk.jpg",
  "https://xiaojubusongoss.oss-cn-beijing.aliyuncs.com/img/wallhaven-rrwxem.jpg",
  "https://xiaojubusongoss.oss-cn-beijing.aliyuncs.com/img/wallhaven-zy28lv.jpg",
  "https://xiaojubusongoss.oss-cn-beijing.aliyuncs.com/img/wallhaven-yxwx9k.jpg",
  "https://xiaojubusongoss.oss-cn-beijing.aliyuncs.com/img/wallhaven-jxrrmp.jpg",
]);

const photoContainer = ref<HTMLElement | null>();

// 页面基本参数信息初始化
const pageInitData = ref({
  width: 0, // 视口宽度
  height: 0, // 视口高度
  img_width: 0, // 图片宽度
  img_height: 0, // 图片高度
  outter_left: 0, // 视口左侧到标签框最左侧到距离
  outter_top: 0, // 视口顶部到标签框最顶部到距离
});
function setPageData() {
  pageInitData.value.width = window.innerWidth;
  pageInitData.value.height = window.innerHeight;
  pageInitData.value.img_width = Math.floor(window.innerWidth / 4);
  pageInitData.value.img_height = Math.floor(window.innerHeight / 1.8);
  // 视口左侧到标签框最左侧到距离
  pageInitData.value.outter_left = Math.floor(
    (pageInitData.value.img_width * 6 - pageInitData.value.width) / 2
  );
  // 视口顶部到标签框最顶部到距离
  pageInitData.value.outter_top = Math.floor(
    (pageInitData.value.img_height * 4 - pageInitData.value.height) / 2
  );
}

setPageData();

// 初始化框架数组，四行六列
const list = ref<any>([]);

function setListData() {
  for (let i = 0; i < 6; i++) {
    let arr = [];
    for (let j = 0; j < 4; j++) {
      let img_info = {
        src: imgs.value[Math.floor(Math.random() * imgs.value.length)],
        x: i * pageInitData.value.img_width - pageInitData.value.outter_left,
        y: j * pageInitData.value.img_height - pageInitData.value.img_height,
        visible: true,
      };
      arr.push(img_info);
    }
    list.value.push(arr);
  }
  setImagePosition();
}
setListData();

// 监听页面宽度变化
const Resize = new ResizeObserver(() => {
  setPageData();
  setImagePosition();
});
Resize.observe(document.querySelector("body") as Element);

// 设置图片的位置
function setImagePosition() {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      list.value[i][j].x =
        i * pageInitData.value.img_width - pageInitData.value.outter_left;
      list.value[i][j].y =
        j * pageInitData.value.img_height - pageInitData.value.img_height;
    }
  }
}

// 计算偏移距离
function offsetDistance(mov_x: number = 0, mov_y: number = 0) {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      if (list.value[i][j].x < -pageInitData.value.img_width) {
        list.value[i][j].x += pageInitData.value.img_width * 6;
        list.value[i][j].visible = false;
      } else if (
        list.value[i][j].x >
        pageInitData.value.width + pageInitData.value.img_width
      ) {
        list.value[i][j].x -= pageInitData.value.img_width * 6;
        list.value[i][j].visible = false;
      } else if (list.value[i][j].y < -pageInitData.value.img_height) {
        list.value[i][j].y += pageInitData.value.img_height * 4;
        list.value[i][j].visible = false;
      } else if (
        list.value[i][j].y >
        pageInitData.value.height + pageInitData.value.img_height
      ) {
        list.value[i][j].y -= pageInitData.value.img_height * 4;
        list.value[i][j].visible = false;
      } else {
        list.value[i][j].visible = true;
      }
      list.value[i][j].x += mov_x;
      list.value[i][j].y += mov_y + i * mov_y * 0.1;
    }
  }
}

// 鼠标偏移量
const mouseOffset = ref({
  down_x: 0,
  down_y: 0,
  x: 0,
  y: 0,
});

function PageMouseDown(e: MouseEvent) {
  mouseOffset.value.down_x = e.pageX;
  mouseOffset.value.down_y = e.pageY;
}

function PageMouseUp(e: MouseEvent) {
  if (mouseOffset.value.down_x === 0 && mouseOffset.value.down_y === 0) return;
  mouseOffset.value.x = e.pageX - mouseOffset.value.down_x;
  mouseOffset.value.y = e.pageY - mouseOffset.value.down_y;
  offsetDistance(mouseOffset.value.x, mouseOffset.value.y);
  mouseOffset.value.down_x = 0;
  mouseOffset.value.down_y = 0;
}

function PageMouseLeave(e: MouseEvent) {
  if (mouseOffset.value.down_x === 0 && mouseOffset.value.down_y === 0) return;
  mouseOffset.value.x = e.pageX - mouseOffset.value.down_x;
  mouseOffset.value.y = e.pageY - mouseOffset.value.down_y;
  offsetDistance(mouseOffset.value.x, mouseOffset.value.y);
  mouseOffset.value.down_x = 0;
  mouseOffset.value.down_y = 0;
}

function PageMouseMove(e: MouseEvent) {
  if (!e) return;
  if (mouseOffset.value.down_x === 0 && mouseOffset.value.down_y === 0) return;
  mouseOffset.value.x = e.pageX - mouseOffset.value.down_x;
  mouseOffset.value.y = e.pageY - mouseOffset.value.down_y;
  offsetDistance(mouseOffset.value.x, mouseOffset.value.y);
  mouseOffset.value.down_x = e.pageX;
  mouseOffset.value.down_y = e.pageY;
}

// 节流
function throttle(func: Function, delay = 50) {
  let timer: any = null,
    startTime = Date.now();

  return function () {
    let curTime = Date.now(),
      remaining = delay - (curTime - startTime),
      context: any = this,
      args = arguments;

    clearTimeout(timer);

    if (remaining <= 0) {
      func.apply(context, args);
      startTime = Date.now();
    } else {
      timer = setTimeout(func, remaining);
    }
  };
}

onMounted(() => {
  // 监听鼠标事件
  photoContainer.value?.addEventListener("mousedown", PageMouseDown);
  photoContainer.value?.addEventListener("mouseup", PageMouseUp);
  photoContainer.value?.addEventListener("mouseleave", PageMouseLeave);
  photoContainer.value?.addEventListener("mousemove", throttle(PageMouseMove));
});

// 销毁事件
function destroy() {
  photoContainer.value?.removeEventListener("mousedown", PageMouseDown);
  photoContainer.value?.removeEventListener("mouseup", PageMouseUp);
  photoContainer.value?.removeEventListener("mouseleave", PageMouseLeave);
  photoContainer.value?.removeEventListener(
    "mousemove",
    throttle(PageMouseMove)
  );
}

onUnmounted(() => {
  destroy();
});
</script>
<style lang="scss" scoped>
.photo-box {
  width: 100vw;
  height: calc(100vh - 90px);
  overflow: hidden;
  font-size: 10px;
  .photo-view {
    position: relative;
    pointer-events: none;
    user-select: none;
    .list-item {
      position: absolute;
      overflow: hidden;
      padding: 8px;
      box-sizing: border-box;
      transition: 0.1s transform cubic-bezier(0, 0.55, 0.45, 1);
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
        pointer-events: none;
        user-select: none;
      }
    }
  }
}
</style>
