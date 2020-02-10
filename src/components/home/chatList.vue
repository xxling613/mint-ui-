<template>
  <div>
    <div id="slider" class="mui-slider">
                <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                    <div class="mui-scroll">
                        <a :class="['mui-control-item',item.id==0?'mui-active':''] " v-for="item in toplist" :key="item.id">
                            {{item.title}} 
                        </a>
                    </div>
                </div>
            </div>
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
         ]
     }
   },
   mounted(){
       mui('.mui-scroll-wrapper').scroll({
	     deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
   },
}
</script>

<style>
   *{
       touch-action: pan-y
   }
</style>