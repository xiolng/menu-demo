import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/page1-1',
    name: 'Page1-1',
    component: () => import('../views/Page1-1')
  },
  {
    path: '/page1-2',
    name: 'Page1-2',
    component: () => import('../views/Page1-2')
  },
  {
    path: '/page1-3',
    name: 'Page1-3',
    component: () => import('../views/Page1-3')
  },
  {
    path: '/page2-1',
    name: 'Page2-1',
    component: () => import('../views/Page2-1')
  },
  {
    path: '/page2-2',
    name: 'Page2-2',
    component: () => import('../views/Page2-2')
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
