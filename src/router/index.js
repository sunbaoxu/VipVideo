import Vue from 'vue'
import VueRouter from 'vue-router'


const Video = () => import('@/views/Video.vue');
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'video',
    component: Video
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
