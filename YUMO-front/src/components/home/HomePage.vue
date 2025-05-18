<template>
  <div class="default-box">
    <header class="header-bar">
      <div class="hi">嗨，今天想做什么？</div>
      <!-- 切换类型 -->
      <!-- 编辑 -->
      <div class="icon-bg" @click="openEditor()">
        <ju-icon name="edit" :size="20"></ju-icon>
      </div>
    </header>
    <page-list :page-list="dataList" />
    <editor-dialog ref="editorRef"></editor-dialog>
  </div>
</template>

<script setup lang="ts">
import PageList from "@/components/page/PageList.vue";
import { PageListModule } from "@/modules/page";
import { nextTick, onMounted, ref } from "vue";
import EditorDialog from "../editor/EditorDialog.vue";

const editorRef = ref(null);
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

// 打开发布弹窗
const openEditor = () => {
  nextTick();
  (editorRef.value as any).init();
};
</script>
<style lang="scss" scoped>
@import "@/styles/mixin";
.link-bar-item {
  color: var(--text);
  padding: 0px 8px;
  height: 35px;
  line-height: 35px;
  border-radius: 8px;
}
.header-bar {
  @include card-box();
  @include box-border(2px);
  background-color: var(--bg-main);
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 10px;
  height: 50px;
  line-height: 50px;
  margin-bottom: 30px;
  overflow: hidden;
  padding: 0 10px;
  .hi {
    flex: 1;
    font-size: 14px;
    font-weight: bolder;
    user-select: none;
  }
  .icon-bg {
    @include flex-center();
    @include hover-area();
    padding: 8px;
    border-radius: 5px;
  }
}
</style>
