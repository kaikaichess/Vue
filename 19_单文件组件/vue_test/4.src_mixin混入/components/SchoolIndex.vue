<template>
    <div>
        <h2 @click="showName">学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    // 引入一个混入
    import {mixin1, mixin2} from '../mixin'
    export default {
        name: 'SchoolIndex',
        data() {
            return {
                name: 'atguigu',
                address: '北京'
            }
        },
        mixins: [mixin1, mixin2]
        
    }
</script>

<style>

</style>