<template>
  <div class="live-box">
    <div class="live-item">
      
    </div>
    <ju-pagination
      v-model:pageNum="pageInfo.pageNum"
      :total="pageInfo.total"
      :page-size="pageInfo.pageSize"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

// 分页数据
const pageInfo = reactive({
  pageNum: 1,
  pageSize: 10,
  total: 100,
});
</script>
<style lang="scss" scoped>
.live-box {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: $widthMax;
  .live-item {
    margin-bottom: 30px;
    background-color: var(--bg-main);
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    cursor: pointer;
    @include box-border();
    @include box-shadow();
    &:hover {
      img {
        transform: scale(1.05);
      }
    }
  }
}
</style>
