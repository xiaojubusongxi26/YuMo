<template>
  <div
    class="ju-calendar"
    :style="{ height: props.isSimplify ? 'auto' : '100%' }"
  >
    <calendar-table
      v-model="selectDay"
      v-model:full="isFullCalendar"
      class="calendar-left"
      :is-simplify="props.isSimplify"
    ></calendar-table>
    <calendar-panel
      v-show="!isSimplify"
      v-model="selectDay"
      class="calendar-right"
    ></calendar-panel>
  </div>
</template>

<script setup lang="ts">
import CalendarTable from "./CalendarTable.vue";
import CalendarPanel from "./CalendarPanel.vue";
import { ref } from "vue";

const props = defineProps(["isSimplify"]);

const selectDay = ref<string>("");

// ------------------------------ 简化模式 ------------------------------
// 展开全屏
const isFullCalendar = defineModel("full");
</script>
<style lang="scss" scoped>
.ju-calendar {
  margin: auto;
  width: 100%;
  border-radius: 12px;
  margin-top: 30px;
  border: 1px solid var(--border);
  box-sizing: border-box;
  width: 100%;
  max-width: 1280px;
  max-height: 800px;
  display: flex;
  border-radius: 15px;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 0px -4px 35px 10px rgba(0, 0, 0, 0.1);
  .calendar-left {
    flex: 7;
    background-color: var(--bg);
  }
  .calendar-right {
    flex: 3;
    max-width: 400px;
    min-width: 250px;
    background-color: var(--bg-main);
  }
}
</style>
