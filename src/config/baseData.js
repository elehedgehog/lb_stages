import {
  setLocalStore
} from './util';
import {
  LBFQAUTHINFO
} from './env'

// const autoConfig = {
//   methods: {
//     getAppConfig() {
//       let u = navigator.userAgent;
//       let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
//       if (isAndroid) {
//         let info = window.javaScriptFunction.getDeviceInfo();
//         let res = JSON.parse(info);
//         setLocalStore(LBFQAUTHINFO, {
//           reqApplicationType: res.reqApplicationType,
//           reqApplicationVersion: res.reqApplicationVersion,
//           osName: res.osName,
//           osVersion: res.appName,
//           appDownChannel: res.appDownChannel,
//           mobileModel: res.mobileModel,
//           packageName: res.packageName,
//           versionName: res.versionName,
//         })
//       }

//       // if (u.indexOf('iPhone') > -1) {  // ios 
//       //   bridge.callHandler('sendAppPublicParamBridge', function callBack(res) {
//       //     if (res) {
//       //       let obj = JSON.parse(response);
//       //       setLocalStore(LBFQAUTHINFO, {
//       //         osName: obj.osName,
//       //         osVersion: obj.appName,
//       //         mobileModel: obj.mobileModel,
//       //         packageName: obj.packageName,
//       //         versionName: obj.versionName
//       //       })
//       //     }
//       //   })
//       // }
//     }
//   }
// }
// export {
//   autoConfig
// }

export const getRequestBaseData = () => {
  let u = navigator.userAgent;
  let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
  if (isAndroid) {
    let info = window.javaScriptFunction.getDeviceInfo();
    let res = JSON.parse(info);
    setLocalStore(LBKAUTHINFO, {
      reqApplicationType: res.reqApplicationType,
      reqApplicationVersion: res.reqApplicationVersion,
      osName: res.osName,
      osVersion: res.appName,
      appDownChannel: res.appDownChannel,
      mobileModel: res.mobileModel,
      packageName: res.packageName,
      versionName: res.versionName,
    })
  }
}
