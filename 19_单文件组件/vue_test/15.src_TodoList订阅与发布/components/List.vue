<template>
    <ul class="todo-main">
        <ItemIndex v-for="todoObj in todos" 
            :key="todoObj.id" 
            :todoObj="todoObj" 
        />
    </ul>
</template>

<script>
    import ItemIndex from './Item.vue'
    export default {
        name: "ListIndex",
        components: { ItemIndex },
        props: ['todos']
}
</script>

<style scoped>
    /*main*/
    .todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>