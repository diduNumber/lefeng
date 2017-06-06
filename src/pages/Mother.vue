<template>
    <div id='mother'>mother
    	<hello></hello>
    </div>
</template>

<script>
	import Hello from '../components/Hello'
   export default{
        name: 'mother',
        components:{
        	Hello
        }
   }
</script>

<style>
   #mother{
   		color: hotpink;
   }
</style>