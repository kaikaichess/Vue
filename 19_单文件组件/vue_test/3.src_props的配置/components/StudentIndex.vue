<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>
</template>

<script>
export default {
    name: 'StudentIndex',
    data() {
        return {
            msg: '我是一个学生',
        }
    },
    // 简单接收
    // props: ['name', 'sex', 'age'] 

    // 限定类型接收
    // props: {
    //     name: String,
    //     age: Number,
    //     sex: String
    // }

    // 接收的同时对数据进行类型限制和默认值的指定和必要性的限制
    props: {
        name: {
            typr: String, 
            required: true // name是必须传值的
        },
        age: {
            typr: Number, 
            default: 99 // 不传值默认为99，require和default一般不同时出现
        },
        sex: {
            typr: String, 
            required: true // sex是必须传值的
        },
    }
}
</script>

<style>

</style>