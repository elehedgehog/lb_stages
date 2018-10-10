const axios = require('axios');
const qs = require('qs');
import {
  getLocalStore
} from '../config/util';
import {
  BASEURLPATH,
  LBFQAUTHINFO
} from '../config/env';
export default function $axios(option) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: BASEURLPATH,
      method: option.method || 'POST',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      data: {},
      timeout: 3000,
      responseType: 'json',
    })

    function uploadData(postData) {
      // 上传图片信息
      let formData = new FormData();
      formData.append("token", postData.token);
      formData.append("channelCode", postData.channelCode);
      formData.append("orderCode", postData.orderCode); //"LLBB20180727656351"this.orderCode
      for (var j = 0; j < postData.orderVouchers.length; j++) {
        formData.append("orderVouchers", postData.orderVouchers[j].File); //追加file 对象
      }
      return formData;
    }
    // request 请求拦截器
    instance.interceptors.request.use(config => {
      let authInfo = getLocalStore(LBFQAUTHINFO);
      if (config.isFormData) {
        // 表单数据
        let postDatas = _.extend({}, config.data, authInfo);
        config.data = uploadData(postDatas);
      } else {
        Object.assign(config.data, authInfo);
        config.data = qs.stringify(config.data);
      }
      return config;
    }, err => {
      // 请求错误
      console.log(`request: ${err}`)
      return Promise.reject(err);
    })

    // response 响应拦截器
    instance.interceptors.response.use(response => {
      let data;
      //  IE9 response.data 是 undefined
      if (response.data == undefined) {
        data = response.request.response;
      } else {
        data = response.data;
      }
      return data;
    }, err => {
      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            err.message = '请求错误'
            break;
          default:
        }
      }
      return Promise.reject(err);
    })
    instance(option).then(res => {
      resolve(res);
    }, err => {
      reject(err);
    })
  })
}
