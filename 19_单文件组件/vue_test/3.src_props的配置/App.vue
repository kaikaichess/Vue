<template>
    <div>
        <StudentIndex name="李四" sex="男" :age="19"/><hr>
        <StudentIndex name="张三" sex="男" :age="18"/>
    </div>
</template>

<script>
    // 引入Student组件
    import StudentIndex from './components/StudentIndex.vue';
    export default {
        data() {
            return {
                msg: '欢迎学习Vue'
            }
        },
        name: 'App',
        components: {
            StudentIndex
        },
        methods: {

        }
    }
</script>

<style>

</style>>