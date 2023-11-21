const homeRouter = [
  {
    path: "/home",
    component: () => import("@/views/home/index.vue"),
    meta: {
      title: "首页"
    }
  }
];

export default homeRouter;
