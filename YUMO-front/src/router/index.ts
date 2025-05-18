import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../views/index.vue"),
    children: [
      {
        path: "/",
        name: "首页",
        component: () => import("@/views/home.vue"),
      },
      {
        path: "/tools",
        name: "工具箱",
        component: () => import("@/views/tools.vue"),
      },
      {
        path: "/photo",
        name: "照片墙",
        component: () => import("@/views/photo.vue"),
      },
      {
        path: "/map",
        name: "游记",
        component: () => import("@/views/map.vue"),
      },
      {
        path: "/document",
        name: "文档",
        component: () => import("@/views/document-list.vue"),
      },
      {
        path: "/drawer",
        name: "抽屉",
        component: () => import("@/views/drawer.vue"),
      },
      {
        path: "/page/:pid",
        name: "文档详情",
        component: () => import("@/views/document.vue"),
      },
      {
        path: "/test",
        name: "测试",
        component: () => import("@/views/test.vue"),
      },
      {
        path: "/center",
        name: "中转页",
        component: () => import("@/views/center.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "登录页",
    component: () => import("@/views/login.vue"),
    children: [],
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
