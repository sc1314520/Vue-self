<template>
  <div>
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

<style>
</style>
<!--
    props: 標籤存入資料
-->