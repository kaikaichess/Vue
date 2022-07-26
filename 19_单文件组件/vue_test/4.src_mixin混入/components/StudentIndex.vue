<template>
    <div>
        <h2 @click="showName">学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
    </div>
</template>

<script>
import {mixin1, mixin2} from '../mixin'
export default {
    name: 'StudentIndex',
    data() {
        return {
            name: '张三',
            sex: '男'
        }
    },
    mixins: [mixin1, mixin2]
}
</script>

<style>

</style>