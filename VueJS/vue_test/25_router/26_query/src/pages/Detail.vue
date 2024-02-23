<template>
    <div>
        <ul>
            <li>消息編號：{{$route.query.id}}</li>
            <li>消息標題：{{$route.query.title}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Detail',

}
</script>

<style>

</style>