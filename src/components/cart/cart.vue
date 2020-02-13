<template>
  <div class="cart">
    <p>购物车</p> 
    <button type="danger" @click="addcart">加入购物车</button>
    <transition 
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter">
    <div class="ball" v-if="show"></div>
    </transition>
  </div>
</template>

<script>
export default {
   name:'cart',
   data(){
      return{
        show:false
      }
   },
   methods:{
     addcart(){
      this.show =!this.show
     },
     beforeEnter(el){
       el.style.transform="translate(0,0)"
     },
     enter(el,done){
        el.offsetWidth;
        el.style.transform="translate(140px,570px)"
        el.style.transition="all 1s ease";
        done()
     },
     afterEnter(el){
       this.show =!this.show
     }
   }
}
</script>

<style>
    /* .cart{
          width: 100%;
        height: 78rem;
    } */
   .ball{
     width:2rem;
     height: 2rem;
     background: red;
     border-radius: 50%;
     /* transform: translate(140px,570px); */
     z-index: 99;
     position: absolute;
     left:120px;
     top:80px;
   }
</style>