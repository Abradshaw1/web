import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'
import CVView from '@/views/CVView.vue'

const router = createRouter({
  history: createWebHashHistory('/web/'), // 使用 hash 模式，并加上 /home/ 前缀
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/cv', // 新增 CV 路由
      name: 'cv',
      component: CVView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth', // 让滚动更平滑
      }
    } else {
      return { top: 0 }
    }
  }
})

export default router
