# ref属性
    1.被用来给元素或子组件注册引用信息（id属性的替代）
    2.应用在html标签上获取的是真实DOM元素，应用在组件标签上获取的是其对应的组件实例对象
    3.使用方法；
        打标识：<h1 ref="xxx"></h1> 或 <SchoolIndex ref="xxx"/>
        获取：this.$refs.xxx
# 配置项props
    功能：让组件接收外部传递过来的参数
        1.传递数据：<Demo name="xxx">
        2.接收数据：
            (1)仅接收：props：['name']
            (2)限制类型接收：props: {name: String}
            (3)限制类型、必要性、指定默认值接收：props: {name: {type: String, required: true, default: '老王'} }
        3.props数据是只读的，Vue底层会限制你对props的修改，如果进行修改，会发出警告；若一定要修改，可以复制props数据到data中，然后修改data中的数据
# mixin混入
    功能：可以把多个组件共用的配置提取成一个混入对象
    使用方法：
        1.定义混入：const mixin1 = {data() {}, methods() {} ...}
        2.使用混入：
            (1)全局混入：Vue.mixin()
            (2)局部混入：mixins: ['mixin1']
# 插件
    功能：用于增强Vue
    本质：包含install方法的一个对象，install的第一个参数是Vue，第二个姐以后的参数是插件使用者传递的数据
    定义插件：
        obj.install = function(Vue,options...) {
            // 添加全局过滤器
            Vue.filter(...)
            // 添加全局指令
            Vue.directive(...)
            // 添加...
        }
    使用插件：Vue.use(xxx)
# scoped样式
    作用：让样式在局部生效，防止各组件CSS样式冲突
    写法：<style scoped></scoped>
# 总结TodoList案例
    1.组件化编码流程：
        (1)拆分静态组件：最贱要按照功能点拆分，命名不要与html元素冲突
        (2)实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用，一个组件在用就放在该组件自身，一些组件在用则放在他们共同的父组件上（状态提升）
        (3)实现交互：从绑定事件开始
    2.props适用于：
        (1)父组件 ===> 子组件 通信
        (2)子组件 ===> 父组件 通信 （要求父组件先给子组件一个函数）
    3.使用v-model时一定要注意v-model绑定的值不能是props传过来的值，因为props是单向传值，最好不要修改其值
    4.props传过来的若是对象类型的值，修改对象中的属性不会报错（因为传过来的是对象的存储地址），但不推荐这样
# webStorage
    1.存储内容大小一般支持5MB左右
    2.浏览器端通过 Window.sessionStorage 和 Window.localStorage属性来实现本地存储机制
    3.相关API：
        xxxStroage.setItem('key', 'value') 该方法接受一个键值对，会把键值对存到存储中，如果键名存在，则更新其对应的值
        xxxStroage.getItem('key', 'value') 该方法接受一个键名，返回键名所对应的键值
        xxxStroage.removeItem('key', 'value') 该方法接受一个键名，并把该键值对从存储中删除
        xxxStroage.clear() 该方法清空存储
    4.备注：
        (1)sessionStorage存储的内容会随着关闭浏览器而消失
        (2)localStorage存储的内容要手动清除才会消失
        (3)xxxStroage.getItem('key', 'value')如果对应的键名获取不到，则会返回null
        (4)JSON.parse(null)的结果仍是null
# 组件自定义事件
    1.一种组件之间的通信方式，适用于 子组件===>父组件
    2.使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（事件的回调在A中）
    3.绑定自定义事件：
        (1)第一种方式：在父组件中 <Demo @atguigu="test"/> 或 <Demo v-on:atguigu="test"/>
        (2)第二种方式：在父组件中 <Demo ref="demo"/> ... mounted() {this.$refs.xxx.$on('atguigu', this.test)}
        (3)若想让自定义事件仅触发一次，可以使用once修饰符或者$once方法
    4.触发自定义事件：this.$emit('atguigu', 要传的参数)
    5.解绑自定义事件：this.$off('atguigu')
    6.组件上也可以绑定原生事件，但是需要native修饰符
    7.注意：通过this.$refs.xxx.$on('atguigu', 回调函数)绑定自定义事件，回调要配置在methods中，或写成箭头函数，因为回调函数的this指向绑定事件的组件
# 全局事件总线（GlobalEventBus）
    1.一种组件之间通信的方式，适用于任何组件间的通信
    2.安装全局事件总线
        new Vue({
            .......
            beforeCreate() {
                Vue.prototype.$bus = this
            },
            .......
        })
    3.使用事件总线
        (1)接收数据：A组件想要接收数据，则在A组件中给$bus绑定自定义事件，事件的回调函数留在A组件自身
            methods() {
                demo(data) {......} 
            }
            .......
            mounted() {
                this.$bus.$on('xxx', this.demo)
            }
        (2)提供数据：this.$bus.$emit('xxx', data)
    4.最好在beforeDestroy钩子中，用$off解绑当前组件所用到的事件
