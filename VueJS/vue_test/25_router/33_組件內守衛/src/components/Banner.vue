<template>
    <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
            <h2>Vue Router Demo</h2>
            <button @click="back">後退</button>
            <button @click="forward">前進</button>
            <button @click="test">測試 Go</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'Banner',
    methods:{
        back(){
            this.$router.back();
        },
        forward(){
            this.$router.forward();
        },
        test(){
            this.$router.go(-2);
        }
    }
}
</script>

<style>

</style>