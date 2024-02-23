<template>
  <div class="">
    <h1>當前求和為：{{ sum }}</h1>
    <h1>當前求和放大10倍為：{{ bigSum }}</h1>
    <h3>我在{{ school }}學習{{ subject }} </h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">當前求和為奇數再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
export default {
    name:'Count',
    data(){
      return{
        n:1
      }
    },
    computed:{
      // sum(){
      //   return this.$store.state.sum
      // },
      // school(){
      //   return this.$store.state.school 
      // },
      // subject(){
      //   return this.$store.state.subject
      // },
      // bigSum(){
      //   return this.$store.getters.bigSum
      // },
      // ...mapState({
      //   a:'sum',
      //   b:'school',
      //   c:'subject'
      // }),

      // 不可簡寫
      // ...mapState({
      //   sum:'sum',
      //   school:'school',
      //   subject:'subject'
      // }),
      
      // 同名寫法
      ...mapState(['sum','school','subject']),
      ...mapGetters(['bigSum'])
    },
    methods:{
      increment(){
        this.$store.commit('JIA',this.n);
      },
      decrement(){
        this.$store.commit('JIAN',this.n);
      },
      incrementOdd(){
        this.$store.dispatch('jiaOdd',this.n);
      },
      incrementWait(){
        this.$store.dispatch('jiaWait',this.n);
      }
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