import { createApp } from "vue";
import App from "./App.vue";
import { setupStore } from "@/store";
import { setupRouter } from "@/router";
import { setDesign } from "@/design";
import { setupDirective } from "@/directive";

async function setupApp() {
  const app = createApp(App);

  // 挂载pinia状态
  await setupStore(app);

  // 挂载路由
  await setupRouter(app);

  // 挂载 ant-design
  await setDesign(app);

  // 挂载自定义指令
  await setupDirective(app);

  // 路由准备就绪后挂载 App
  app.mount("#app");
}

setupApp();
