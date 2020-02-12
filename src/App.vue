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
*{padding: 0;margin: 0;}
body,html{
  font-size: 16px;
  background: white;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
/* .preview figure {
  float: left;
  width: 30%;
  height:calc(30vw - 0px);
  margin: 1.5%;
}

.preview figure img {
  width: 100%;
} */
</style>
