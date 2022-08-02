// 该文件用于创建Vuex中最核心的store

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 使用插件vuex
Vue.use(Vuex)

import axios from 'axios'
import { nanoid } from 'nanoid'

// 求和功能相关的配置
const countOptions = {
    namespaced: true,
    actions: {
        incrementOdd(context, value) {
            if(context.state.sum % 2) {
                context.commit('INCREMENT', value)
            }
        },
        incrementWait(context, value) {
            setTimeout(() => {
                context.commit('INCREMENT', value)
            }, 500)
        }
    },
    mutations: {
        INCREMENT(state, value) {
            state.sum += value
        },
        DECREMENT(state, value) {
            state.sum -= value
        },
    },
    state: {
        sum: 0, // 当前的和
        school: 'atguigu',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}

// 人员功能相关的配置
const personOptions = {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if(value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('添加的人必须姓王')
            }
        },
        addPersonServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON', {id: nanoid(), name: response.data})
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            {id: '001', name: '张三'}
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}

// 创建store并暴露
export default new Vuex.Store({
    modules: {
        countOptions,
        personOptions
    }
})


