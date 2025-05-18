<template>
  <div class="preview-box">
    <document-header class="preview-top" />
    <div class="preview-main">
      <div class="preview-left">
        <MdPreview
          class="preview-document"
          :editorId="options.id"
          :modelValue="text"
          :theme="options.theme[app.theme]"
          :preview-theme="options.theme[app.theme]"
        />
        <DocumentInfo />
        <DocumentFooter></DocumentFooter>
      </div>
      <div class="preview-right">
        <div class="preview-catalog">
          <MdCatalog
            class="catalog-box"
            :editorId="options.id"
            :scrollElement="scrollElement"
            :theme="options.theme[app.theme]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 测试文件
import TestMdStr from "@/assets/md/test.md?raw";
import DocumentHeader from "./DocumentHeader.vue";
import DocumentFooter from "./DocumentFooter.vue";
import DocumentInfo from "./DocumentInfo.vue";
import { reactive, ref } from "vue";
import { appStore } from "@/store/app.ts";
import { MdPreview, MdCatalog } from "md-editor-v3";
// preview.css相比style.css少了编辑器那部分样式
import "md-editor-v3/lib/preview.css";

const app = appStore();

const options = reactive({
  id: "preview-only",
  theme: {
    light: "cyanosis",
    dark: "dark",
  },
});
const text = ref(TestMdStr);
const scrollElement = document.documentElement;

// 高度还原
const content = document.querySelector("html");
content.scrollTop = 0;

// ------------------------------ 主题切换 ------------------------------
const theme = app.theme;
</script>
<style lang="scss" scoped>
@import "@/styles/mixin";
.preview-box {
  width: 100%;
  .preview-top {
    width: 100%;
    margin-bottom: 30px;
  }
  .preview-main {
    width: 95vw;
    max-width: $widthMax;
    margin: auto;
    display: flex;
  }
  .preview-left {
    flex: 1;
    overflow: hidden;
    padding-bottom: 30px;
    background-color: var(--bg-main);
    @include card-box();
    .preview-document {
      transition: 0.5s all;
    }
  }
  .preview-right {
    position: relative;
    flex: 0 0 300px;
    margin-left: 20px;
    .preview-catalog {
      @include card-box();
      @include box-border();
      background-color: var(--bg-main);
      overflow: hidden;
      position: sticky;
      top: 180px;
      .catalog-box {
        background-color: var(--md-bk-color);
        padding-top: 10px;
      }
    }
  }
}

.divider {
  @include font-title(20px);
  padding: 0 20px;
}

/* 修改组件默认样式 */
:deep(.md-editor-catalog-active > span) {
  color: var(--theme-color) !important;
}
:deep(.md-editor-catalog-link span:hover) {
  color: var(--theme-color) !important;
}
</style>
