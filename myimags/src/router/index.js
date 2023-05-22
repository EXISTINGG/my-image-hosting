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

// 使用 router.beforeEach 注册一个全局前置守卫
// router.beforeEach((to, from, next) => {
//   // to: 即将要进入的目标
//   // from: 当前导航正要离开的路由
//   /**
//    * next 是一个函数, 调用 next()表示放行,允许这次路由导航
//    * 1 有后台权限,直接放行 next()
//    * 2 无权限.强制跳转到页面 next('/login')
//    * 3 无权限.不允许转到页面 next(false)
//    */
//   if (to.path === '/myinfo') {
//     // 判断是否有token
//     const token = localStorage.getItem('token')
//     if (token) {
//       next()
//     } else {
//       next('/login')
//     }
//   } else {
//     next()
//   }
// })

//共享路由
export default router
