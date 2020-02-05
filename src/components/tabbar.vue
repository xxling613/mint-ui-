<template>
    <div>
        <mt-header title="mint-ui项目">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
  <!-- 底部路由 -->
   <!-- <div class="tabbar">
       <router-link to="/home" tag="li">
       <p>首页</p>
       </router-link>
       <router-link to="/list" tag="li">
       <p>列表</p>
       </router-link>
       <router-link to="/cart" tag="li">
       <p>购物车</p>
       </router-link>
       <router-link to="/mine" tag="li">
       <p>我的</p>
       </router-link>      
    </div> -->
    <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>
   </div>
</template>

<script>
export default {
    name:'tabbar'
}
</script>

<style>
    .tabbar{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-top:1px solid rgb(230,230,230)
    }
    .tabbar li{
        list-style: none;
        float: left;
        width: 25%;
        height: 100%;
    }
</style>