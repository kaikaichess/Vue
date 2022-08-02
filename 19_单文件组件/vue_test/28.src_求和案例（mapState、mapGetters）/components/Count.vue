<template>
    <div>
    <h1>当前求和为：{{sum}}</h1>
    <h3>当前求和放大10倍为：{{bigSum}}</h3>
    <h3>我在{{school}}，学习{{subject}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'
    export default {
        name: 'CountIndex',
        data() {
            return {
                n: 1
            }
        },
        computed: {
            // sum() {
            //     return this.$store.state.sum
            // },
            // school() {
            //     return this.$store.state.school
            // },
            // subject() {
            //     return this.$store.state.subject
            // },
            // 借助mapState生成计算属性从state中读取数据，并且这种写法不能采用对象的简写形式，否则会解析不到（对象写法）
            // ...mapState({sum: 'sum', school: 'school', subject: 'subject'})
            // 借助mapState生成计算属性从state中读取数据，（数组写法）
            ...mapState(['sum', 'school', 'subject']),

            // bigSum() {
            //     return this.$store.getters.bigSum
            // },
            // 和mapState同理
            ...mapGetters(['bigSum'])
        },
        methods: {
            increment() {
                this.$store.commit('INCREMENT', this.n)
            },
            decrement() {
                this.$store.commit('DECREMENT', this.n)
            },
            incrementOdd() {
                this.$store.dispatch('incrementOdd', this.n)
            },
            incrementWait() {
                this.$store.dispatch('incrementWait', this.n)
            }
        },
        
    }
</script>

<style>
    button {
        margin-left: 5px;
    }
</style>