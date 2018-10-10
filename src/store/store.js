import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// TODO: 此文件命名规则需要统一为首字母大写
const state = {
    IsAndroid: false  // 判断是否是安卓
}
export default new Vuex.Store({
    state
})