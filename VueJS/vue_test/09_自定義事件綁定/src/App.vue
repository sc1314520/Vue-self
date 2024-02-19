<template>
  <div class="app">
    <h1>{{ msg }}. 學生姓名：{{ studentName }}</h1>
     <School :getSchoolName="getSchoolName"></School>
    <!-- <Student @send="getStudentName" @demo="m1"></Student>  -->
    <!-- <Student @send.once="getStudentName"></Student> -->
    <!-- <Student ref="student" @click="show()"></Student>  @click 會變成自定義事件 使用 $emit 觸發 -->
    <Student ref="student" @click.native="show()"></Student>
    <Student ref="student"></Student>
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
        studentName:''
      }
    },
    methods:{
      getSchoolName(name){
        console.log('App 收到了學校名',name);
      },
      getStudentName(name,...params){
        console.log('App 收到了學生名',name,params);
        this.studentName=name;
      },
      m1(){
        console.log('demo')
      },
      show(){
        alert('123')
      }
    },
    mounted(){ // 靈活性較好
      this.$refs.student.$on('send',this.getStudentName);
      //this.$refs.student.$once('send',this.getStudentName) // 實現一次
      // this.$refs.student.$on('send',function(){
      //   console.log(this); // this 是 Student 實例
      // })
      // this.$refs.student.$on('send',()=>{
      //   console.log(this) // this 是 App 實例
      // })
    }
}
</script>

<style>
  .app{
    background-color: gray;
  }
</style>