<template>
  <div>
    <Student></Student>
    <School></School>
    <hr>
    
  </div>
</template>
<!--
  :age 轉換成引號中的表達式（如引號中的 19 變成數字，也可以寫成 18+1）
  key 不可作為 props
-->
<script>
import Student from './components/Student.vue'
import School from './components/School.vue'
export default {
    name:'App',
    components:{Student,School},
    data(){
      return {
        msg:'歡迎 Vue',
      }
    },
    methods:{
      
    }
}
</script>

<style>

</style>