<template>
  <div class="page-list" ref="pageList">
    <div
      class="page-list-item box-shadow"
      v-for="page in showData"
      :key="page.pageId"
      @click="toPageDetail(page)"
      v-slide-in
    >
      <div class="page--cover">
        <ju-image :src="page.pageCover"></ju-image>
      </div>
      <div class="page--info">
        <span class="page--catalogue">{{ page.catalogueName }}</span>
        <div class="page--title font-famaily__title">{{ page.pageName }}</div>
        <div class="page--detail">
          <div class="page--tags">
            <page-tag v-for="tag in page.tags" :key="tag.tagId" :tag="tag" />
          </div>
          <div class="page--time">{{ page.createTime }}</div>
        </div>
      </div>
    </div>
    <ju-pagination
      v-model:pageNum="pageInfo.pageNum"
      :total="pageInfo.total"
      :page-size="pageInfo.pageSize"
    />
  </div>
</template>

<script setup lang="ts">
import PageTag from "@/components/page/PageTag.vue";
import JuPagination from "@/components/JuComponents/JuPagination.vue";
import { PageListModule } from "@/modules/page";
import { watch, reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const props = defineProps<{
  pageList: PageListModule[];
}>();
const router = useRouter();

// dom
const pageList = ref<HTMLElement>();

// 分页数据
const pageInfo = reactive({
  pageNum: 1,
  pageSize: 10,
  total: 100,
});
const showData = ref<PageListModule[]>();

watch(
  () => props.pageList,
  (val) => {
    pageInfo.pageNum = 1;
    pageInfo.pageSize = 10;
    pageInfo.total = val.length;
    spliceData();
  },
  {
    immediate: true,
  }
);

watch(
  () => pageInfo.pageNum,
  async () => {
    spliceData();
    document
      .querySelector("html")
      ?.scrollTo({ top: pageTop.value - 150, behavior: "smooth" });
  }
);

function spliceData() {
  const start = (pageInfo.pageNum - 1) * pageInfo.pageSize;
  const end =
    start + pageInfo.pageSize > pageInfo.total
      ? pageInfo.total
      : start + pageInfo.pageSize;
  showData.value = props.pageList.slice(start, end);
}

// 组件高度，页面切换回到顶部
const pageTop = ref<number>(0);

onMounted(() => {
  pageTop.value = pageList.value?.offsetTop || 0;
});

// ------------------------------ 跳转详情 ------------------------------
function toPageDetail(page: PageListModule) {
  router.push(`/page/${page.pageId}`);
}
</script>
<style lang="scss" scoped>
.page-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: $widthMax;
  .page-list-item {
    margin-bottom: 30px;
    background-color: var(--bg-main);
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    cursor: pointer;
    transition: 0.5s all;
    box-sizing: border-box;
    border: 1px solid var(--border);
    &:hover {
      border: 1px solid var(--box-border);
      img {
        transform: scale(1.05);
      }
    }
    .page--cover {
      height: 200px;
      width: 30%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.5s transform ease-out;
      }
    }
    .page--info {
      width: 70%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding: 30px 40px;
      color: var(--text);
      user-select: none;
      .page--catalogue {
        color: var(--text-second);
        font-size: 14px;
        height: 24px;
        line-height: 24px;
      }
      .page--title {
        flex: 1;
        font-size: 20px;
        font-weight: bolder;
        letter-spacing: 1.5px;
      }
      .page--detail {
        height: 30px;
        line-height: 30px;
        display: flex;
        .page--tags {
          flex: 1;
          display: flex;
        }
        .page--time {
          font-size: 14px;
          cursor: default;
        }
      }
    }
  }
}
</style>
