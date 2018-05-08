import Vue from 'vue'
import App from './App.vue'
import router from '@/router.js'
import store from '@/store'
import lazyRender from 'vue-lazy-render'

Vue.use(lazyRender)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
