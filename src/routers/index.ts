import type { App } from "vue";
import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import { createRouterGuard } from "./guard";

// 导入所有router
const metaRouters = import.meta.glob("./modules/*.ts", { eager: true, import: "default" });
// 处理路由
const routerArray = Object.values(metaRouters).flat() as RouteRecordRaw[];

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  ...routerArray,
  {
    path: "/:path(.*)",
    redirect: "/404"
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});

export async function setupRouter(app: App) {
  app.use(router);
  createRouterGuard(router);
  await router.isReady();
}

export default router;
