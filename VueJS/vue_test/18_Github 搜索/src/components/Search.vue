<template>
  <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text"  v-model='keyword' placeholder="enter the name you search"/>&nbsp;
        <button @click="searchUsers()">Search</button>
      </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name:'Search',
    data(){
        return{
            keyword:''
        }
    },
    methods:{
        searchUsers(){
            this.$bus.$emit('updateListData',{
                isFirst:false,
                isLoading:true,
                errMsg:'',
                users:[]
            });
            axios.get('https://api.github.com/search/users?q='+this.keyword)
            .then(resp=>{
                this.$bus.$emit('updateListData',{
                    isLoading:false,
                    errMsg:'',
                    users:resp.data.items
                });
            },err=>{
                this.$bus.$emit('updateListData',{
                    isLoading:false,
                    errMsg:err.message,
                    users:[]
                });
            })
        }
    }
}
</script>