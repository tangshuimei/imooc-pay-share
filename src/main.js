/**
 * @author tangshuimei
 * @description 项目入口执行文件
*/
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAxios,axios)

axios.interceptors.request.use(function(){
  //loading、请求地址的替换、修改
})
axios.interceptors.response.use(function(response){
  let res = response.data
  // 业务代码报错，如未登录
  if(res.code != 0){
    alert(res.message)
  }
},function(error){
  // 网络请求报错，通过catch可以捕获
  return Promise.reject(error)
})

new Vue({
  render: h => h(App),
}).$mount('#app')



