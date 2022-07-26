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