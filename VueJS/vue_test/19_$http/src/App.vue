<template>
  <div class="container">
    <Search></Search>
    <List></List>
  </div>
</template>
<script>
import axios from 'axios'
import List from './components/List.vue'
import Search from './components/Search.vue'
export default {
  components: { List },
    name:'App',
    components:{
      List,Search
    }
}
</script>
<style>
</style>
