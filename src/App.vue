<template>
  <div id="app">
   <div class='tabbar' @click='tabbarHidden($event)' v-if='flag'>
       <router-link to="/kiss">
       		<img src="" alt=""  width="10px"/>
       		<p>momoda</p>
       </router-link>
       <router-link to="/global">Global</router-link>
       <router-link to="/mother">Mother</router-link>
       <router-link to="/gift">Gift</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
  	return {
  		flag:true,
  		text:''
  	}
  },
  methods:{
  	 //点击是flag为false
  	 tabbarHidden (e) {
  	 	  this.flag = false;
		    this.text = e.target.innerHTML;
		    //点击触发公共头部的$on事件，同时将参数传过去
		    this.bus.$emit('text', this.text);
  	 }
  },
  created () {
  	//给bus添加事件
  	this.bus.$on('data', data => {
		  this.flag = data;
  	});
  }
}
</script>

<style>
#app .tabbar{
   position: fixed;
   left: 0;
   right: 0;
   bottom: 0;
   height: 60px;
   background-color:rgba(0, 0, 0, 0.7);
   display: flex;
   align-items: center;
   justify-content: space-around;
}
.tabbar a{
   text-decoration: none;
   color: #fff;
}
</style>
