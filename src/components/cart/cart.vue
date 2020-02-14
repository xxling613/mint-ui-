<template>
  <div class="cartlist">
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner"  v-for="(item,index) in list" :key="index">
						<mt-switch v-model="$store.getters.getSelected[item.id]"
            @change="changeselect(item.id,$store.getters.getSelected[item.id])"></mt-switch>
            <img src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1572507086,3815096171&fm=26&gp=0.jpg" alt="">
					  <div>
                <h4>&nbsp;{{item.title}} </h4>
               <div>
                   <span class="changes">￥{{item.prcie}}</span> 
                   <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='item.remain'>
                   <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                   <input class="mui-input-numbox" type="number" :value="item.count"/>
                   <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                    </div>
                     <a href="#" @click.prevent="del(item.id,index)">删除</a>
               </div>
            </div>
          </div>
				</div>
			</div>

      <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<!-- <div class="settle"> -->
              <div>
                <p>总计(不含运费)</p>
                <p>已勾选商品<span class="changes">{{$store.getters.gettotle.piece}} </span>件，总价:<span class="changes">￥{{$store.getters.gettotle.totle}}</span> </p>
              </div>
              <div class="danger">
                <mt-button type="danger" size="small">去结算</mt-button>
              </div>
            <!-- </div> -->
					</div>
				</div>
			</div>
      <p> {{$store.getters.getSelected}} </p>
  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min'
export default {
   name:'cart',
   data(){
      return{
        list:[],
        value:false,
        // piece:0,
        // totle:0,
        // count:this.list.count
      }
   },
   mounted(){
     mui(".mui-numbox").numbox()
   },
  created(){
    this.list=this.$store.state.cart
    // console.log(this.$store.state.cart)
  },
  methods:{
    //  获取input里面的数量
      //  newcount(){
      //   this.list.count=parseInt(this.$refs.numbers.value)
      //   console.log(this.$refs.numbers.value)
      //  },
    // 删除
    del(id,index){
      this.list.splice(index,1)
      this.$store.commit("remove",id)
    },
    changeselect(id,val){
      console.log(id,val)
     this.$store.commit("updateSelected",{id,selected:val})
    //  this.$store.getters("gettotle")
    }
  }
}
</script>

<style>
   img{
     width: 8rem;
     height: 8rem;
   }
   .mui-card-content-inner{
     display: flex;
      justify-content: space-between;
     align-items: center;
   }
   .cartlist{
     background: #e6e6e6;
   }
   /* .settle{
     display: flex;
     justify-content: space-between;
      align-items: center
   } */
   .mui-numbox{
     height: 30px;
   }
   .changes{
     color: red;
     font-size: 2.3rem;
     font-weight: 300
   }
</style>