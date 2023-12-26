import { EnumStorageKey } from "@/enums";
import { setStorage, getStorageFromKey, removeStorageFromKey } from "./common/storage";
import type { AuthInfo } from "@/interface";

/** 设置token */
export function setToken(token: string) {
  setStorage(EnumStorageKey.token, token);
}

/** 获取token */
export function getToken() {
  return getStorageFromKey<string>(EnumStorageKey.token) || "";
}

/** 去除token */
export function removeToken() {
  removeStorageFromKey(EnumStorageKey.token);
}

/** 设置用户信息 */
export function getUserInfo() {
  const emptyInfo: AuthInfo = {
    accountNo: "",
    username: ""
  };
  const userInfo: AuthInfo = getStorageFromKey<AuthInfo>(EnumStorageKey["user-info"]) || emptyInfo;
  return userInfo;
}

/** 获取用户信息 */
export function setUserInfo(userInfo: AuthInfo) {
  setStorage(EnumStorageKey["user-info"], userInfo);
}

/** 去除用户信息 */
export function removeUserInfo() {
  removeStorageFromKey(EnumStorageKey["user-info"]);
}

/** 去除用户相关缓存 */
export function clearAuthStorage() {
  removeToken();
  removeUserInfo();
}
