import type { Router } from "vue-router";

/**
 * 路由守卫函数
 * @param router - 路由实例
 */
export function createRouterGuard(router: Router) {
  // 页面菜单和跳转权限处理
  router.beforeEach(async (to, from, next) => {
    next();
  });
  router.afterEach(to => {});
}
