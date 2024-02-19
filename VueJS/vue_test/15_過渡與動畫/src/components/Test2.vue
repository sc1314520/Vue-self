<template>
	<div>
		<button @click="isShow = !isShow">顯示/隱藏</button>
		<transition-group name="hello" appear>
			<h1 v-show="isShow" key="1">你好啊！</h1>
			<h1 v-show="!isShow" key="2">好朋友！</h1>
		</transition-group>
	</div>
</template>

<script>
	export default {
		name:'Test',
		data() {
			return {
				isShow:true
			}
		},
	}
</script>

<style scoped>
	h1{
		background-color: orange;
	}
	/* 進入起點 */ /* 離開終點 */
	.hello-enter,.hello-leave-to{
		transform: translateX(-100%);
	}
	.hello-enter-active,.hello-leave-active{
		transition: 0.5s linear;
	}
	/* 進入終點 */ /* 離開起點 */
	.hello-enter-to,.hello-leave{
		transform: translateX(0);
	}
	
</style>