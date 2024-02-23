<template>
  <div class="">
    <h1>當前求和為：{{ sum }}</h1>
    <h3>當前求和放大10倍為：{{ bigSum }}</h3>
    <h3>我在{{ school }}學習{{ subject }} </h3>
    <h3>Person 組件的總人數是：{{ personList.length }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">當前求和為奇數再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState,mapGetters,mapActions,mapMutations } from 'vuex'
export default {
    name:'Count',
    data(){
      return{
        n:1
      }
    },
    computed:{
      ...mapState('countAbout',['sum','school','subject']),
      ...mapState('personAbout',['personList']),
      ...mapGetters('countAbout',['bigSum'])
    },
    methods:{
      ...mapMutations('countAbout',{
        increment:'JIA',
        decrement:'JIAN'
      }),
      ...mapActions('countAbout',{
        incrementOdd:'jiaOdd',
        incrementWait:'jiaWait'
      })

    },
    mounted(){

    }
}
</script>

<style scoped>
  button{
    margin-left: 5px;
  }
</style>