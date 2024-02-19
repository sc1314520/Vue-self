<template>
  <div>
    <h2 @click="showName()">學生姓名：{{ name }}</h2>
    <h2>學生性別：{{ sex }}</h2>
  </div>
</template>

<script>
// import {mixin,mixin2} from './mixin'
export default {
    name:'Student',
    data(){
        return {
            name:'King',
            sex:'male',
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