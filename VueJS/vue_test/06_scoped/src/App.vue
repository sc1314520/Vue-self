<template>
  <div>
    <School></School>
    <Student></Student>
    <hr>
  </div>
</template>
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
}
</script>

<style>
  
</style>