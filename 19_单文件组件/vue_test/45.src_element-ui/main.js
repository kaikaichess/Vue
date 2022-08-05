// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 完整引入
// 引入ElementUI组件库
// import ElementUI from 'element-ui';
// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';
// 关闭Vue生产提示
// 应用ElementUI
// Vue.use(ElementUI);

// 部分引入
import { Button, Row  } from 'element-ui';
// 注册全局组件
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);

Vue.config.productionTip = false




// 创建Vue实例——vm
new Vue({
    el:'#app',
    render: h => h(App),
})