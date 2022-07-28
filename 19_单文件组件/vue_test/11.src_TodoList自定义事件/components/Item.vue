<template>
    <li>
        <label>
            <!-- v-model是双向绑定，但是props是单向数据流，一旦props数据不是对象而是简单数据类型这么写就会报错，而且尽量避免改变props数据 -->
            <!-- <input type="checkbox" v-model="todoObjPack.done"/> -->  
            <input type="checkbox" :checked="todoObj.done" @change="handleCheck(todoObj.id)"/>
            <span>{{todoObj.title}}</span>
        </label>
        <button class="btn btn-danger" @click="deleteItem(todoObj.id)">删除</button>
    </li>
</template>

<script>
    export default {
        name: 'ItemIndex',
        // 声明接收数据
        props: ['todoObj', 'checkTodo', 'deleteTodo'],
        methods: {
            handleCheck(id) {
                this.checkTodo(id)
            },
            deleteItem(id) {
                if(confirm('确定删除吗？')) {
                    this.deleteTodo(id)
                }
            }
        }
    }
</script>

<style scoped>
    /*item*/
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li:hover {
        background-color: #ddd;
    }

    li:hover button {
        display: block;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }
</style>