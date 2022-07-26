<template>
    <div>
        <SchoolIndex/><hr>
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

            }
        },
        name: 'App',
        components: {
            StudentIndex,
            SchoolIndex
        },
        methods: {

        }
    }
</script>

<style>

</style>>