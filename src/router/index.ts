import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { menuActiveIndexStore } from "@/store/menuActiveIndex";


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: { menuIndex: 'home' },
    component: () => import('../components/Home/index.vue')

  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/research',
    name: 'research',
    meta: { menuIndex: 'research' },
    component: () => import('../components/Research/index.vue')
  },
  {
    path: '/publications',
    name: 'publications',
    meta: { menuIndex: 'publications' },
    component: () => import('../components/Publications/index.vue')
  },
  {
    path: '/people',
    name: 'people',
    meta: { menuIndex: 'people' },
    component: () => import('../components/People/index.vue')
  },
  {
    path: '/news',
    name: 'news',
    meta: { menuIndex: 'news' },
    component: () => import('../components/News/index.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    meta: { menuIndex: 'contact' },
    component: () => import('../components/Contact/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, _, next) => {
  //存储导航菜单的高亮选项，防止刷新时高亮丢失
  menuActiveIndexStore().changeActiveIndex(to.name as string)
  next()
})

export default router
