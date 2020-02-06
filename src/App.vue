<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Tabbar></Tabbar>  
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Tabbar from './components/tabbar'
export default {
  name: 'App',
  components:{
    Tabbar
  }
}
</script>

<style>
*{padding: 0;margin: 0}
body,html{
  font-size: 16px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
