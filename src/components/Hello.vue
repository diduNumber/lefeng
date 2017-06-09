<template>
  <div class="header">
      <button @click='kissBack()'>hehe</button>
      <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: 'header',
	 data () {
	   return {
	   		msg: true,
	   		title: ''
	   }
	},
	methods: {
		kissBack () {

			this.bus.$emit('data', this.msg);
		   console.log(this.bus1)

			history.back();
		}
	},
	created () {
		//给bus添加事件 接收header的文字
  	this.bus.$on('text', data => {
		   this.title = data;
  	});
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header{
    	 
    }
</style>
