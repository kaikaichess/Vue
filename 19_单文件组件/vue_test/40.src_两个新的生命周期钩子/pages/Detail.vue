<template>
    <ul>
        <li>消息编号：{{id}}</li>
        <li>消息标题：{{title}}</li>
    </ul>
</template>

<script>
    export default {
        name: 'DetailIndex',
        props: ['id', 'title'] // 接收props为true传递过来的params参数
    }
</script>

<style>

</style>