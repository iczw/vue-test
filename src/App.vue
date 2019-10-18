<template>
  <div id="app">
    <img src="./assets/imgs/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss">
  #app {
    font-family: '微软雅黑';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 12px;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    li{
      list-style: none;
    }
  }

  p{
    margin: 0;
  }
  .icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .leftStyle{
    border-left: 6px solid rgba(59,133,245,1) !important;
    padding-left: 10px !important;
  }
  .boxShadow{
    box-shadow:0px 2px 4px 0px rgba(239,239,239,0.5) !important;
  }
</style>
