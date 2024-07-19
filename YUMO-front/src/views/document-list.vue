<template>
  <div class="view-box">
    <header-bar>
      <div
        class="link-bar-item bar-item"
        v-for="(tab, index) in tabList"
        :class="{ current: currentTab === index }"
        @click="toggleTab(index)"
      >
        {{ tab }}
      </div>
    </header-bar>
    <page-list :page-list="dataList" />
  </div>
</template>

<script setup lang="ts">
import PageList from "@/components/page/PageList.vue";
import HeaderBar from "@/components/common/HeaderBar.vue";
import { PageListModule } from "@/modules/page";
import { ref } from "vue";

// 模拟数据
const dataList = ref<PageListModule[]>([]);
const tabList = ref(["全部", "前端开发", "后端开发"]);
(function () {
  for (let i = 0; i < 51; i++) {
    dataList.value.push({
      catalogueName: "前端开发",
      pageName: "JS里的那些宽高距离" + (i + 1),
      pageCover:
        "https://xiaojubusongoss.oss-cn-beijing.aliyuncs.com/img/wallhaven-7po93e.png",
      pageId: "1",
      createTime: "2024-02-01",
      tags: [
        {
          tagName: "Live",
          tagId: "1",
          createTime: "2024-02-01",
        },
      ],
    });
  }
})();

const currentTab = ref<number>(0);
// 切换tab
function toggleTab(index: number) {
  currentTab.value = index;
}
</script>
<style lang="scss" scoped>
.link-bar-item {
  color: var(--text);
  padding: 0px 8px;
  height: 35px;
  line-height: 35px;
  border-radius: 8px;
}
.current {
  background-color: var(--theme-color);
  color: var(--theme-color-light);
}
</style>
