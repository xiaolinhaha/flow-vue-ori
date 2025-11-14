import router from '@/router'

// 简单的路由守卫占位，可按需扩展鉴权逻辑
router.beforeEach((to, from, next) => {
  next()
})