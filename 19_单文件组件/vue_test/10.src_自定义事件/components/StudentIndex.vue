<template>
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="sendStudentName">把学生名给APP</button>
        <button @click="unbind">解绑atguigu事件</button>
    </div>
</template>

<script>
export default {
    name: 'StudentIndex',
    data() {
        return {
            name: '张三',
            sex: '男'
        }
    },
    methods: {
        sendStudentName() {
            // 触发Student身上的atguigu事件
            this.$emit('atguigu', this.name)
            // this.$emit('demo')
        },
        unbind() {
            // 解绑一个自定义事件
            this.$off('atguigu')
            // 解绑多个是事件
            // this.$off(['atguigu','demo'])
            // 解绑所有的自定义事件
            // this.$off()

        }
    }
}
</script>

<style scoped>
    .student {
        background-color: orange;
        padding: 5px;
        margin-top: 30px;
    }
</style>