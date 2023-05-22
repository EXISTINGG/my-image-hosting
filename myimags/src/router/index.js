import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home', 
    name: 'home', 
    component: () => import('@/views/Home.vue'),
    children: [
      {path: 'icon', name: 'icon', component: () => import('@/views/ImgList.vue')},
      {path: 'favicon', name: 'favicon', component: () => import('@/views/ImgList.vue')},
      {path: 'image', name: 'image', component: () => import('@/views/ImgList.vue')}
    ]
  },
]

// 创建路由实例对象
const router = createRouter({
  // 通过createWebHashHistory属性指定路由工作模式
  history: createWebHashHistory(),
  routes
})


//共享路由
export default router
