<template>
    <div>
        <TestIndex1></TestIndex1>
        <TestIndex2></TestIndex2>
        <TestIndex3></TestIndex3>
    </div>
</template>

<script>
    // 引入组件
    import TestIndex1 from './components/Test1.vue';
    import TestIndex2 from './components/Test2.vue';
    import TestIndex3 from './components/Test3.vue';
    export default {
    name: "App",
    methods: {},
    components: { TestIndex1, TestIndex2, TestIndex3 }
}
</script>

<style>
    
</style>>