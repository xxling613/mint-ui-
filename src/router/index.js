import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Tabbar from '@/components/tabbar'
import List from '@/components/list/list'
import Cart from '@/components/cart/cart'
import Mine from '@/components/mine/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tabbar',
      name: 'tabbar',
      component: Tabbar
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
    }
  ]
})
