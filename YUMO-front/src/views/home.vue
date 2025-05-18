<template>
  <div class="view-box">
    <home-window :is-movie="true" />
    <div class="main-box">
      <div class="main-top">
        <heat-map></heat-map>
      </div>
      <div class="main-left">
        <home-page />
      </div>
      <div class="main-right">
        <author-card />
        <day-task />
        <ju-calendar v-model:full="isFullCalendar" :is-simplify="true" />
      </div>
    </div>
    <JuFullModal v-model="isFullCalendar">
      <ju-calendar></ju-calendar
    ></JuFullModal>
  </div>
</template>

<script setup lang="ts">
import HomeWindow from "@/components/home/HomeWindow.vue";
import HomePage from "@/components/home/HomePage.vue";
import AuthorCard from "@/components/home/AuthorCard.vue";
import DayTask from "@/components/home/DayTask.vue";
import HeatMap from "@/components/home/HeatMap.vue";
import { ref } from "vue";

// ------------------------------ 日历：展开全屏 ------------------------------
const isFullCalendar = ref<boolean>(false);
</script>

<style scoped lang="scss">
.view-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-70px);
  width: 100vw;
  max-width: 100vw;
  padding-top: 0;
  .main-box {
    width: 80vw;
    max-width: $widthMaxHome;
    margin: 0 auto;
    margin-top: 30px;
    display: grid;
    grid-auto-flow: column dense;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "top top"
      "left right";
    .main-top {
      grid-area: top;
    }
    .main-left {
      grid-area: left;
      width: 100%;
    }
    .main-right {
      grid-area: right;
      max-width: 400px;
      min-width: 350px;
      margin-left: 30px;
    }
  }
}
</style>
