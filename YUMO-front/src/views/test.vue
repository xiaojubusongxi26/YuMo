<template>
  <!-- <JuFullModal> <ju-calendar></ju-calendar></JuFullModal> -->
  <div>
    <div style="height: 40px">1</div>
    <div style="height: 40px">2</div>
    <div style="height: 40px">3</div>
    <div style="height: 40px">4</div>
    <div style="height: 40px">5</div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeRouteLeave, useRoute, useRouter } from "vue-router";
import JuFullModal from "./../components/JuComponents/JuFullModal.vue";
import JuCalendar from "@/components/JuComponents/Calendar/JuCalendar.vue";

const router = useRouter();
const route = useRoute();

const goTest = () => {
  router.push({ path: "test", query: { link: 1 } });
};

onBeforeRouteLeave((to, from) => {
  console.log(to, from);
  alert("不许离开页面");
  return false;
});
</script>
<style lang="scss" scoped></style>
