<template>
    <div id="tabbar">
        <!-- 顶部导航 -->
    <mt-header title="mint-ui项目">
            <router-link to="/" slot="left">
                <!-- <mt-button icon="back">返回</mt-button> -->
            </router-link>
    </mt-header>
    
    <!-- 中间 -->
    <transition>
    <router-view></router-view>
    </transition>

    <!-- 底部tabbar -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/list">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/mine">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
   </div>
</template>

<script>
export default {
    name:'tabbar'
}
</script>

<style>
  #tabbar .mint-header-title{
      font-size: 2.2rem
  }
  .v-enter{
       opacity: 0;
      transform: translateX(100%)
  }
  .v-leave-to{
      opacity: 0;
      transform: translateX(-100%);
      position: absolute
  }
  .v-enter-active,
  .v-leave-active{
      transition: all 0.4s ease;
  }
  #app{
      overflow-x: hidden
  }
</style>