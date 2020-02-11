<template>
   <div>
      <p>详情</p>
      <!-- <img class="preview-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1802367038,1568724653&fm=26&gp=0.jpg" alt="" srcset=""> -->
          <!-- <vue-preview :slides="list" class="preview" > -->
              <img class="preview-img"  v-for="(item,index) in list" :key="item.id" 
              :src="item.img" alt="" height="100"
              @click="$preview.open(index,list)">
     <commit></commit> 
   </div>
</template>

<script>
import commit from '../../children/comment'
export default {
   name:"chatdet",
   data(){
       return{
         list: [],//缩略图的数组
       }
   },
   components:{
       commit
   },
   created(){
     this.getimg()
   },
   methods:{
       getimg(){
           this.$http.get("../../../static/data/imgs.json").then(res=>{
            //    
            if(res.body.status===0){
                res.body.message.forEach(item => {
                item.w =600;
                item.h =400;
//                 item.msrc = item.img;
        });
           this.list=res.body.message
            }
           })
       }
   }
}
</script>

<style>
  /* img{
      width: 100%;
  } */
</style>