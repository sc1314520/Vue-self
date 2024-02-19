<template>
 <div>
  <button @click="getStudents()">獲取學生訊息</button>
  <button @click="getCars()">獲取汽車訊息</button>
 </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'App',
    methods:{
      getStudents(){
        axios.get('http://localhost:8083/api/students')
        .then(
          response=>{
            console.log('請求成功',response.data);
          },
          error=>{
            console.log('請求失敗',error.message);
          }
        )
      },
      getCars(){
        axios.get('http://localhost:8083/cars/cars')
        .then(
          response=>{
            console.log('請求成功',response.data);
          },
          error=>{
            console.log('請求失敗',error.message);
          }
        )
      }
    }
}
</script>

