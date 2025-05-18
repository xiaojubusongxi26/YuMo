<template>
  <div>这是一个中转页面</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
// onBeforeRouteUpdate((to, from) => {
//   console.log("中转页：", to, from);
//   console.log(route, router);
// });
// console.log(route, router);
onMounted(() => {
  if (route.query?.targetPath) {
    console.log("中转页参数：", route.query.targetPath, route.query.no);
    router.push({
      path: route.query.targetPath as string,
      query: { no: route.query.no },
    });
  }
});
</script>
<style lang="scss" scoped></style>
