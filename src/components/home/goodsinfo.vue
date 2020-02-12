<template>
  <div class="goodsinfo">
      <transition 
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"> 
      <div class="ball" v-show="shows" ref="ball"></div>
      </transition>
      <!-- <div class="goods"> -->
      <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						 <!-- 轮播图 -->
                           <swiper></swiper>
					</div>
				</div>
			</div>
      <div class="goods-shop">
        <div class="goods-title">小米</div>
        <div class="goods-cart">
            <div class="price">
                市场价：<span class="old">￥2699</span>&nbsp;&nbsp;
                销售价：<span class="new">￥2199</span>
            </div>
            <div class="num">
                购买数量:
				<div class="mui-numbox">
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input class="mui-input-numbox" type="number" value="0"/>
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
            </div> 
        <mt-button type="primary" size="small">立即购买</mt-button>
        <mt-button type="danger" size="small" @click="add">加入购物车</mt-button>
        </div>
      </div>
      <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号:</p>
                        <p>库存情况:</p>
                        <p>上架时间:</p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type="primary" size="large" plain>图文介绍</mt-button>
                    <mt-button type="danger" size="large" plain>商品评论</mt-button>
                </div>
			</div>
      <!-- </div> -->
  </div>
</template>

<script>
import swiper from '../swiper'
import mui from '../../lib/mui/js/mui.min'
export default {
    name:"goodsinfo",
    data(){
        return{
          shows:false,
        }
    },
    components:{
      swiper
   },
   mounted(){
     mui(".mui-numbox").numbox()
   },
    methods:{ 
        // 加入购物车
       add(){
         this.shows=!this.shows;
       },
       beforeEnter(el) {
         el.style.transform="translate(0,0)";
       },
       enter(el,done) {   
        el.offsetWidth;
        const ballposition=this.$refs.ball.getBoundingClientRect();
        // console.log(ballposition)
        const badgeposition=document.getElementById("badge").getBoundingClientRect();
        const x =ballposition.left - badgeposition.left;
        const y =ballposition.top - badgeposition.top;
        el.style.transform=`translate(${x}px,${y}260px)`;
        el.style.transition="all 1s cubic-bezier(.4,-0.3,1,.68)";
        done();
       },
       afterEnter(el) {
        this.shows=!this.shows;
       }
    }
}
</script>

<style scoped>
  .goodsinfo{
      background: #e6e6e6;
  }
  .goods-shop{
      margin-top: 1rem;
      background: white;
      margin:1rem;
      padding: 1rem 0;
      box-shadow: 0 1px 2px rgba(0,0,0,.3);
      border-radius: 2px;
  }
  .goods-title{
      padding: 1rem;
      border-bottom: 1px solid #d6d6d6;
  }
  .goods-cart{
      margin: 1rem;
  }
  .price .old{
      font-size: 1.8rem;
      text-decoration: line-through;
  }
  .price .new{
      font-size: 2.4rem;
      color: red;
  }
  .num{
      margin: 1rem 0;
  }
  .mui-card-footer{
      display: block
  }
  .mint-button{
      margin: 1rem 0;
  }
  .ball{
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background: red;
      position: absolute;
      left: 19rem;
      top: 45rem;
      z-index: 99;
  }
</style>