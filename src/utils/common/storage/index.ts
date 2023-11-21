import { encrypt, decrypt } from "../crypto";

// 默认存储时间是 7 天
const defaultExpire = 7 * 24 * 60 * 60 * 1000;

/**
 * @description  设置
 */
const setStorage = (key: string, value: any, expire: number = defaultExpire): boolean => {
  //设定值
  if (value === "" || value === null || value === undefined) {
    //空值重置
    value = null;
  }
  if (isNaN(expire) || expire < 0) {
    //过期时间值合理性判断
    throw new Error("Expire must be a number");
  }
  const data = {
    value, //存储值
    time: Date.now(), //存储日期
    expire: Date.now() + expire //过期时间
  };

  //是否需要加密，判断装载加密数据或原数据
  localStorage.setItem(key, encrypt(JSON.stringify(data)));
  return true;
};

/**
 * @description  根据key获取value
 */
const getStorageFromKey = <T>(key: string): T | null => {
  if (!localStorage.getItem(key)) {
    //不存在判断
    return null;
  }
  const storageVal = JSON.parse(decrypt(localStorage.getItem(key) as string));
  const now = Date.now();
  if (now >= storageVal.expire) {
    //过期销毁
    removeStorageFromKey(key);
    return null;
    //不过期回值
  } else {
    return storageVal.value as T;
  }
};

/**
 * @description 获取所有存储值
 */
const getAllStorage = () => {
  //获取所有值
  const storageList: any = {};
  const keys = Object.keys(localStorage);
  keys.forEach(key => {
    const value = getStorageFromKey(key);
    if (value !== null) {
      //如果值没有过期，加入到列表中
      storageList[key] = value;
    }
  });
  return storageList;
};

/**
 * @description 获取存储值数量
 */
const getStorageLength = () => {
  //获取值列表长度
  return localStorage.length;
};

/**
 * @description 根据key删除存储值
 */
const removeStorageFromKey = (key: string) => {
  // 删除值
  localStorage.removeItem(key);
};

/**
 * @description 清空存储列表
 */
const clearStorage = () => {
  localStorage.clear();
};

export { setStorage, getStorageFromKey, getAllStorage, getStorageLength, removeStorageFromKey, clearStorage };
