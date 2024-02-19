<template>
  <div class="student">
    <h2>學生姓名：{{ name }}</h2>
    <h2>學生性別：{{ sex }}</h2>
    <h2>當前求和為：{{ number }}</h2>
    <button @click="sendStudentName()">把學生名給School</button>
  </div>
</template>

<script>
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
        this.$bus.$emit('hello',this.name);
      }
    }
}
</script>

<style scoped>
  .student{
    background-color: orange;
  }
</style>