<template>
    <div>
        <countIndex></countIndex>
        <hr/>
        <PersonIndex></PersonIndex>
    </div>
</template>

<script>
    // 引入组件
    import CountIndex from './components/Count.vue'
    import PersonIndex from './components/Person.vue'
    export default {
        name: "App",
        components: {CountIndex, PersonIndex}
    }
</script>
    
<style>
    
</style>>