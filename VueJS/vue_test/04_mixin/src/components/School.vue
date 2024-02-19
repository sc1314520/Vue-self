<template>
  <div>
    <h2 @click="showName()">學校姓名：{{ name }}</h2>
    <h2>學校地址：{{ address }}</h2>
  </div>
</template>

<script>
// import {mixin,mixin2} from './mixin'
export default {
    name:'School',
    data(){
        return {
            name:'Ace',
            address:'Taiwan',
        }
    },
    // mixins:[mixin,mixin2]
}
</script>

<style>
</style>
<!--
    props: 標籤存入資料
-->