<template>
  <div class="school">
    <h2>學校姓名：{{ name }}</h2>
    <h2>學校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
    name:'School',
    data(){
        return {
            name:'AceClub',
            address:'Taiwan',
        }
    },
    mounted(){
      this.$bus.$on('hello',(data)=>{
        console.log('hello',data);
      })
    },
    beforeDestroy(){
      this.$bus.$off('hello');
    }
}
</script>
<style scoped>
  .school{
    background-color: skyblue;
  }
</style>