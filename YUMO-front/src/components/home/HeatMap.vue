<template>
  <div class="heat-box">
    <h2 class="heat-title">活跃热点</h2>
    <div class="heat-week">
      <div
        class="heat-week-title"
        v-for="(week, weekIndex) in renderWeek"
        :key="weekIndex"
      >
        {{ week }}
      </div>
    </div>
    <div class="heat-date">
      <div
        class="heat-date-item"
        v-for="day in renderData"
        :key="day.date"
        @mouseenter="mouseEnter($event, day)"
        @mouseleave="mouseLeave"
        :style="{ backgroundColor: levelColor[day.level] }"
      >
        <!-- <div class="popover">
          <div>{{ day.date }}</div>
          <div>发布数量: {{ day.number }}</div>
        </div> -->
      </div>
    </div>
    <Teleport to="body">
      <Modal :x="mouseX" :y="mouseY" v-if="isHover">
        <div class="popover">
          <div>{{ hoverDate.date }}</div>
          <div>发布数量: {{ hoverDate.number }}</div>
        </div>
      </Modal>
    </Teleport>
    <div class="heat-main"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Modal from "@/components/modal/Modal.vue";

interface DateDataModule {
  date: string;
  year: number;
  month: number;
  day: number;
  week: number;
  number: number;
  level: number;
}

const props = withDefaults(defineProps(), {
  isShowHover: false,
});

// 等级颜色
const levelColor = ref<string[]>([
  "#ebedf0",
  "#A5DBFC",
  "#82CAFB",
  "#67B5F9",
  "#3294F7",
]);

// 初始化365天的数据
function initDate(): DateDataModule[] {
  const date = new Date();

  // 日期数据
  const dateData: DateDataModule[] = [];

  // 循环过去日期
  for (let i = 8 - date.getDay(); i <= 365; i++) {
    // 计算彼时
    const dms = date.getTime() - (365 - i) * 24 * 60 * 60 * 1000;
    const d = new Date(dms);
    const day: DateDataModule = {
      date: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`,
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate(),
      week: d.getDay(),
      number: 0,
      level: Math.floor(Math.random() * 5),
    };

    dateData.push(day);
  }

  return dateData;
}

const dateData: DateDataModule[] = initDate();

// 获取历史数据
const historyData = ref<DateDataModule[]>([]);

// 整合渲染数据
const renderData = ref<DateDataModule[]>([]);

// 过滤数据
dateData.forEach((item: DateDataModule) => {
  let history: DateDataModule | undefined = historyData.value.find(
    (itemH: DateDataModule) => itemH.date === item.date
  );
  renderData.value.push(history ? history : item);
});

const weeks: string[] = [
  "周日",
  "周一",
  "周二",
  "周三",
  "周四",
  "周五",
  "周六",
];
const renderWeek = ref<string[]>([...weeks]);

// hover数据
const hoverDate = ref<DateDataModule>({
  date: "",
  year: 0,
  month: 0,
  day: 0,
  week: 0,
  number: 0,
  level: 0,
});
const isHover = ref<boolean>(false);
const mouseX = ref<number>(0);
const mouseY = ref<number>(0);

// 鼠标移入
function mouseEnter(event: MouseEvent, day: DateDataModule) {
  // 不展示悬浮框
  if (!props.isShowHover) return;
  hoverDate.value = day;
  isHover.value = true;
  mouseX.value = event.pageX;
  mouseY.value = event.pageY;
}

// 鼠标移出
function mouseLeave() {
  isHover.value = false;
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixin";
.heat-box {
  @include card-box();
  @include box-border();
  display: flex;
  flex-wrap: wrap;
  background-color: var(--bg-main);
  color: var(--text);
  padding: 20px;
  .heat-title {
    width: 100%;
    text-align: center;
    height: 60px;
    line-height: 60px;
  }
  .heat-week {
    font-size: 14px;
    width: 50px;
    line-height: 20px;
    text-align: center;
  }
  .heat-date {
    flex: 1;
    height: 140px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    .heat-date-item {
      width: 16px;
      height: 16px;
      margin: 2px 1px;
      transition: 0.3s background-color;
      background-color: rgb(235, 237, 240);
      border-radius: 3px;
      box-sizing: border-box;
      position: relative;
      // .popover {
      //   bottom: 30px;
      //   left: -80px;
      //   opacity: 0;
      //   background: var(--bg);
      //   padding: 20px;
      //   border-radius: 10px;
      //   width: 100px;
      //   position: absolute;
      //   transition: 0.3s all;
      //   z-index: -1;
      //   display: flex;
      //   flex-direction: column;
      //   color: var(--text);
      //   box-shadow: -43px -22px 71px 10px rgba(0, 0, 0, 0.1);
      //   pointer-events: none;
      //   div {
      //     height: 30px;
      //     line-height: 30px;
      //   }
      // }
      // &:hover {
      //   .popover {
      //     bottom: 15px;
      //     left: -60px;
      //     opacity: 1;
      //     z-index: 20;
      //   }
      // }
    }
  }
}
// .popover {
//   background: var(--bg);
//   padding: 20px;
//   border-radius: 10px;
//   transition: 0.3s all;
//   z-index: -1;
//   display: flex;
//   flex-direction: column;
//   color: var(--text);
//   box-shadow: -43px -22px 71px 10px rgba(0, 0, 0, 0.1);
// }
</style>
