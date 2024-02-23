<template>
    <div>
        <h1>人員列表</h1>
        <h3>Count 組件求和為：{{ sum }}</h3>
        <h3>列表中第一個人是 {{ firstPersonName }}</h3>
        <input type="text" name="" id="" placeholder="請輸入名字" v-model="name">
        <button @click="add">添加</button>
        <button @click="addWang">添加一個姓王的人</button>
        <button @click="addPersonServer">隨便添加一個人</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { nanoid } from 'nanoid';
export default {
    name:'Person',
    computed:{
        sum(){
            return this.$store.state.countAbout.sum;
        },
        personList(){
            return this.$store.state.personAbout.personList
        },
        firstPersonName(){
            return this.$store.getters['personAbout/firstPersonName']
        },
    },
    data(){
        return{
            name:''
        }
    },
    methods:{
        add(){
            const personObj = {id:nanoid(),name:this.name};
            this.$store.commit('personAbout/ADD_PERSON',personObj)
            this.name='';   
        },
        addWang(){
            const personObj = {id:nanoid(),name:this.name};
            this.$store.dispatch('personAbout/addPersonWang',personObj);
            this.name='';
        },
        addPersonServer(){
            this.$store.dispatch('personAbout/addPersonServer');
        }
    }
}
</script>

<style>

</style>