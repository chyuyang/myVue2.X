import Vue from "vue"
import Vuex from "vuex"
import * as actions from './actions'
import * as mutations from './mutations'
import getters from './getters'
import state from './state'
Vue.use(Vuex)

export default new Vuex.Store({
	actions,
	getters,
	state,
	mutations
})