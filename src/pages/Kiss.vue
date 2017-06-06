<template>
    <div id='kiss'>
    	<hello></hello>
    	Kiss
    </div>
</template>

<script>
   	import Hello from '../components/Hello'
   	export default{
        name: 'kiss',
        components:{
        	Hello
        }
   }
</script>

<style>
   #kiss{
   		color: hotpink;
   }
</style>