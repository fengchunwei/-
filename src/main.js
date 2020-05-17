// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './all.css'

import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//导入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
import http from '../api/http.js'
Vue.prototype.$axios = axios
Vue.use(VueAxios, axios)
Vue.use(VueAxios, http)
Vue.prototype.HOST = '/api'
// Vue.prototype.HOST1 = '/url'


//导入mint-ui
import '../node_modules/mint-ui/lib/style.css'
import Mint from 'mint-ui';
Vue.use(Mint);


// 引入mui
import './lib/mui/css/mui.min.css'
import './lib/mui/fonts/mui.ttf'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'
import mui from './lib/mui/js/mui.js'
Vue.prototype.mui = mui


//引入vant

import { Search,List,PullRefresh } from 'vant';
Vue.use(PullRefresh);
Vue.use(Search);
Vue.use(List);



Vue.config.productionTip = false

/* eslint-disable no-new */


//创建vuex对象实例     先创建store 再在vue中调用，否则会报错
let store = new Vuex.Store({
  state:{
    //audio时间
    currentTime:0,
    //播放进度属性
    prossTime:0
  },
  mutations:{
    //修改currentTime
    changeCurrentTime(state,{currentTime}){
        state.currentTime = currentTime
    },
    //修改prosstime
    changeProssTime(state,{prossTime}){
      state.prossTime = prossTime
    }
  },
  getters:{}
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
