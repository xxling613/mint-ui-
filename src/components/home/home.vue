<template>
  <div id="home">
     <!-- 轮播图 -->
     <mt-swipe :auto="10000">  
         <mt-swipe-item>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580905410385&di=6aee4b2ba6dbcafda95d9b39f5b98548&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2017-10-30%2F59f6eeb25bf24.jpg" alt="">
         </mt-swipe-item>
         <mt-swipe-item>
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4204255388,74828473&fm=26&gp=0.jpg" alt="">  
         </mt-swipe-item>
         <mt-swipe-item>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580905766320&di=6727d1d0f3baeeef730a516ce3dcb6ab&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201508%2F16%2F20150816130929_ZCt5E.thumb.700_0.jpeg" alt="">
         </mt-swipe-item>
      </mt-swipe>
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
export default {
   name:'home'
}
</script>

<style scoped>
  #home .mint-swipe{
     width: 100%;
     height: 22rem;
  }
  #home .mint-swipe img{
     width: 100%;
     height: 100%;
  }
  #home .mui-table-view-cell{
     width: 33%;
  }
  #home .mui-grid-view.mui-grid-9 .mui-media{
   color: #26a2ff
  }
</style>