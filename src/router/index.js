import { createRouter, createWebHashHistory } from 'vue-router'

import layoutDefault from '@/layouts/default/index.vue'

const routes = [
  {
    path: '/',
    component: layoutDefault,
    children: [
      {
        path: '',
        component: () => import('@/views/home.vue')
      },
      {
        path: 'example',
        component: () => import('@/views/example/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
