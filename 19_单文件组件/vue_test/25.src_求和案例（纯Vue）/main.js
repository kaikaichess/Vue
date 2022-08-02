// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入插件vue-resource
import vueResource from 'vue-resource'
// 关闭Vue生产提示
Vue.config.productionTip = false

// 使用插件vue-resource
Vue.use(vueResource)

// 创建Vue实例——vm
new Vue({
    el:'#app',
    render: h => h(App),
    beforeCreate() {
        // 安装全局事件总线
        Vue.prototype.$bus = this
    }
})