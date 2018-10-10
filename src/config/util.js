import {
  LBFQAUTHINFO
} from './env'

let newAuthData = {
  reqApplicationType: "webHtml",
  reqApplicationVersion: "1.0",
  osName: navigator.platform,
  osVersion: navigator.appName,
  appDownChannel: "web",
  mobileModel: navigator.userAgent,
  packageName: "",
  versionName: "",
  token: "",   
  channelCode: "",  //渠道号 H5_LBK
  productCode: ""    //产品号 LBK
}

/**
 * 获取localStorage
 * @param {any} name
 * @returns {any} localStorage
 */
export const getLocalStore = name => {
  if (!name) return
  let res = window.localStorage.getItem(name);
  if (res) {
    let temp = JSON.parse(res);
    temp = typeof temp === "object" ? temp : res;
    return temp;
  }
  switch (name) {
    case LBFQAUTHINFO:
      return _.cloneDeep(newAuthData)
    default:
      return {}
  }
}

/**
 * 存储localStorage
 * @param {any} name
 * @param {any} content
 */
export const setLocalStore = (name, content) => {
  if (!name) return
  let store = getLocalStore(name);
  _.extend(store, content);
  content = JSON.stringify(store);
  window.localStorage.setItem(name, content);
}

/**
 * 获取sessionStorage
 * @param {any} name
 * @returns {any} sessionStorage
 */
export const getSessionStore = name => {
  if (!name) return null;
  let res = window.sessionStorage.getItem(name);
  let temp = {};
  if (res) {
    temp = JSON.parse(res);
    temp = typeof temp === "object" ? temp : res;
  }
  return temp;
}

/**
 * 存储sessionStorage
 * @param {any} name
 * @param {any} content
 */
export const setSessionStore = (name, content) => {
  if (!name) return
  let store = getSessionStore(name);
  _.extend(store, content);
  content = JSON.stringify(store);
  window.sessionStorage.setItem(name, content);
}

/**
 * 清除sessionStorage
 * @param {any} name
 * @param {any} content
 */
export const clearSessionStore = (name) => {
  if (!name) return
  window.sessionStorage.removeItem(name);
}
