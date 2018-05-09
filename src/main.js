import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from '@/router.js'
import store from '@/store'
import lazyRender from 'vue-lazy-render'
import '../static/mock.js'
Vue.use(lazyRender)
Vue.prototype.$axios = axios
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
