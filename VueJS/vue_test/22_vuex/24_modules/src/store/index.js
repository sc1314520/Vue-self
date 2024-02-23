// 創建 Vuex 核心 store
import Vue from 'vue'
import Vuex from 'vuex';
import countOptions from './count'
import personOptions from './person'
// 引入 Vuex
Vue.use(Vuex);


// 創建 store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
});
