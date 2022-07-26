<template>
    <div>
        <img src="./assets/logo.png" alt="logo">
        <SchoolIndex/>
        <StudentIndex/>
    </div>
</template>

<script>
    // 引入组件
    import SchoolIndex from './components/SchoolIndex.vue'
    import StudentIndex from './components/StudentIndex.vue'
    export default {
        name: 'App',
        components: {
            SchoolIndex,
            StudentIndex
        }
    }
</script>

