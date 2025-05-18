<template>
  <div class="calendar-table" :class="{ simplify: props.isSimplify }">
    <div class="calendar-tool">
      <div class="calendar-tool_left">
        <div class="calendar-tool__btn" @click="toggleMonth(-1)">
          <ju-icon name="arrow-left" :size="18" />
        </div>
        <div class="calendar-tool__btn" @click="toggleMonth(1)">
          <ju-icon name="arrow-right" :size="18" />
        </div>
      </div>
      <div class="calendar-tool_center">
        {{ current.year + "-" + String(current.month).padStart(2, "0") }}
      </div>
      <div class="calendar-tool_right">
        <template v-if="props.isSimplify">
          <ju-icon
            name="full-screen"
            @click="isFullCalendar = true"
            :size="20"
          />
        </template>
        <template v-else>
          <div class="calendar-tool__tag" @click="selectToday">今</div>
        </template>
      </div>
    </div>
    <div class="calendar-week">
      <div class="calendar-week-item">一</div>
      <div class="calendar-week-item">二</div>
      <div class="calendar-week-item">三</div>
      <div class="calendar-week-item">四</div>
      <div class="calendar-week-item">五</div>
      <div class="calendar-week-item">六</div>
      <div class="calendar-week-item">日</div>
    </div>
    <div class="calendar-body">
      <div class="calendar-bg">{{ current.month }}</div>
      <div class="calendar-date calendar-grid">
        <div
          class="calendar-date-item"
          v-for="dateObj in showDateList"
          :key="dateObj.date"
          :class="{
            'current-month': dateObj.isCurrentMonth,
            'current-day': dateObj.date === today.date,
            'week-end': !dateObj.isWork,
            'select-day': selectDay === dateObj.date,
          }"
          @click="selectDate(dateObj)"
        >
          <div class="day">{{ String(dateObj.day).padStart(2, "0") }}</div>
          <div
            v-if="!props.isSimplify"
            class="lunar"
            :class="{
              holiday:
                dateObj.holiday?.target === dateObj.date || dateObj.solarTerm,
            }"
          >
            {{ computedDateInfo(dateObj) }}
          </div>
          <ju-icon
            v-if="!!dateObj.birthday"
            name="happy"
            class="happy"
            :size="props.isSimplify ? 10 : 16"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import {
  getTodayDate,
  getCalendarDates,
  computedDateInfo,
  fetchBirthdayByYear,
  type DateInfoModel,
} from "./utils";
import JuIcon from "../JuIcon.vue";

const props = defineProps(["isSimplify"]);

// 今日信息
const today = getTodayDate();

// 当前展示日期信息
const current = reactive({
  year: today.year,
  month: today.month,
});
const showDateList = ref(getCalendarDates(current.year, current.month - 1));

// ------------------------------ 年份修改重新请求生日信息 ------------------------------
watch(
  () => current.year,
  (val) => {
    val && fetchBirthdayByYear(Number(val));
  },
  { immediate: true }
);

// ------------------------------ 选中日期 ------------------------------
const selectDay = defineModel({ type: String });
selectDay.value = today.date;

function selectDate(date: DateInfoModel) {
  if (props.isSimplify) {
    return;
  }
  selectDay.value = date.date;
  if (!date.isCurrentMonth) {
    if (current.year === date.year) {
      toggleMonth(date.month - current.month);
    } else {
      toggleMonth(date.year - current.year);
    }
  }
}

// ------------------------------ 切换月份 ------------------------------
function toggleMonth(tag: number) {
  if (tag === 1) {
    current.month++;
    if (current.month > 12) {
      current.month = 1;
      current.year++;
    }
  } else {
    current.month--;
    if (current.month < 1) {
      current.month = 12;
      current.year--;
    }
  }
  showDateList.value = getCalendarDates(current.year, current.month - 1);
}

// ------------------------------ 功能按钮 ------------------------------
// 今日
function selectToday() {
  current.year = today.year;
  current.month = today.month;
  selectDay.value = today.date;
  showDateList.value = getCalendarDates(today.year, today.month - 1);
}

// ------------------------------ 展开全屏 ------------------------------
const isFullCalendar = defineModel("full");
</script>
<style lang="scss" scoped>
$gap: 25px;
$titleHeight: 50px;
.calendar-table {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  color: var(--text);
  .calendar-tool {
    width: 100%;
    height: $titleHeight;
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    cursor: default;
    user-select: none;
    .calendar-tool_left {
      position: absolute;
      left: 0;
      display: flex;
      gap: 10px;
      .calendar-tool__btn {
        cursor: pointer;
        border-radius: 5px;
        padding: 2px 8px;
        background-color: var(--input-bg);
        transition: 0.2s all;
        display: flex;
        align-items: center;
        &:hover {
          background-color: var(--bg-menu__hover);
        }
      }
    }
    .calendar-tool_center {
      flex: 1;
      text-align: center;
      font-size: 20px;
    }
    .calendar-tool_right {
      position: absolute;
      right: 0;
      display: flex;
      gap: 8px;
      svg {
        padding: 5px;
        border-radius: 3px;
        cursor: pointer;
        transition: 0.3s all;
        &:hover {
          background-color: var(--theme-color);
          color: #fff;
        }
      }
      .calendar-tool__tag {
        font-size: 14px;
        border-radius: 5px;
        padding: 5px 8px;
        color: #fff;
        background-color: var(--theme-color);
        cursor: pointer;
      }
    }
  }
  .calendar-week {
    height: $titleHeight;
    line-height: $titleHeight;
    text-align: center;
    display: flex;
    cursor: default;
    gap: $gap;
    .calendar-week-item {
      flex: 1;
    }
  }
  .calendar-body {
    height: calc(100% - $titleHeight * 2);
    position: relative;
    user-select: none;
    .calendar-date {
      .calendar-date-item {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--text);
        opacity: 0.5;
        box-sizing: border-box;
        border-radius: 8px;
        cursor: default;
        border: 2px solid transparent;
        transition: all 0.1s linear;
        position: relative;
        &:hover {
          border: 2px solid var(--text-second);
        }
        .day {
          font-size: 18px;
        }
        .lunar {
          position: absolute;
          bottom: 10px;
          right: 10px;
          font-size: 12px;
          color: var(--text-second);
        }
        .holiday {
          color: #2277ff;
        }
        .happy {
          position: absolute;
          bottom: 10px;
          left: 10px;
        }
      }
      .current-month {
        opacity: 1;
      }
      .current-day {
        color: var(--theme-color);
        background-color: var(--theme-color-hover);
      }
      .week-end {
        color: #fa595c;
      }
      .select-day {
        color: var(--theme-color);
        background-color: var(--theme-color-hover);
        border: 2px solid var(--theme-color);
      }
    }
    .calendar-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      grid-template-rows: repeat(6, 1fr);
      gap: $gap;
      width: 100%;
      height: 100%;
    }
    .calendar-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      font-size: 500px;
      color: var(--mask-window);
      text-align: center;
    }
  }
}
/* 简化 */
.simplify {
  .calendar-tool {
    height: 30px !important;
  }
  .day {
    font-size: 14px !important;
  }
  .calendar-bg {
    font-size: 200px !important;
  }
  .happy {
    left: -10px !important;
    bottom: -10px !important;
  }
  :deep(svg) {
    font-size: 8px;
  }
}
</style>
