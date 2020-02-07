import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import HomeList from '@/components/home/homelist'
import Emlist from '@/components/home/emlist'
// import Tabbar from '@/components/tabbar'
import List from '@/components/list/list'
import Cart from '@/components/cart/cart'
import Mine from '@/components/mine/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/home/homelist',
      name: 'homelist',
      component:HomeList
    },
    {
      path: '/home/emlist',
      name: 'emlist',
      component:Emlist
    }
  ],
  linkActiveClass:'mui-active'  //默认tabbar高亮类
})
