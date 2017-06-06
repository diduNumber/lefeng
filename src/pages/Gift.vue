<template>
    <div id='gift'>gift
    	<hello></hello>
    </div>
</template>

<script>
	import Hello from '../components/Hello'
   	export default{
        name: 'gift',
        components:{
        	Hello
        }
   	}
</script>

<style>
   	#gift{
   		color: hotpink;
  	}
</style>