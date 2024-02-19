<template>
  <div class="student">
    <h2>學生姓名：{{ name }}</h2>
    <h2>學生性別：{{ sex }}</h2>
    <h2>當前求和為：{{ number }}</h2>
    <button @click="add()">點我 number++</button>
    <button @click="sendStudentName()">把學生名給App</button>
    <button @click="unbind()">解綁事件</button>
    <button @click="death()">銷毀當前 Student 實例</button>
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
        this.$emit('send',this.name,666,888,999);
        // this.$emit('demo');
      },
      unbind(){
        this.$off('send'); // 解綁一個自定義事件
        // this.$off(['send','demo']); // 解綁多個自定義事件
        // this.$off(); // 全數解綁
      },
      death(){
        this.$destroy(); // 銷毀當前組件實例
      },
      add(){
        this.number++;
      }
    }
}
</script>

<style scoped>
  .student{
    background-color: orange;
  }
</style>