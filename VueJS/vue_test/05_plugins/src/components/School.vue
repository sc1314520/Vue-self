<template>
  <div>
    <h2>學校姓名：{{ name | mySlice}}</h2>
    <h2>學校地址：{{ address }}</h2>
    <button @click="test()">點我測試一下</button>
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
    methods:{
      test(){
        this.hello();
      }
    }
}
</script>

<style>
</style>