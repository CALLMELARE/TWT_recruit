/*
 * @Author: TWT Studio
 * @Date: 2021-03-23 20:18:26
 * @LastEditTime: 2021-03-23 20:19:41
 * @Description: Common functions
 */

/*
 * 判断是安卓还是iOS
 */
export const phoneModel = () => {
  const u = navigator.userAgent;
  const app = navigator.appVersion;
  const isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1; //android终端或者uc浏览器
  const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if (isAndroid) return "android";
  if (isiOS) return "ios";
};

/*
 * 判断是否是微信浏览器
 */
export const isWeChat = () => {
  //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
  const ua = navigator.userAgent;
  //通过正则表达式匹配ua中是否含有MicroMessenger字符串
  return !!ua.match(/MicroMessenger/i);
};

/*
 * 用来拉取url中的某个参数
 */
export const getQueryParamByKey = (paramName) => {
  let url = document.location.toString();
  // 如果url中有特殊字符则需要进行一下解码
  url = decodeURI(url);
  const arrObj = url.split("?");
  if (arrObj.length > 1) {
    const arrPara = arrObj[1].split("&");
    let arr;
    for (let i = 0; i < arrPara.length; i++) {
      arr = arrPara[i].split("=");
      if (arr != null && arr[0] == paramName) {
        return decodeURIComponent(arr[1]);
      }
    }
    return "";
  } else {
    return "";
  }
};
