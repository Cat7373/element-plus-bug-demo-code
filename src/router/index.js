import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes = [
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/error/404.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        name: 'Home',
        path: '/home',
        component: () => import('@/views/home/index.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

function check404(guard, router) {
  if (!router.hasRoute(guard.name)) {
    router.push({ name: '404' })
    return
  }
}

router.beforeEach((guard) => {
  check404(guard, router)
})

export default router
