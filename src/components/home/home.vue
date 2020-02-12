<template>
  <div id="home">
     <!-- 轮播图 -->
     <swiper></swiper>
      <!-- 九宫格 -->
      <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media">
                        <router-link to="/home/homelist"> 
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">Home</div>
                        </router-link>  
                          </li>
		            <li class="mui-table-view-cell mui-media">
                        <router-link to="/home/emlist"> 
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">Email</div>
                          </router-link>   
                          </li>
		            <li class="mui-table-view-cell mui-media">
                     <router-link to="/home/chatList">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div>
                          </router-link>
                          </li>
		            <li class="mui-table-view-cell mui-media">
                     <router-link to="/home/goodlist">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">商品列表</div>
                          </router-link>
                          </li>
		            <li class="mui-table-view-cell mui-media">
                     <router-link to="/home/seList">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div>
                          </router-link>
                          </li>
		            <li class="mui-table-view-cell mui-media">
                     <router-link to="/home/phList">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div>
                          </router-link>
                          </li>
		        </ul> 
  </div>
</template>

<script>
import swiper from '../swiper'
export default {
   name:'home',
   components:{
      swiper
   }
}
</script>

<style scoped>
  #home .mui-table-view-cell{
     width: 33%;
  }
  #home .mui-grid-view.mui-grid-9 .mui-media{
   color: #26a2ff
  }
</style>