<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- params 寫法 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
        <router-link :to="{
          name:'d', // 不可寫 path
          params:{
            id:m.id,
            title:m.title
          }
        }">{{m.title}}</router-link>&nbsp;&nbsp;
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
    }
};
</script>

<style>
</style>