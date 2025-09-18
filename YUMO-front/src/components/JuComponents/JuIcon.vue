<template>
  <component
    :is="iconMap[props.name]"
    :size="props.size"
    :color="props.color"
    :options="props.options"
  ></component>
</template>

<script setup lang="ts">
import { ref, markRaw, onMounted } from "vue";
import JuWeb from "../icon/JuWeb.vue";
import { getKebabCase } from "@/utils/util";
import { defineAsyncComponent } from "vue";

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  options?: Record<string, any> | null;
}

const props = withDefaults(defineProps<IconProps>(), {
  name: "",
  size: 30,
  color: "currentColor",
  options: null,
});

type IconMap = {
  [key: string]: typeof JuWeb;
};

const iconMap = ref<IconMap>({});
onMounted(() => {
  const modules: any = import.meta.glob("@/components/icon/*.vue");
  for (let path in modules) {
    const iconName = path.match(/\/([^/]+)\.vue$/)?.[1].split("Ju")[1] || "";
    iconMap.value[getKebabCase(iconName)] = markRaw(
      defineAsyncComponent(modules[path])
    );
  }
});
</script>
<style lang="scss" scoped></style>
