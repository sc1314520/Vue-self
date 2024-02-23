import Vue from 'vue';
import ElementUI from 'element-ui';
// 引入全部的組件
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.config.productionTip=false;
Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});