<template>
  <div>
    <header-bar>
      <router-link to="/" class="link-bar-item bar-item">首页</router-link>
      <router-link to="/" class="link-bar-item bar-item">文章</router-link>
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
const dataList = ref<PageListModule[]>([
  {
    catalogueName: "前端开发",
    pageName: "第一篇文章",
    pageCover:
      "https://xiaojubusongoss.oss-cn-beijing.aliyuncs.com/img/wallhaven-7po93e.png",
    pageId: "1",
    createTime: "2024-02-01",
    tags: [
      {
        tagName: "Live",
        tagId: "11",
        createTime: "2024-02-01",
      },
      {
        tagName: "Vue",
        tagId: "12",
        createTime: "2024-02-01",
      },
    ],
  },
  {
    catalogueName: "前端开发",
    pageName: "JS里的那些宽高距离",
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
  },
]);
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
</script>
<style lang="scss" scoped>
.link-bar-item {
  color: var(--text);
  padding: 0px 8px;
  height: 35px;
  line-height: 35px;
  border-radius: 8px;
}
</style>
