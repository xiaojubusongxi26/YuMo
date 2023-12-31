import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '首页',
    children: [],
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router