<template>
    <div id='home'>home
       <ul>
       	 <li v-for='item in list'>
       	 	 <img v-lazy='item' />
       	 </li>
       </ul>
    </div>
</template>

<script>
   export default{
        name: 'home',
        data () {
        	return {
	        	list:[
	        	      'static/nav0.png',
				      'static/nav1.png',
				      'static/nav2.png',
				      'static/nav3.png',
				      'static/nav4.png',
				      'static/nav5.png',
				      'static/nav6.png',
				      'static/nav7.png',
				      'static/nav0.png',
				      'static/nav1.png',
				      'static/nav2.png',
				      'static/nav3.png',
				      'static/nav4.png',
				      'static/nav5.png',
				      'static/nav6.png',
				      'static/nav7.png',
				      'static/nav0.png',
				      'static/nav1.png',
				      'static/nav2.png',
				      'static/nav3.png',
				      'static/nav4.png',
				      'static/nav5.png',
				      'static/nav6.png',
				      'static/nav7.png',
				      'static/nav0.png',
				      'static/nav1.png',
				      'static/nav2.png',
				      'static/nav3.png',
				      'static/nav4.png',
				      'static/nav5.png',
				      'static/nav6.png',
				      'static/nav7.png',
				      'static/nav0.png',
				      'static/nav1.png',
				      'static/nav2.png',
				      'static/nav3.png',
				      'static/nav4.png',
				      'static/nav5.png',
				      'static/nav6.png',
				      'static/nav7.png',
				      'static/nav0.png',
				      'static/nav1.png',
				      'static/nav2.png',
				      'static/nav3.png',
				      'static/nav4.png',
				      'static/nav5.png',
				      'static/nav6.png',
				      'static/nav7.png',
				      'static/nav0.png',
				      'static/nav1.png',
				      'static/nav2.png',
				      'static/nav3.png',
				      'static/nav4.png',
				      'static/nav5.png',
				      'static/nav6.png',
				      'static/nav7.png',
				      'static/nav0.png',
				      'static/nav1.png',
				      'static/nav2.png',
				      'static/nav3.png',
				      'static/nav4.png',
				      'static/nav5.png',
				      'static/nav6.png',
				      'static/nav7.png',
				      'static/nav0.png',
				      'static/nav1.png',
				      'static/nav2.png',
				      'static/nav3.png',
				      'static/nav4.png',
				      'static/nav5.png',
				      'static/nav6.png',
				      'static/nav7.png',
				      'static/nav0.png',
				      'static/nav1.png',
				      'static/nav2.png',
				      'static/nav3.png',
				      'static/nav4.png'
	        	]
	        	}
        }
   }
</script>

<style>
   #home{
   		color: hotpink;
   }
</style>