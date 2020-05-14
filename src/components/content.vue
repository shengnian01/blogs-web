<template>
	<h1 class="red">你好{{msg}}</h1>
</template>

<script>
	export default{
		name:'contented',
		props:{
			msg:{
				type:String,
				default:'test msg'
			}
		},
		methods:{
			
		},
		data() {
			return{
				
			}
		}
	}
</script>

<style>
	.red{
		color: #3A8EE6;
		background-color: #000000;
	}
</style>
