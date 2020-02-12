<template>
    <div>
      <div class="good-list">
              <div v-for="item in goodslist" :key="item.id" class="good-item" @click="goodsinfo(item.id)">
                      <img :src="item.img" alt="">
                  <p class="good-title"> {{item.title}} </p>
                  <div class="price">
                    <span class="current">￥ {{item.current}} </span>
                    <span class="original">{{item.original}}</span>
                    <div class="bottom">
                        <span class="left">{{item.name}}</span>
                        <span class="right">剩{{item.remain}}件</span>
                    </div>
                  </div>
              </div>
              <mt-button type="danger" size="large">加载更多</mt-button>
      </div>
    </div>
</template>

<script>
export default {
   name:"goodlist",
   data(){
       return{
          goodslist:[]
       }
   },
   created(){
          this.getlist()
   },
   methods:{
    //    获取商品列表数据
       getlist(){
           this.$http.get("../../../static/data/goods.json").then(res=>{
               if(res.body.status===0){
                   this.goodslist=res.body.message
               }
           })
       },
    //    点击列表进详情
        goodsinfo(id){
            // console.log(id)
            this.$router.push({
                path:"/home/goodsinfo",
                query:{id}
            })
        }
   }
}
</script>

<style scoped>
.good-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1rem;
     background: white;
}
  .good-list .good-item{
      width: 49%;
      margin-bottom: 1rem;
      box-shadow: 0 0 2px 2px #ccc;
      list-style: none;
      min-height: 31rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      /* position: relative; */
  }
  .good-list img{
      width: 100%;
      height: 21rem;
  }
  .good-top{
      background: white;
  }
  .good-title{
      color: black;
      font-size: 2rem;
      font-weight: 800;
  }
  .current{
      font-size: 2.4rem;
      color: red;
  }
  .original{
      color: grey;
      font-size: 1.8rem;
      text-decoration: line-through
  }
  .good-list .bottom{
      display: flex;
      color: grey;
      font-size:2rem;
      line-height: 2rem;
      justify-content:space-between;
  }
  .price{
      padding:1rem;
      background: #e6e6e6;
  }
</style>