// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引用mint-ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

// 引入mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//引用rem布局
import './assets/js/rem.js'

//时间格式化
import moment from 'moment'
Vue.filter('dateFormat',function(dateStr,pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment(dateStr).format(pattern)
})

// 引入vue-resource
import  VueResource  from 'vue-resource'
Vue.use(VueResource) 

// 引入缩略图插件
import VuePreview from 'vue-preview';
Vue.use(VuePreview)

//引入vuex
import store from './store/cart'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
