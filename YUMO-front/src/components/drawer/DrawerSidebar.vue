<template>
  <div class="drawer-sidebar">
    <div class="sidebar-search">
      <div class="search-bar">
        <ju-icon class="icon_s" name="search" :size="16" />
        <input type="text" placeholder="搜索" />
      </div>
      <div class="create">
        <ju-icon name="add" :size="16" />
        <div class="create__hover">
          <div class="create-hover-box">
            <div class="hover-item">
              <svg
                t="1719125774352"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="13742"
                width="18"
                height="18"
              >
                <path
                  d="M406.755556 113.777778l92.558222 92.16h280.860444c68.551111 0 124.700444 50.232889 129.706667 114.005333l0.341333 9.216v400.896C910.222222 798.151111 852.024889 853.333333 780.174222 853.333333H186.936889C115.086222 853.333333 56.888889 798.151111 56.888889 730.055111V237.056C56.888889 168.96 115.086222 113.777778 186.936889 113.777778H406.755556z"
                  fill="#FFB12E"
                  p-id="13743"
                ></path>
                <path
                  d="M910.222222 455.111111a56.888889 56.888889 0 0 1 56.888889 56.888889v341.333333a56.888889 56.888889 0 0 1-56.888889 56.888889h-341.333333a56.888889 56.888889 0 0 1-56.888889-56.888889V512a56.888889 56.888889 0 0 1 56.888889-56.888889h341.333333z m-28.444444 312.888889h-170.666667v56.888889h170.666667v-56.888889z m-227.555556 0h-56.888889v56.888889h56.888889v-56.888889z m227.555556-113.777778h-170.666667v56.888889h170.666667v-56.888889z m-227.555556 0h-56.888889v56.888889h56.888889v-56.888889z m0-113.777778h-56.888889v56.888889h56.888889v-56.888889z m227.555556 0h-170.666667v56.888889h170.666667v-56.888889z"
                  fill="#FFF9BE"
                  p-id="13744"
                ></path>
              </svg>
              创建目录
            </div>
            <div class="hover-item">
              <svg
                t="1719125622327"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5482"
                width="18"
                height="18"
              >
                <path
                  d="M809.152 96A118.848 118.848 0 0 1 928 214.848v594.304A118.848 118.848 0 0 1 809.152 928H214.848A118.848 118.848 0 0 1 96 809.152V214.848A118.848 118.848 0 0 1 214.848 96h594.304z"
                  fill="#4C87FF"
                  p-id="5483"
                ></path>
                <path
                  d="M809.152 96c6.784 0 13.44 0.576 19.968 1.664L349.696 928H214.848A118.848 118.848 0 0 1 96 809.152V214.848A118.848 118.848 0 0 1 214.848 96h594.304z"
                  fill="#7BA6FE"
                  p-id="5484"
                ></path>
                <path
                  d="M360.16 352h111.68c13.216 0 18.56 1.472 23.776 4.288 5.216 2.784 9.312 6.88 12.096 12.096 2.816 5.216 4.288 10.56 4.288 23.776v15.68c0 13.216-1.472 18.56-4.288 23.776a29.088 29.088 0 0 1-12.096 12.096c-5.216 2.816-10.56 4.288-23.776 4.288h-111.68c-13.216 0-18.56-1.472-23.776-4.288a29.088 29.088 0 0 1-12.096-12.096c-2.816-5.216-4.288-10.56-4.288-23.776v-15.68c0-13.216 1.472-18.56 4.288-23.776a29.088 29.088 0 0 1 12.096-12.096c5.216-2.816 10.56-4.288 23.776-4.288zM360.16 576h303.68c13.216 0 18.56 1.472 23.776 4.288 5.216 2.784 9.312 6.88 12.096 12.096 2.816 5.216 4.288 10.56 4.288 23.776v15.68c0 13.216-1.472 18.56-4.288 23.776a29.088 29.088 0 0 1-12.096 12.096c-5.216 2.816-10.56 4.288-23.776 4.288h-303.68c-13.216 0-18.56-1.472-23.776-4.288a29.088 29.088 0 0 1-12.096-12.096c-2.816-5.216-4.288-10.56-4.288-23.776v-15.68c0-13.216 1.472-18.56 4.288-23.776a29.088 29.088 0 0 1 12.096-12.096c5.216-2.816 10.56-4.288 23.776-4.288z"
                  fill="#FFFFFF"
                  p-id="5485"
                ></path>
              </svg>
              创建记录
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
@import "@/styles/mixin";
.drawer-sidebar {
  box-sizing: border-box;
  padding-top: 20px;
  .sidebar-search {
    padding: 0 20px;
    display: flex;
    align-items: center;
    .search-bar {
      flex: 1;
      height: 32px;
      position: relative;
      .icon_s {
        position: absolute;
        top: 8px;
        left: 8px;
        color: #747474;
      }
      input {
        width: 100%;
        height: 32px;
        padding: 0 20px 0 30px;
        border-radius: 4px;
        box-sizing: border-box;
        outline: none;
        background-color: #f2f3f3;
        border-radius: 8px;
      }
    }
    .create {
      margin-left: 10px;
      width: 30px;
      height: 30px;
      border-radius: 8px;
      border: 1px solid #e3e6e5;
      color: #747474;
      @include flex-center();
      position: relative;
      cursor: pointer;
      &:hover {
        .create__hover {
          display: block;
        }
      }
      .create__hover {
        display: none;
        position: absolute;
        left: 0;
        top: 32px;
        padding-top: 10px;
        .create-hover-box {
          background-color: var(--bg-main);
          border: 1px solid var(--border);
          border-radius: 8px;
          width: 120px;
          font-size: 14px;
          color: var(--text-second);
          line-height: 30px;
          padding: 10px;
          .hover-item {
            display: flex;
            align-items: center;
            gap: 5px;
            padding-left: 8px;
            border-radius: 8px;
            cursor: pointer;
            &:hover {
              background-color: var(--bg-menu__hover);
            }
          }
        }
      }
    }
  }
}
</style>
