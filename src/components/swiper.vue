<template>
   <div>
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
   </div>
</template>

<script>
export default {
  name:"swiper"
}
</script>

<style>
  .mint-swipe{
     width: 100%;
     height: 22rem;
  }
  .mint-swipe img{
     width: 100%;
     height: 100%;
  }
</style>