import App from './App.vue' // 瀏覽器不可直接使用模塊化，需使用腳手架。

new Vue({
	el:'#root',
	template:`<App></App>`,
	components:{App},
})