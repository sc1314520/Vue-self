import Vue from 'vue';
import App from './App.vue';
// 按需引入
import { Button, Row, DatePicker } from 'element-ui';

Vue.config.productionTip=false;

Vue.component(Button.name,Button);
Vue.component(Row.name,Row);
Vue.component(DatePicker.name,DatePicker);
new Vue({
  el: '#app',
  render: h => h(App)
});