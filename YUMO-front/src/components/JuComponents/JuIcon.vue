<template>
  <component
    :is="iconMap[props.name]"
    :size="props.size"
    :color="props.color"
  ></component>
</template>

<script setup lang="ts">
import { reactive, markRaw } from "vue";
import JuWeb from "../icon/JuWeb.vue";
import JuDocument from "../icon/JuDocument.vue";
import JuTravel from "./../icon/JuTravel.vue";
import JuTopic from "../icon/JuTopic.vue";
import JuClose from "../icon/JuClose.vue";
import JuEdit from "../icon/JuEdit.vue";
import JuFinish from "./../icon/JuFinish.vue";
import JuHand from "./../icon/JuHand.vue";
import JuArrowLeft from "../icon/JuArrowLeft.vue";
import JuArrowRight from "../icon/JuArrowRight.vue";
import JuHappy from "../icon/JuHappy.vue";
import JuFullScreen from "../icon/JuFullScreen.vue";
import JuCalendar from "../icon/JuCalendar.vue";
import JuUpdate from "../icon/JuUpdate.vue";
import JuAdd from "../icon/JuAdd.vue";
import JuSearch from "../icon/JuSearch.vue";

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

const props = withDefaults(defineProps<IconProps>(), {
  name: "",
  size: 30,
  color: "currentColor",
});

type IconMap = {
  [key: string]: typeof JuWeb;
};

const iconMap: IconMap = reactive({
  web: markRaw(JuWeb),
  document: markRaw(JuDocument),
  travel: markRaw(JuTravel),
  topic: markRaw(JuTopic),
  close: markRaw(JuClose),
  edit: markRaw(JuEdit),
  finish: markRaw(JuFinish),
  hand: markRaw(JuHand),
  "arrow-left": markRaw(JuArrowLeft),
  "arrow-right": markRaw(JuArrowRight),
  happy: markRaw(JuHappy),
  "full-screen": markRaw(JuFullScreen),
  calendar: markRaw(JuCalendar),
  update: markRaw(JuUpdate),
  add: markRaw(JuAdd),
  search: markRaw(JuSearch),
});
</script>
<style lang="scss" scoped></style>
