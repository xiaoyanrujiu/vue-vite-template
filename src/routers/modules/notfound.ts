const notfoundRouter = [
  {
    path: "/403",
    component: () => import("@/views/notfound/403.vue"),
    meta: {
      title: "暂无权限"
    }
  },
  {
    path: "/404",
    component: () => import("@/views/notfound/404.vue"),
    meta: {
      title: "页面未找到"
    }
  },
  {
    path: "/500",
    component: () => import("@/views/notfound/500.vue"),
    meta: {
      title: "服务端错误"
    }
  }
];

export default notfoundRouter;
