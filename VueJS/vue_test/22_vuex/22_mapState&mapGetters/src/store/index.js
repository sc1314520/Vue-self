// 創建 Vuex 核心 store
import Vue from 'vue'
import Vuex from 'vuex';

// 引入 Vuex
Vue.use(Vuex);

// 用於響應組件中的動作
const actions = {
    // jia(context,value){
    //     context.commit('JIA',value)
    // },
    // jian(context,value){
    //     context.commit('JIAN',value)
    // },
    jiaOdd(context,value){
        if(context.state.sum % 2)
            context.commit('JIA',value)
    },
    jiaWait(context,value){
        setTimeout(() => {
            context.commit('JIA',value)
        }, 500);
    }
}

// 操作數據(state)
const mutations = {
    JIA(state,value){
        state.sum += value;
    },
    JIAN(state,value){
        state.sum -= value;
    }
}

// 存儲數據
const state = {
    sum:0,
    school:'尚硅谷',
    subject:'前端'
}

// 用於將 state 中數據進行加工
const getters = {
    bigSum(state){
        return state.sum*10;
    }
}
// 創建 store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
});
