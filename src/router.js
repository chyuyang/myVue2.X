import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const home = resolve =>require(['@/views/home'],resolve);
const other = resolve =>require(['@/views/other'],resolve);
const routes = [
  {
  	path:'/',
  	redirect:'/home'
  },
  {
  	path:'/home',
  	name:'home',
  	component:home
  },
  {
  	path:'/other',
  	name:'other',
  	component:other
  }
]
const router = new VueRouter({routes})
export default router