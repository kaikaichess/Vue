<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDOm" ref="btn">点我输出上方的DOM元素</button>
        <SchoolIndex ref="sch"/>
    </div>
</template>

<script>
    // 引入School组件
    import SchoolIndex from './components/SchoolIndex.vue'
    export default {
        data() {
            return {
                msg: '欢迎学习Vue'
            }
        },
        name: 'App',
        components: {
            SchoolIndex
        },
        methods: {
            showDOm() {
                console.log(this.$refs.title); // 获取真实DOM元素（h1）
                console.log(this.$refs.btn); // 获取真实DOM元素（button）
                console.log(this.$refs.sch); // 获取School组件的实例对象（VC）

            }
        }
    }
</script>

<style>

</style>>