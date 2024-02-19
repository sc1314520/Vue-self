<template>
  <div class="demo">
    <h2>學生姓名：{{ name }}</h2>
    <h2>學生性別：{{ sex }}</h2>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return {
            name:'King',
            sex:'male',
        }
    },
}
</script>

<style scoped> /* App.vue 不要用 scoped */
  .demo{
    background-color: orange;
  }
</style>