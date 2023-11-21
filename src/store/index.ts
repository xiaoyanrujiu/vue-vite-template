import type { App } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// 持久化
export async function setupStore(app: App) {
  const store = createPinia();
  await store.use(piniaPluginPersistedstate);
  app.use(store);
}
