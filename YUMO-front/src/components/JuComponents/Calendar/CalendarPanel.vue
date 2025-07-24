<template>
  <div class="calendar-panel">
    <div class="calendar-window">
      <img :src="app.webOption.homeWallPaper" alt="" />
    </div>
    <div class="current-date">{{ dateInfo?.lunarStr }}</div>
    <div class="calendar-birthday" v-if="dateInfo?.birthday">
      <span>🎂</span>
      <span class="name">{{ dateInfo?.birthday.name }}</span>
      <span class="date">{{
        ` ${dateInfo?.birthday.date} (${
          dateInfo?.birthday.isLunar ? "农 " + dateInfo?.birthday.lunar : "阳"
        })`
      }}</span>
    </div>
    <ju-title :h="'h4'">今日任务</ju-title>
    <div class="task-list" v-if="todoList.length">
      <div
        class="task-item line-bar"
        v-for="(item, index) in todoList"
        :key="index"
      >
        <span class="task_number">{{ index + 1 }}.</span>
        <div class="task_content ellipsis">
          <ju-popover>
            <template v-slot:reference>
              {{ item.todoThing }}
            </template>
          </ju-popover>
        </div>
        <ju-icon
          :name="item.isEnd ? 'smile' : 'sad'"
          :size="22"
          :color="item.isEnd ? '#3fb20e' : '#E4786C'"
        ></ju-icon>
      </div>
    </div>
    <div v-else class="nothing">
      <div class="flex-c">休憩</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { getBirthdayInfo, getSelectDateInfo } from "./utils";
import { appStore } from "@/store/app";
import { getTodayTodoList, updateTodo } from "@/api/home";
import { TodoModel } from "@/modules/common";

const app = appStore();

const selectDay = defineModel({ type: String });
const dateInfo = ref();
// ------------------------------ 获取选中日期相关信息 ------------------------------
const todoList = ref<TodoModel[]>([]);
const getTodoList = async (date: string) => {
  const { data } = await getTodayTodoList(date);
  todoList.value = data;
};

// ------------------------------ 修改任务状态 ------------------------------
const handleUpdate = async (item: TodoModel) => {
  item.isEnd = item.isEnd ? 0 : 1;
  setTimeout(async () => {
    const res = await updateTodo(item);
    if (res.code === 0) {
      // getTodoList();
    } else {
      // JuMessage.error("修改失败");
    }
  }, 200);
};

watch(
  () => selectDay.value,
  (val) => {
    if (val) {
      dateInfo.value = {
        ...getSelectDateInfo(val),
        birthday: getBirthdayInfo(val),
      };
      getTodoList(val);
    }
  },
  {
    immediate: true,
  }
);
</script>
<style lang="scss" scoped>
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
  .nothing {
    line-height: 40px;
    width: 100%;
    padding: 0 10px;
    text-align: center;
    box-sizing: border-box;
    & > div {
      color: #fff;
      background-color: var(--theme-color);
      border-radius: 8px;
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
      }
    }
  }
}
</style>