# 消息订阅与发布（pubsub）
    1.一种组件之间的通信方式，适用于任意组件之间的通信
    2.使用步骤：
        (1)安装pubsub：npm i pubsub-js
        (2)引入：import pubsub from 'pubsub-js'
        (3)接收数据：A组件想要接收数据，则在A组件中订阅消息，订阅的回调留在A组件自身
            this.pid = pubsub.subscribe('hello', function(msgName, data) {}
        (4)提供数据：pubsub.publish('xxx', data)
        (5)最好在beforeDestroy钩子中，用pubsub.unscribe(pid)去取消订阅 
# nextTick
    1.语法：this.$nextTick(回调函数)
    2.作用：在下一次DOM更新结束后执行其回调函数
    3.一般用在数据改变之后，要基于更新后的DOM进行某些操作时，要在nextTick所指定的回调函数中执行
# Vue封装的过渡与动画
    1.作用；在插入、更新或者移除DOM元素时，在合适的时候给元素添加样式类名
    2.图示：如transition.png所示
    3.写法：
        (1)准备好样式：
            v-enter: 进入的起点（用于过渡）
            v-enter-active: 进入的过程中（用于动画）
            v-enter-to: 进入的终点（用于过渡）
            v-leave: 离开的起点（用于过渡）
            v-leave-active: 离开的过程中（用于动画）
            v-leave-to: 离开的终点（用于过渡）
        (2)使用<transition>包裹要添加过渡效果的元素，，并配置name属性
        (3)如果有多个元素要添加相同效果则使用<transition-group>包裹，并要给元素指定key值
            <transition-group name="hello" appear>
                <h1 v-show="isShow" key="1">你好啊</h1>
                <h1 v-show="isShow" key="2">尚硅谷</h1>
            </transition-group>
# Vue脚手架配置代理
    方法一：在vue.config.js中添加如下配置
         devServer: {
           proxy: 'http://localhost:5000'
         }
        优点：配置简单，请求资源时直接发给前端（8080）即可
        缺点：不能配置多个代理，不能灵活控制请求是否走代理
        工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给其他服务器（优先匹配前端资源）
    方法二：编写vue.config.js配置代理具体规则
        devServer: {
            proxy: {
            '/api': {  // 匹配所有以/api开头的请求路径
                target: 'http://localhost:5000',  // 代理目标的基础路径
                pathRewrite: {  // 重写请求路径，防止在代理服务器向服务器请求时路径出错
                '^/api': ''
                },
                ws: true, // 用于支持websocket
                changeOrigin: true // 用于控制请求头中的host值，默认值为true
            },
            '/foo': {  // 匹配所有以/foo开头的请求路径
                target: 'http://localhost:5001',
                pathRewrite: {
                '^/foo': ''
                },
            }
            }
        }
        优点：可以配置多个代理，且可以灵活控制请求是否走代理
        缺点：配置略微繁琐，请求资源时必须加前缀
# 插槽
    1.作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间的通信方式，适用于 父组件===>子组件
    2.分类：默认插槽、具名插槽、作用域插槽
    3.使用方式：
        1.默认插槽：
            父组件中：
                <CategoryIndex>
                    <div>html结构</div>
                </CategoryIndex>
            子组件中：
                <div>
                    <!-- 定义一个插槽 -->
                    <slot>默认值，当使用者没有传值时显示</slot>
                </div>
        2.具名插槽：
            父组件中：
                 <CategoryIndex>
                    <template slot="center">
                        <div>html结构1</div>
                     </template>

                     <template slot="footer">
                        <div>html结构2</div>
                     </template>
                 </CategoryIndex>
        3.作用域插槽：
            1.理解：数据在组件的自身，但根据数据生成的结构需要由组件的使用者来决定。（games数据在CategoryIndex组件中，但使用数据所遍历出来的结构由APP组件决定）
            2.具体编码：
                父组件中：
                    <CategoryIndex title="游戏">
                        <template slot-scope="scopeDate">
                            <!-- 生成的ul列表 -->
                            <ul>
                                <li v-for="(g, index) in scopeDate.games" :key="index">{{g}}</li>
                            </ul>
                        </template>
                    </CategoryIndex>
                子组件中：
                    <div class="category">
                        <slot :games="games">默认值，当使用者没有传值时显示</slot>
                    </div>
# Vuex
    1.概念：在Vuex中实现集中式状态（数据）管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间的通信方式，且适用于任意组件间通信
    2.何时使用：多个组件需要共享数据时
    3.搭建Vuex环境：
        (1)创建文件：src/store/index.js
            // 引入Vue
            import Vue from 'vue'
            // 引入Vuex
            import Vuex from 'vuex'
            // 使用插件vuex
            Vue.use(Vuex)

            // 准备actions——用于响应组件中的动作
            const actions = {}
            // 准备mutations——用于操作数据（state）
            const mutations = {}
            // 准备state——用于存储数据
            const state = {}

            // 创建store并暴露
            export default new Vuex.Store({
                // actions: actions,
                actions,
                // mutations: mutations,
                mutations,
                // state: state
                state,
            })
        (2)在main.js中创建vm时传入store配置项
    4.基本使用：
        (1)初始化数据，配置actions，配置mutations，操作文件store.js
            // 引入Vue
            import Vue from 'vue'
            // 引入Vuex
            import Vuex from 'vuex'
            // 使用插件vuex
            Vue.use(Vuex)

            // 准备actions——用于响应组件中的动作
            const actions = {
                incrementOdd(context, value) {
                    if(context.state.sum % 2) {
                        context.commit('INCREMENT', value)
                    }
                },
                incrementWait(context, value) {
                    setTimeout(() => {
                        context.commit('INCREMENT', value)
                    }, 500)
                },
            }

            // 准备mutations——用于操作数据（state）
            const mutations = {
                INCREMENT(state, value) {
                    state.sum += value
                },
                DECREMENT(state, value) {
                    state.sum -= value
                },
            }

            // 准备state——用于存储数据
            const state = {
                sum: 0 // 当前的和
            }

            // 创建store并暴露
            export default new Vuex.Store({
                // actions: actions,
                actions,
                // mutations: mutations,
                mutations,
                // state: state
                state,
            })
        (2)组件中读取vuex中的数据：$store.state.sum
        (3)组件中修改vuex中的数据：$store.dispatch('actions中的方法名', value) 或 $store.commit('mutations中的方法名', value)
    备注：若没有网络请求或其他业务逻辑，组件中也可以越过actions，即不写dispatch，直接写commit
    5.getters的使用：
        (1)概念：在state中的数据需要经过加工后再使用，可以使用getters加工
        (2)在store.js中追加getters配置
            ......
            const getters = {
                bigSum(state) {
                    return state.sum * 10
                }
            }

            export default new Vuex.store({
                ......
                getters,
                ......
            })
        (3)组件中读取数据$store.getters.bigSum
    6.四个map方法的使用
        (1)mapState方法：用于帮助我们映射state中的数据为计算属性
            computed: {
                ...mapState({sum: 'sum', school: 'school', subject: 'subject'})
                ...mapState(['sum', 'school', 'subject'])
            }
        (2)mapGetters方法，用于帮助我们映射getters中的数据为计算属性
            computed: {
                ...mapGetters({bigSum: 'bigSum'})
                ...mapGetters(['bigSum'])
            }
        (3)mapActions方法，用于帮助我们生成actions对话的方法，即包含$store.dispatch(xxx)的函数
            methods: {
                ...mapActions({incrementOdd: 'incrementOdd', incrementWait: 'incrementWait'})
                ...mapActions(['incrementOdd', 'incrementWait'])
            }
        (4)mapMutations方法，用于帮助我们生成mutations对话的方法，即包含$store.commit(xxx)的函数
            methods: {
                ...mapMutations({increment: 'INCREMENT', decrement: 'DECREMENT'}),
                ...mapMutations(['INCREMENT', 'DECREMENT']),
            }
    7.模块化+命名空间
        (1)目的：让代码更好维护，让多种数据分类更加明确
        (2)修改store.js
            const countOptions = {
                namespaced: true, // 开启命名空间
                actions: { ... },
                mutations: { ... },
                state: {
                    sum: 0,
                    ...
                },
                getters: {
                    bigSum(state) {
                        return state.sum * 10
                    }
                }
            }
        (3)开启命名空间后，组件中读取state的数据
            // 方式一，自己直接读取
            this.$store.state.countOptions.sum
            // 方式二，借助mapState读取
            ...mapState('countOptions', ['sum', 'school', 'subject'])
        (4)开启命名空间后，组件中读取getters的数据
            // 方式一，自己直接读取
            this.$store.getters['countOptions/sum']
            // 方式二，借助mapGetters读取
            ...mapGetters('countOptions', ['sum', 'school', 'subject'])
        (5)开启命名空间后，组件中调用dispatch
            // 方式一，自己直接调用
            this.$store.dispatch('personOptions/addPersonWang', personObj)
            // 方式二，借助mapActions读取
            ...mapActions('countOptions', ['incrementOdd', 'incrementWait'])
        (6)开启命名空间后，组件中调用commit
            // 方式一，自己直接调用
            this.$store.commit('personOptions/ADD_PERSON', personObj)
            // 方式二，借助mapMutations读取
            ...mapMutations('countOptions', ['INCREMENT', 'DECREMENT'])
# 路由：一个路由（route）就是一组映射关系（key-value），多个路由需要路由器（router）进行管理，在前端路由中，key是路径，value是组件
    1.基本使用：
        (1)安装vue-router，命令：npm i vue-router
        (2)应用插件：Vue.use(VueRouter)
        (3)编写router配置项：
            // 引入组件
            import VueRouter from 'vue-router'
            import AboutIndex from '../components/About'
            import HomeIndex from '../components/Home'

            // 创建并暴露一个路由器
            export default new VueRouter({
                routes: [
                    {
                        path: '/about',
                        component: AboutIndex
                    },
                    {
                        path: '/home',
                        component: HomeIndex
                    }
                ]
            })
        (4)实现切换：（active-class可以配置高亮样式）
            <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
            <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        (5)指定展示位置：
            <router-view></router-view>
    2.几个注意点：
        (1)路由组件通常放在pages文件夹中，一般组件通常放在components文件夹
        (2)通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候会重新再挂载
        (3)每个组件都有自己的$route属性，里面存储着自己的路由信息
        (4)整个应用只有一个router，可以通过$router属性获取
# 多级（嵌套）路由
    1.配置路由规则，使用children配置项：
        routes: [
            {
                path: '/about',
                component: AboutIndex
            },
            {
                path: '/home',
                component: HomeIndex,
                children: [
                    {
                        path: 'news', // 此处一定不要写 "/news"
                        component: NewsIndex
                    },
                    {
                        path: 'message', // 此处一定不要写 "/message"
                        component: MessageIndex
                    },
                ]
            },
        ]
    2.跳转：
        <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
# 路由的query参数
    1.传递参数：
        <!-- 跳转路由并携带query参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${message.id}&title=${message.title}`">{{message.title}}</router-link> -->
        <!-- 跳转路由并携带query参数，to的对象写法 -->
        <router-link :to="{
            path: '/home/message/detail',
            query: {
                        id: message.id,
                        title: message.title
                    }
        }">
            {{message.title}}
        </router-link>
    2.接收参数：
        $route.query.id
        $route.query.title
# 命名路由
    1.作用：可以简化路由的跳转
    2.如何使用：
        (1)给路由命名：
            {
                ......
                children: [
                    {
                        ......
                        children: [
                            {
                                name: 'detail',
                                path: 'detail', 
                                component: DetailIndex
                            }
                        ]
                    },
                ]
            }
        (2)简化跳转：
            <router-link :to="{
                // path: '/home/message/detail',
                name: 'detail', // 简化后可以通过名字来跳转
                query: {
                    id: message.id,
                    title: message.title
                }
            }">
                {{message.title}}
            </router-link>&nbsp;&nbsp;
# 路由的params参数
    1.配置路由，声明接收params参数
        {
            ......
            children: [
                {
                    path: 'message', // 此处一定不要写 "/message"
                    component: MessageIndex,
                    children: [
                        {
                            name: 'detail',
                            path: 'detail/:id/:title', // 用占位符声明接收参数
                            component: DetailIndex
                        }
                    ]
                },
            ]
        },
    2.传递参数：特别注意，路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置项
        <!-- 跳转路由并携带params参数，to的字符串写法 -->
        <router-link :to="`/home/message/detail/${message.id}/${message.title}`">{{message.title}}</router-link>&nbsp;&nbsp;
        <!-- 跳转路由并携带params参数，to的对象写法 -->
        <router-link :to="{
            // path: '/home/message/detail',
            name: 'detail',
            params: {
                        id: message.id,
                        title: message.title
                    }
        }">
            {{message.title}}
        </router-link>&nbsp;&nbsp;
    3.接收参数：
        $route.params.id
        $route.params.title
# 路由的props配置
    作用：让路由组件更方便的收到参数
        {
            name: 'detail',
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
        }
# <router-link>的replace属性
    1.作用：控制路由跳转时操作浏览器前进后退历史记录的模式
    2.浏览器的历史记录有两种写入模式：分别为replace和push，push是追加历史记录，replace是替换当前历史记录，路由跳转时默认为push
    3.如何开启replace模式：<router-link :replace="true" to="/about">About</router-link>，可直接简写为replace
        