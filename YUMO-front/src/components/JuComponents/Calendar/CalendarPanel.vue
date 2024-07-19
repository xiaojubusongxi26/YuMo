<template>
  <div class="calendar-panel">
    <div class="calendar-window">
      <img :src="app.webOption.homeWallPaper" alt="" />
    </div>
    <div class="current-date">{{ dateInfo?.lunarStr }}</div>
    <div class="calendar-birthday">
      <span>🎂</span>
      <span class="name">{{ dateInfo.birthday.name }}</span>
      <span class="date">{{
        ` ${dateInfo.birthday.date} (${
          dateInfo.birthday.isLunar ? "农 " + dateInfo.birthday.lunar : "阳"
        })`
      }}</span>
    </div>
    <ju-title :h="'h4'">今日任务</ju-title>
    <div class="task-list">
      <div class="task-item line-bar">
        <span class="task_number">1.</span>
        <div class="task_content">
          <ju-popover>
            <template v-slot:reference>
              完成popover组件，完成popover组件完成popover组件完成popover组件完成popover组件，完成popover组件完成popover组件完成popover组件完成popover组件完成popover组件完成popover组件
            </template>
          </ju-popover>
        </div>
      </div>
      <div class="task-item line-bar">
        <span class="task_number">2.</span>
        <div class="task_content">
          <ju-popover>
            <template v-slot:reference>
              Vue.js程序设计与实现，学习学习学习
            </template>
          </ju-popover>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { getSelectDateInfo } from "./utils";
import { appStore } from "@/store/app";

const app = appStore();

const selectDay = defineModel({ type: String });
const dateInfo = ref();

watch(
  () => selectDay.value,
  (val) => {
    dateInfo.value = {
      ...getSelectDateInfo(val),
      birthday: {
        name: "王谢棠",
        date: "2024-04-13",
        lunar: "陆月廿二",
        lunarMonth: "陆月",
        lunarDay: "廿二",
        isLunar: true,
      },
    };
  },
  {
    immediate: true,
  }
);

// ------------------------------ 获取选中日期相关信息 ------------------------------
</script>
<style lang="scss" scoped>
@import "@/styles/mixin";
.calendar-panel {
  padding: 25px 15px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--text);
  overflow: hidden scroll;
  .calendar-window {
    width: 100%;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      object-fit: cover;
      user-select: none;
    }
  }
  .current-date {
    font-size: 24px;
    height: 50px;
    line-height: 50px;
    margin-bottom: 15px;
  }
  .calendar-birthday {
    padding: 10px;
    margin-bottom: 15px;
    text-align: center;
    border-radius: 5px;
    background-color: var(--theme-color);
    color: #fff;
    user-select: none;
    .name {
      margin: 0 10px;
    }
  }
  .task-list {
    width: 100%;
    font-size: 14px;
    .task-item {
      height: 40px;
      line-height: 40px;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: 0.3s background;
      border-radius: 5px;
      padding: 0 10px;
      &:hover {
        background-color: var(--input-bg);
        color: var(--text);
        .task-del {
          width: 20px;
        }
      }
      .task_content {
        flex: 1;
        @include ellipsis();
      }
    }
  }
}
</style>
