<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- params 寫法 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
        <router-link :to="{
          name:'d', 
          query:{
            id:m.id,
            title:m.title
          }
        }">{{m.title}}</router-link>&nbsp;&nbsp;
        <button @click="pushShow(m)">push</button>
        <button @click="replaceShow(m)">replace</button>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
    name:'Message',
    data(){
      return{
        messageList:[
          {'id':'001',title:'消息001'},
          {'id':'002',title:'消息002'},
          {'id':'003',title:'消息003'},
        ]
      }
    },
    methods:{
      pushShow(m){
        this.$router.push({
          name:'d', 
          query:{
            id:m.id,
            title:m.title
          }
        })
      },
      replaceShow(m){
        this.$router.replace({
          name:'d', 
          query:{
            id:m.id,
            title:m.title
          }
        })
      },
    },
    beforeDestroy(){
      console.log('Message 即將被銷毀了')
    }
};
</script>

<style>
</style>