<template>
  <!-- <component
    :is="iconMap[props.name]"
    :size="props.size"
    :color="props.color"
    :options="props.options"
  ></component> -->
  <svg
    viewBox="0 0 1024 1024"
    class="svg-icon"
    :style="iconStyle"
    aria-hidden="true"
    v-html="iconContent"
    v-bind="$attrs"
  ></svg>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { svgPreloader } from "@/utils/svgPreloader";

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

// type IconMap = {
//   [key: string]: typeof JuWeb;
// };
// const iconMap = ref<IconMap>({});
// onMounted(() => {
//   const modules: any = import.meta.glob("@/components/icon/*.vue");
//   for (let path in modules) {
//     const iconName = path.match(/\/([^/]+)\.vue$/)?.[1].split("Ju")[1] || "";
//     iconMap.value[getKebabCase(iconName)] = markRaw(
//       defineAsyncComponent(modules[path])
//     );
//   }
// });
const iconStyle = computed(() => {
  return {
    fontSize: `${props.size}px`,
    color: props.color,
    width: `${props.size}px`,
    height: `${props.size}px`,
  };
});
const iconContent = computed(() => {
  return svgPreloader.getIcon(props.name);
});
</script>
<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
