<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <SchoolIndex/>
        <StudentIndex/>

    </div>
</template>

<script>
    // 引入Student组件
    import StudentIndex from './components/StudentIndex.vue';
    import SchoolIndex from './components/SchoolIndex.vue';
    export default {
        data() {
            return {
                msg: '你好啊',
            }
        },
        name: 'App',
        components: {
            StudentIndex,
            SchoolIndex
        }
    }
</script>

<style>
    .app {
        background-color: gray;
        padding: 5px;
    }
</style>