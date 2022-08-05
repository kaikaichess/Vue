// 该文件专门用于创建整个应用的路由器

// 引入组件
import AboutIndex from '../pages/About'
import HomeIndex from '../pages/Home'
import NewsIndex from '../pages/News'
import MessageIndex from '../pages/Message'
import DetailIndex from '../pages/Detail'

import VueRouter from 'vue-router'

// 创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'About',
            path: '/about',
            component: AboutIndex,
            meta: {title: '关于'}
        },
        {
            name: 'Home',
            path: '/home',
            component: HomeIndex,
            children: [
                {
                    name: 'News',
                    path: 'news', // 此处一定不要写 "/news"
                    component: NewsIndex,
                    meta: {isAuth: true, title: '新闻'},
                    beforeEnter: (to, from, next) => {
                        if(to.meta.isAuth) { // 判断是否需要权限
                            if(localStorage.getItem('school') === 'atguigu') {
                                next()
                            } else {
                                alert('无权限')
                            }
                        } else {
                            next()
                        }
                    }
                },
                {
                    name: 'Message',
                    path: 'message', // 此处一定不要写 "/message"
                    component: MessageIndex,
                    children: [
                        {
                            name: 'Detail',
                            // path: 'detail/:id/:title', // 用占位符声明接收参数
                            path: 'detail',
                            component: DetailIndex,
                            // props的第一种写法，值为对象，该对象中所有的key: value都会以props的形式传给Detail组件
                            // props: {a: 1, b: 'hello'}
                            // props的第二种写法，值为布尔值，若为true则会把该路由组件收到的所有params参数以props的形式传给Detail组件
                            // props: true
                            // props的第三种写法，值为函数，配合query传值使用
                            props($route) {
                                return {id: $route.query.id, title: $route.query.title}
                            },
                            meta: {isAuth: true, title: '详情'}
                        }
                    ],
                    meta: {isAuth: true, title: '资讯 '}
                },
            ],
            meta: {title: '主页'}
        },
    ]
})

// 全局前置路由守卫，初始化和每次路由切换之前被调用
// router.beforeEach((to, from, next) => {
//     if(to.meta.isAuth) { // 判断是否需要权限
//         if(localStorage.getItem('school') === 'atguigu') {
//             next()
//         } else {
//             alert('无权限')
//         }
//     } else {
//         next()
//     }
// })

// 全局后置路由守卫，初始化和每次路由切换之后被调用
// router.afterEach((to) => {
//     document.title = to.meta.title || '系统'
// })

export default router