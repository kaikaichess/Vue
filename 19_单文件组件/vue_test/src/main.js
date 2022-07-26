// 这是整个项目的入口文件

// 引入Vue
import Vue from 'vue'
// 引入APP组件，它是所有组件的父组件
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false
// 创建Vue实例对象--vm
new Vue({
  // 将APP组件放入容器中
  render: h => h(App) // createElement简写为h，然后把函数写成箭头函数
  // render(createElement) {   
  //   return createElement(App)
  // }
}).$mount('#app')
