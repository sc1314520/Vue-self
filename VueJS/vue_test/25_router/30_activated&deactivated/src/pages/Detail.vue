<template>
    <div>
        <ul>
            <li>消息編號：{{id}}</li>
            <li>消息標題：{{title}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Detail',
    props:['id','title'],
    computed:{
        // id(){
        //     return this.$route.params.id
        // },
        // title(){
        //     return this.$route.params.title
        // }
    }
}
</script>

<style>

</style>