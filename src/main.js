// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import MintUI from 'mint-ui';
import Lodash from 'lodash'
import 'mint-ui/lib/style.css';
import './assets/style/my-mint.css'; // 用户覆盖全局mintui样式

import { Swipe, SwipeItem } from 'mint-ui';
import axios from 'axios';//引入文件

import qs from 'qs'
import lbdUtil from './utils/util'
import 'babel-polyfill'
import api from './http/index'

Vue.use(MintUI)
Vue.use(Lodash)
Vue.use(api)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
FastClick.attach(document.body)
Vue.prototype.$http = axios;//将axios挂载到Vue实例中的$ajax上面,在项目中的任何位置通过this.$http使用
axios.defaults.timeout = 10000;
Vue.prototype.$qs = qs;
Vue.prototype.lbdUtil = lbdUtil;//自定义工具类
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.prototype.adroideF = function (){
  window.javaScriptFunction.checkIdCard();
}
