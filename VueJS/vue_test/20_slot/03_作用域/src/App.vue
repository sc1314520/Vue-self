<template>
  <div class="container">
    <Category title="游戏" >
      <template slot-scope="{games}">
        <ul>
          <li v-for="(g,index) in games" :key="index">{{g}}</li>
        </ul>
      </template>
		</Category>
    <Category title="游戏" >
      <template slot-scope="obj">
        <ol>
          <li v-for="(g,index) in obj.games" :key="index">{{g}}</li>
        </ol>
        <h4>{{ obj.msg }}</h4>
      </template>
		</Category>
    <Category title="游戏" >
      <template slot-scope="obj">
        <h4 v-for="(g,index) in obj.games" :key="index">{{g}}</h4>
      </template>
		</Category>
  </div>
</template>
<script>
import Category from './components/Category.vue'
export default {
    name:'App',
    components:{
      Category
    },
}
</script>
<style>
  .container,.foot{
    display: flex;
    justify-content: space-around;
  }
  h4{
    text-align: center;
  }
</style>
