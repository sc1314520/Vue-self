import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip=false;

// 全局事件總線
// const Demo = Vue.extend({});
// const d = new Demo();
// Vue.prototype.x = d;

new Vue({
    el:'#app',
    render: h=>h(App),
    beforeCreate(){
        // 全局事件總線
        Vue.prototype.$bus = this;
    }
})
