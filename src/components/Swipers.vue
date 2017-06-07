<template>
	<!-- Swiper -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item of msgSwiper">
            	<img :src="item">
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
       
    </div>
</template>

<script>
	let swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        slidesPerView: 1,
		        paginationClickable: true,
		        // loop: true,
		        autoplay: 3000,
		        speed: 1000,
		        autoplayDisableOnInteraction:false,
		        observer:true
		    });
	export default{
		props:["msgSwiper"],
		name:"swiper",
	}
</script>

<style>
	@import'../../static/swiper.min.css';
	.swiper-container .swiper-slide img{
		width: 100%;
	}
</style>