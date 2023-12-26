import type { App, Directive } from "vue";

// 导入所有 directive
const directiveList: Record<string, Directive> = import.meta.glob("./modules/*.ts", { eager: true, import: "default" });

export async function setupDirective(app: App) {
  const directive = {
    install: function (directiveApp: App<Element>) {
      Object.keys(directiveList).forEach(key => {
        directiveApp.directive(key.replace(/^\.\/modules\/(.+)\.ts$/, "$1"), directiveList[key]);
      });
    }
  };
  app.use(directive);
}
