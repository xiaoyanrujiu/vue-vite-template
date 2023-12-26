const mineRouter = [
  {
    path: "/mine",
    component: () => import("@/views/mine/index.vue"),
    meta: {
      title: "个人"
    }
  }
];

export default mineRouter;
