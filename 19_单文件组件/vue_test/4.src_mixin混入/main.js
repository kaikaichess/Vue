// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 引入混入（全局引入）
// import {mixin1, mixin2} from './mixin'
// 所有Vue实例、组件都引入mixin1和mixin2（全局引入，包括Root）
// Vue.mixin(mixin1)
// Vue.mixin(mixin2)

// 关闭Vue生产提示
Vue.config.productionTip = false
// 创建Vue实例——vm
new Vue({
    el:'#app',
    render: h => h(App)
})