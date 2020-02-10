<template>
  <div class="com">
     <h4>发表评论</h4>
     <hr>
     <textarea placeholder="请输入要bb的内容" maxlength="120" class="text" v-model="text"></textarea>
     <!-- <input type="button" value="发表评论"> -->
     <mt-button type="primary" size="large" @click="publish">发表评论</mt-button>
     <!-- 评论列表 -->
     <div class="content">
         <div class="com-item" v-for="(item,index) in list" :key="index">
       <div class="com-title">
           第{{index+1}}楼 &nbsp;用户:匿名用户 &nbsp;发表时间:&nbsp;&nbsp;{{item.date | dateFormat}}
       </div>
       <div class="com-body">
           {{item.content}}
       </div>
       </div>
     </div>

     <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
   name:'comment',
   data(){
       return{
           text:'',
           list:[
               {'id':1,'date':'2017-12-21 20:13:12','content':'大象和蚂蚁'}
           ],
           texts:{}
       }
   },
   methods:{
       publish(){
        //    console.log(this.text)
        if(this.text.trim().length==0){
            Toast({
            message: '评论不能为空!',
            duration: 1000
            });
        }else{
           this.texts={'date':Date.now(),'content':this.text};
           this.list.unshift(this.texts)
           this.text=''
        }
       }
   },
}
</script>

<style>
   .com{
       margin-top: 10rem;
       padding: 0 1rem
   }
   h4{
       margin: 1rem
   }
   .text{
       margin-top:1rem
   }
   .content{
       margin: 1rem 0;
   }
   .com-title{
       background-color:#d6d6d6;
       height: 3.5rem;
       line-height: 3.5rem;
       font-size:2rem
   }
   .com-body{
       height: 3.5rem;
       line-height: 3.5rem;
       text-indent: 2rem
   }
</style>