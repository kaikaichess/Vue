// 这是整个项目的入口文件

// 引入Vue
import Vue from 'vue'
// 引入APP组件，它是所有组件的父组件
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false

/*
  关于Vue的不同版本：
    1.vue.js与vue.runtime.xxx.js的区别
      (1)vue.js是完整版的Vue，它包含Vue核心功能和模板解析器
      (2)vue.runtime.xxx.js是运行版的Vue，它只包含核心功能，没有模板解析器
    2.因为Vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要用render函数接收createElement函数去指定具体内容
*/ 

// 创建Vue实例对象--vm
new Vue({
  // 将APP组件放入容器中
  render: h => h(App) // createElement简写为h，然后把函数写成箭头函数
  // render(createElement) {   
  //   return createElement(App)
  // }
}).$mount('#app')
