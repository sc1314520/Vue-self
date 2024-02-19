<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>學生姓名：{{ name }}</h2>
    <h2>學生性別：{{ sex }}</h2>
    <h2>學生年齡：{{ myAge+1 }}</h2>
    <button @click="updateAge()">修改年齡</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return {
            // name:'K',
            // sex:'male',
            // age:18,
            msg:'Hello 你好',
            myAge: this.age // 欲修改props 數值的替代方法
        }
    },
    methods:{
        updateAge(){
            // this.age = 22; // props 不建議直接修改 props 資料
            this.myAge++;
        }
    },
    // props:['name','sex','age']  簡單接收
    // props:{
    //     name:String,
    //     age:Number,
    //     sex:String
    // } // 類型限制
    props:{
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            default:99
        },
        sex:{
            type:String,
            required:true
        }
    }
}
</script>

<style>
</style>
<!--
    props: 標籤存入資料
-->