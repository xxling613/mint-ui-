<template>
  <div>
      <!-- 顶部导航滑动 -->
    <div id="slider" class="mui-slider">
                <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                    <div class="mui-scroll">
                        <a :class="['mui-control-item',item.id==0?'mui-active':''] " v-for="item in toplist" :key="item.id" @click="getimglist">
                            {{item.title}} 
                        </a>
                    </div>
                </div>
            </div>
      <!-- 图片 -->
      <ul class="imgs">
        <li v-for="item in list" :key="item.id" @click="todet">
            <img v-lazy="item.img">
            <!-- <img :src="item.img" alt=""> -->
        </li>
</ul>
  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
   name:'chatList',
   data(){
     return{
         toplist:[
             {'id':0,'title':'全部'},
             {'id':1,'title':'家具生活'},
             {'id':2,'title':'摄影设计'},
             {'id':3,'title':'明星美女'},
             {'id':4,'title':'动物萌宠'},
             {'id':5,'title':'山水田园'}
         ],
         list:[]
     }
   },
   mounted(){
    //    顶部滑动
       mui('.mui-scroll-wrapper').scroll({
	     deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
   },
   created(){
      this. getimglist()
   },
   methods:{
    //    获取图片数据
        getimglist(){
        this.$http.get("../../static/data/imgs.json").then(res=>{
            if(res.body.status==0){
                this.list=res.body.message
                // console.log(res.body.message)
            }
        })
     },
     todet(){
       this.$router.push({path:"/chatdet"})
   }
   },
}
</script>

<style>
   *{
       touch-action: pan-y
   }
   .imgs{
       padding:0 2rem;
       box-sizing: border-box;
   }
   .imgs img{
       width: 100%;
   }
   imag[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
    }
    li{
        list-style: none;
        box-shadow: 0 0 0.5rem 0.5rem #d6d6d6
    }
</style>