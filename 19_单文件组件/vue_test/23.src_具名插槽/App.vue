<template>
    <div class="container">
        <CategoryIndex title="美食">
            <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="" slot="center">
            <a href="http://www.atguigu.com" slot="footer">更多美食</a>
        </CategoryIndex>
        <CategoryIndex title="游戏">
            <ul slot="center">
                <li v-for="(g, index) in games" :key="index">{{g}}</li>
            </ul>
            <div class="foot" slot="footer">
                <a href="http://www.atguigu.com">单机游戏</a>
                <a href="http://www.atguigu.com">网络游戏</a>
            </div>
        </CategoryIndex>
        <CategoryIndex title="电影">
            <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls slot="center"></video>
            <template slot="footer">
                <div class="foot">
                    <a href="http://www.atguigu.com">经典</a>
                    <a href="http://www.atguigu.com">热门</a>
                    <a href="http://www.atguigu.com">推荐</a>
                </div>
                <h4>欢迎前来观影</h4>
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
    data() {
        return {
            foods: ['火锅', '烧烤', '小龙虾', '牛排'],
            games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
            films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》']
        }
    }
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