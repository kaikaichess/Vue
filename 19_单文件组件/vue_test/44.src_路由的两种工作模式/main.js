// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入vue-router
import VueRouter from 'vue-router'
// 引入路由器
import router from './router/index'
// 关闭Vue生产提示
Vue.config.productionTip = false

// 使用插件VueRouter
Vue.use(VueRouter)


// 创建Vue实例——vm
new Vue({
    el:'#app',
    render: h => h(App),
    router: router
})