<template>
  <div class="document-info">
    <div class="tags">
      <page-tag
        v-for="tag in tagList"
        :key="tag.tagId"
        :tag="tag"
        :is-radius="true"
      ></page-tag>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PageTag from "../page/PageTag.vue";
import { TagModule } from "@/modules/page";

// mock
const tagList = ref<TagModule[]>([
  {
    tagName: "CSS",
    tagId: "1",
    createTime: "2024-01-02",
  },
  {
    tagName: "HTML",
    tagId: "1",
    createTime: "2024-01-02",
  },
  {
    tagName: "Vue",
    tagId: "1",
    createTime: "2024-01-02",
  },
]);
</script>
<style lang="scss" scoped>
.document-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  .tags {
    display: flex;
    padding: 20px;
  }
}
</style>
