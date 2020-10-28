import Vue from 'vue'
import App from './App'
import controller from './util/controller'
import store from './store' 
import util from './util/util'
// 公用组件
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
import cuBar from './colorui/components/cu-bar.vue'
Vue.component('cu-bar',cuBar)
import cuBar2 from './colorui/components/cu-bar2.vue'
Vue.component('cu-bar2',cuBar2)
import cuCell from './colorui/components/cu-cell.vue'
Vue.component('cu-cell',cuCell)
import cuSearch from './colorui/components/cu-search.vue'
Vue.component('cu-search',cuSearch)
import cuNoSearch from './colorui/components/cu-nosearch.vue'
Vue.component('cu-nosearch',cuNoSearch)
import more from './colorui/components/cu-more.vue'
Vue.component('cu-more',more)
import grids from './components/single/grid/grids.vue';
Vue.component('grids',grids)
// import ShowModel from './components/custom_components/show_model.vue';
// Vue.component('show-model',ShowModel)
Vue.config.productionTip = false
Vue.prototype.util = util;
Vue.prototype.$controller = controller;
Vue.prototype.$store = store;
// Vue.prototype.$ShowModel = ShowModel;
App.mpType = 'app'

const app = new Vue({
	store,
	controller,
	// ShowModel,
    ...App
})
app.$mount()
