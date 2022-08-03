// 该文件专门用于创建整个应用的路由器

// 引入组件
import AboutIndex from '../pages/About'
import HomeIndex from '../pages/Home'

import VueRouter from 'vue-router'

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: AboutIndex
        },
        {
            path: '/home',
            component: HomeIndex,
        },
    ]
})