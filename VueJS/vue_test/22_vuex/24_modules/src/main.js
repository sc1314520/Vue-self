import Vue from 'vue'
import App from './App.vue'
import store from './store/index'

Vue.config.productionTip=false;

new Vue({
    el:'#app',
    render: h=>h(App),
    beforeCreate(){
        Vue.prototype.$bus = this;
    },
    // Vuex
    store
})