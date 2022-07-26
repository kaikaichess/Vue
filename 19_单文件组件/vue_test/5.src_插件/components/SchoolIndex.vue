<template>
    <div>
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'SchoolIndex',
        data() {
            return {
                name: 'atguigu',
                address: '北京'
            }
        },   
    }
</script>

<style>

</style>