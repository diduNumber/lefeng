<template>
    <div id='global'>global
    	<hello></hello>
    </div>
</template>

<script>
	import Hello from '../components/Hello'
   	export default{
        name: 'global',
        components:{
        	Hello
        }
   	}
</script>

<style>
  	#global{
   		color: hotpink;
   	}
</style>