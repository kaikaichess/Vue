<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
            <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
    // import axios from 'axios'
    export default {
        name: 'SearchIndex',
        data() {
            return {
                keyWord: ''
            }
        },
        methods: {
            searchUsers() {
                // 请求前更新List的数据
                this.$bus.$emit('updateList', {isFirst: false, isLoading: true, errMsg: '', users: []})
                this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                    response => {
                        console.log('请求成功');
                        this.$bus.$emit('updateList', {isLoading: false, errMsg: '', users: response.data.items})
                    },
                    error => {
                        console.log('请求失败', error.message);
                        this.$bus.$emit('updateList', {isLoading: false, errMsg: error.message, users: []})
                    }
                )
            }
        }
    }
</script>

<style>

</style>