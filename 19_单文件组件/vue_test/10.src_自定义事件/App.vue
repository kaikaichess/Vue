<template>
    <div class="app">
        <h1>{{msg}}，学生姓名是：{{studentName}}</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现 子组件给父组件传递数据 -->
        <SchoolIndex :getSchoolName="getSchoolName"/><hr>
        <!-- 通过父组件给子组件绑定一个自定义事件实现 子组件给父组件传递数据(第一种写法，使用@) -->
        <StudentIndex @atguigu="getStudentName" @demo="m1" @click.native="show"/>
        <!-- 通过父组件给子组件绑定一个自定义事件实现 子组件给父组件传递数据(第二种写法，使用ref) -->
        <!-- <StudentIndex ref="student"/> -->
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
                studentName: ''
            }
        },
        name: 'App',
        components: {
            StudentIndex,
            SchoolIndex
        },
        methods: {
            getSchoolName(name) {
                console.log('App收到了学校名', name);
            },
            getStudentName(name) {
                console.log('App收到了学生名', name);
                this.studentName = name
            },
            m1() {
                console.log('demo事件被触发了');
            },
            show() {
                alert('111')
            }
        },
        mounted() {
            // this.$refs.student.$on('atguigu', this.getStudentName)
        }
    }
</script>

<style>
    .app {
        background-color: gray;
        padding: 5px;
    }
</style>