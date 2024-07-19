<template>
  <img ref="imgRef" alt="" />
</template>

<script setup lang="ts">
import { watch, ref, onUnmounted } from "vue";
import { appStore } from "@/store/app";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface ImagePropsModule {
  src: string;
  alt?: string;
  lazy?: boolean;
}

const { webOption } = appStore();
const props = withDefaults(defineProps<ImagePropsModule>(), {
  lazy: true,
});

const imgRef = ref<HTMLImageElement>();
let stop = () => {};
watch(
  () => imgRef.value,
  () => {
    if (props.lazy && imgRef.value) {
      imgRef.value.dataset.src = props.src;
      imgRef.value.src = webOption.defaultImg;
      stop = useIntersectionObserver(
        imgRef.value,
        (
          entries: IntersectionObserverEntry[],
          observer: IntersectionObserver
        ) => {
          entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src || webOption.defaultImg;
              observer.unobserve(img);
            }
          });
        }
      ).stop;
    }
  }
);

onUnmounted(() => {
  stop();
});
</script>
<style lang="scss" scoped></style>
