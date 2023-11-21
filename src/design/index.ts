import type { App } from "vue";

import { Button } from "ant-design-vue";

export function setDesign(app: App) {
  app.use(Button);
}
