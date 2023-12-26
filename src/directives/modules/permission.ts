/**
 * v-permission
 * 按钮权限指令
 */
import { useAuthStore } from "@/store/modules/auth";
import type { Directive, DirectiveBinding } from "vue";
import { isArray } from "@/utils";
import { storeToRefs } from "pinia";

const checkPermission = (permission: string[] | string): boolean => {
  const authStore = useAuthStore();
  const { authRole } = storeToRefs(authStore);

  if (isArray(permission)) {
    return permission.includes(authRole.value);
  } else {
    return authRole.value === permission;
  }
};

const permissionDirective: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding;
    if (!checkPermission(value)) {
      // el.remove();
      el.parentNode && el.parentNode.removeChild(el);
    }
    // if (!checkPermission(value)) {
    //   el.style.display = "none";
    //   el.setAttribute("disabled", "disabled");
    // } else {
    //   el.style.display = "block";
    //   el.removeAttribute("disabled");
    // }
  }
  // updated(el: HTMLElement, binding: DirectiveBinding) {
  //   const { value } = binding;
  //   if (!checkPermission(value)) {
  //     el.style.display = "none";
  //     el.setAttribute("disabled", "disabled");
  //   } else {
  //     el.style.display = "block";
  //     el.removeAttribute("disabled");
  //   }
  // }
};

export default permissionDirective;
