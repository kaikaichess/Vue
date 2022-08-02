<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <h3>当前求和放大10倍为：{{bigSum}}</h3>
        <h3>我在{{school}}，学习{{subject}}</h3>
        <h3 style="color: red">Person组件的总人数是： {{personList.length}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="INCREMENT(n)">+</button>
        <button @click="DECREMENT(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
    export default {
        name: 'CountIndex',
        data() {
            return {
                n: 1
            }
        },
        computed: {
            ...mapState('countOptions', ['sum', 'school', 'subject']),
            ...mapState('personOptions', ['personList']),
            ...mapGetters('countOptions',['bigSum'])
        },
        methods: {
            
            ...mapMutations('countOptions', ['INCREMENT', 'DECREMENT']),

            ...mapActions('countOptions', ['incrementOdd', 'incrementWait'])
        },
        
    }
</script>

<style>
    button {
        margin-left: 5px;
    }
</style>