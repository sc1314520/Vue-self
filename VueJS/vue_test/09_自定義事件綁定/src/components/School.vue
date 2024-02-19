<template>
  <div class="school">
    <h2>學校姓名：{{ name }}</h2>
    <h2>學校地址：{{ address }}</h2>
    <button @click="sendSchoolName()">發送學校名稱給App</button>
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
    props:['getSchoolName'],
    methods:{
      sendSchoolName(){
        this.getSchoolName(this.name);
      }
    }
}
</script>

<style scoped>
  .school{
    background-color: skyblue;
  }
</style>