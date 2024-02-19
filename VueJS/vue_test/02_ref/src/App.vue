<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM()">點擊上方元素</button>
    <School ref="sch"></School>
  </div>
</template>

<script>
import School from './components/School.vue'
export default {
    name:'App',
    components:{School},
    data(){
      return {
        msg:'歡迎 Vue',
      }
    },
    methods:{
      showDOM(){
        console.log(this.$refs.title) // DOM
        console.log(this.$refs.sch); // 對象
      }
    }
}
</script>

<style>

</style>
<!-- 
  在一般元素上 ref 可代替 id 擷取 DOM 
  但在組件上設立 ref 則會取得組件實例對象
-->