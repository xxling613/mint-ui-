import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 获取本地存储的值，防止刷新后cart数量清0
var cart = JSON.parse(localStorage.getItem("cart") || '[]')
// console.log(cart)
const store = new Vuex.Store({
     state:{
         count:1,
         cart:cart
     },
     mutations:{
        // 加入购物车的数组
        addtocart(state,goodsinfo){
            var flag = false
            state.cart.some(item=>{
                if(item.id==goodsinfo.id){
                    item.count+=parseInt(goodsinfo.count)
                    flag = true
                    return true
                }
            })
            if(!flag){
                // console.log(goodsinfo)
                state.cart.push(goodsinfo)
            }
        //    本地存储cart数组
        localStorage.setItem("cart",JSON.stringify(state.cart))
    },
        // 购物车删除cart中
        remove(state,cartid){
          state.cart.some((item,index)=>{
              if(item.id==cartid){
                state.cart.splice(index,1)
              }
              return true
               //   更新
          })
          localStorage.setItem("cart",JSON.stringify(state.cart))
        },
        // 更新selected状态并存在本地存储
        updateSelected(state,info){
          state.cart.some(item=>{
            if(item.id==info.id){
              item.selected=info.selected
            }
          })
          localStorage.setItem("cart",JSON.stringify(state.cart))
        }  
     },
     getters:{
        //    徽标值的更新
        getcount(state){
          var c = 0;
          state.cart.forEach(item=>{
              c+=item.count
          })
          return c
        },
        // 将id和selected保存到购物车
        getSelected(state){
            var o = {}
            state.cart.forEach(item=>{
              o[item.id] = item.selected
            })
            return o
          },
       gettotle(state){
         var obj = {
          piece:0,
          totle:0,
         }
         state.cart.forEach(item=>{
           if(item.selected){
            obj.piece+=item.count
            obj.totle+=item.prcie*item.count    
           }
         })
         return obj
       }   
   } 

})

export default store