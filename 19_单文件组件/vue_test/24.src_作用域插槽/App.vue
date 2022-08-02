<template>
    <div class="container">
        <CategoryIndex title="游戏">
            <template slot-scope={games}>
                <ul>
                    <li v-for="(g, index) in games" :key="index">{{g}}</li>
                </ul>
            </template>
        </CategoryIndex>

        <CategoryIndex title="游戏">
            <template slot-scope={games}>
                <ol>
                    <li v-for="(g, index) in games" :key="index">{{g}}</li>
                </ol>
            </template>
        </CategoryIndex>

        <CategoryIndex title="游戏">
            <template slot-scope={games}>
                <h4 v-for="(g, index) in games" :key="index">{{g}}</h4>
            </template>
        </CategoryIndex>
    </div>
</template>

<script>
    // 引入组件
    import CategoryIndex from './components/Category.vue';
    export default {
    name: "App",
    components: { CategoryIndex },
    
    }
</script>
    
<style>
    .container, .foot {
        display: flex;
        justify-content: space-around;
    }
    h3 {
        text-align: center;
        background-color: orange;
    }
    h4 {
        text-align: center;
    }
    img {
        width: 100%;
    }
    video {
        width: 100%;
    }
</style>>