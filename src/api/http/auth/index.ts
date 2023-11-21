import { httpRequest } from "@/api/request";

/**
 * @description 用户登录
 */
export function authLogin(params: { username: string; passwrod: string }) {
  return httpRequest.post(`/auth/login`, params);
}
