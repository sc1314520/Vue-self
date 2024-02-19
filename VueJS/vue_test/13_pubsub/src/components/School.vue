<template>
  <div class="school">
    <h2>學校姓名：{{ name }}</h2>
    <h2>學校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'School',
    data(){
        return {
            name:'AceClub',
            address:'Taiwan',
        }
    },
    mounted(){
     this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
        console.log('發布hello消息',msgName,data,this);
     });
    },
    beforeDestroy(){
      pubsub.unsubscribe(this.pubId);
    }
}
</script>
<style scoped>
  .school{
    background-color: skyblue;
  }
</style>