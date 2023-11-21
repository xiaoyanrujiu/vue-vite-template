import { defineStore } from "pinia";
import type { AuthState } from "@/interface";
import { piniaPersistConfig } from "@/store/utils";

export const useAuthStore = defineStore({
  id: "auth-store",
  state: (): AuthState => ({
    authRole: "admin"
  }),
  actions: {
    setAuthRole(role: string) {
      this.authRole = role;
    }
  },
  persist: piniaPersistConfig("auth-store")
});
