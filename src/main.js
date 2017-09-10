// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias
// 对es6 api进行转译
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
// 取消300ms延迟
import fastclick from 'fastclick'
fastclick.attach(document.body)
import router from './router'
// Vue.config.productionTip = false
import 'common/stylus/index.styl'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
