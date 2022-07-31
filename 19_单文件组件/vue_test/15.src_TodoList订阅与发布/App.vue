<template>
    <div>

    <div id="root">
    <div class="todo-container">
        <div class="todo-wrap">

            <ListHeader @addTodo="addTodo"/>

            <ListIndex :todos="todos" />

            <ListFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearItem="clearItem"/>

        </div>
    </div>
    </div>


    </div>
</template>

<script>
    // 引入组件
    import ListHeader from './components/ListHeader.vue'
    import ListIndex from './components/List.vue'
    import ListFooter from './components/ListFooter.vue'
    import pubsub from 'pubsub-js'
    export default {
        data() {
            return {
                todos: JSON.parse(localStorage.getItem('todos')) || []
            };
        },
        name: 'App',
        components: { ListHeader, ListIndex, ListFooter },
        methods: {
            // 添加一个todo
            addTodo(todoObj) {
                this.todos.unshift(todoObj)
            },
            // 勾选or取消勾选一个todo
            checkTodo(id) {
                this.todos.forEach((todoObj) => {
                    if(todoObj.id === id) todoObj.done = !todoObj.done
                })
            },
            // 删除一个todo
            deleteTodo(_, id) {
                this.todos = this.todos.filter((todoObj) => {
                    return todoObj.id !== id
                })
            },
            // 全选or取消全选
            checkAllTodo(done) {
                this.todos.forEach((item) => {
                    item.done = done
                })
            },
            // 清除已完成的任务
            clearItem() {
                this.todos = this.todos.filter((item) => {
                    return !item.done 
                })
            }
        },
        watch: {
            todos: {
                deep: true,
                handler(value) {
                    localStorage.setItem('todos', JSON.stringify(value))
                }
            }
        },
        mounted() {
            // this.$bus.$on('checkTodo', this.checkTodo)
            // this.$bus.$on('deleteTodo', this.deleteTodo)
            this.pid = pubsub.subscribe('delete', this.deleteTodo)
        },
        beforeDestroy() {
            // this.$bus.$off('checkTodo')
            // this.$bus.$off('deleteTodo')
            pubsub.unscribe(this.pid)
        }
    }
</script>

<style>
    /*base*/
    body {
        background: #fff;
    }

    .btn {
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }

    .btn-danger {
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }

    .btn-danger:hover {
        color: #fff;
        background-color: #bd362f;
    }

    .btn:focus {
        outline: none;
    }

    .todo-container {
        width: 600px;
        margin: 0 auto;
    }

    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }

</style>>