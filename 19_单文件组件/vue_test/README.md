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