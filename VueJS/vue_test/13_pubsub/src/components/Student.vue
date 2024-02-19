<template>
  <div class="student">
    <h2>學生姓名：{{ name }}</h2>
    <h2>學生性別：{{ sex }}</h2>
    <h2>當前求和為：{{ number }}</h2>
    <button @click="sendStudentName()">把學生名給School</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'Student',
    data(){
        return {
            name:'King',
            sex:'male',
            number:0
        }
    },
    methods:{
      sendStudentName(){
        pubsub.publish('hello',666);
      }
    }
}
</script>

<style scoped>
  .student{
    background-color: orange;
  }
</style>