<template>
  <h2>我是 ABOUT 組件</h2>
</template>

<script>
export default {
  name: "About",
  mounted() {},
  beforeRouteEnter(to, from, next) {
    if (to.meta.isAuth) {
      if (localStorage.getItem("school") === "vue") next();
    } 
    else next();
  },
  beforeRouteLeave(to, from, next) {
    next();
  },
};
</script>

<style>
</style>