<template>
    <div class="container">
        <SearchIndex></SearchIndex>
        <ListIndex></ListIndex>
    </div>
</template>

<script>

    // 引入组件
    import SearchIndex from './components/Search.vue';
    import ListIndex from './components/List.vue';
    export default {
    name: "App",
    components: { SearchIndex, ListIndex }
}
</script>

<style>
    
</style>>