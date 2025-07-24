<template>
  <JuFullModal v-model="visible" title="新的开始">
    <div class="flex justify-end items-center mt-15 mb-15">
      <div class="tab-boder flex-c br-10">
        <div
          class="tab-hover"
          :style="{ left: 2 + tabInfo.hover * 80 + 'px' }"
        ></div>
        <div
          class="edit-tab flex-c"
          :class="{ current: tabInfo.hover === 0 }"
          @mouseover="hoverTab(0, 'in')"
          @mouseleave="hoverTab(0)"
          @click="clickTab(0)"
        >
          <ju-icon name="my" :size="20"></ju-icon>
          生活
        </div>
        <div
          class="edit-tab flex-c"
          :class="{ current: tabInfo.hover === 1 }"
          @mouseover="hoverTab(1, 'in')"
          @mouseleave="hoverTab(1)"
          @click="clickTab(1)"
        >
          <ju-icon name="camera" :size="20"></ju-icon>
          摄影
        </div>
        <div
          class="edit-tab flex-c"
          :class="{ current: tabInfo.hover === 2 }"
          @mouseover="hoverTab(2, 'in')"
          @mouseleave="hoverTab(2)"
          @click="clickTab(2)"
        >
          <ju-icon name="book" :size="20"></ju-icon>
          日事
        </div>
      </div>
    </div>
    <LiveEditor v-if="editType === 'live'"></LiveEditor>
    <template #footer> </template>
  </JuFullModal>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import LiveEditor from "./LiveEditor.vue";
const visible = ref(false);
// 编辑类型：live camera daily
const editType = ref("live");

// 初始化
const init = () => {
  visible.value = true;
  editType.value = "live";
};

const tabInfo = reactive({
  current: 0,
  hover: 0,
  currentType: ["live", "camera", "daily"],
});
const hoverTab = (index: number, type?: string) => {
  tabInfo.hover = type === "in" ? index : tabInfo.current;
};
const clickTab = (index: number) => {
  tabInfo.current = index;
  tabInfo.hover = index;
  editType.value = tabInfo.currentType[index];
};

defineExpose({
  init,
});
</script>
<style lang="scss" scoped>
.tab-boder {
  position: relative;
  border: 2px solid var(--border);
  background-color: var(--bg);
  .tab-hover {
    position: absolute;
    left: 2px;
    top: 2px;
    height: 36px;
    width: 76px;
    background-color: var(--box-border);
    z-index: 0;
    border-radius: 8px;
    transition: 0.3s left;
  }
  .current {
    color: #fff;
  }
}
.edit-tab {
  width: 80px;
  gap: 5px;
  height: 40px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  color: var(--text);
  &:first-child {
    border-radius: 5px 0 0 5px;
  }
  &:last-child {
    border-radius: 0 5px 5px 0;
  }
}
</style>
<style>
.modal-content {
  display: flex;
  flex-direction: column;
}
</style>
