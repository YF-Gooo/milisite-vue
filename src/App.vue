<template>
  <div id="app" class="main-contianer">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
  html{
    height:100%;
    margin:0;
    padding:0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    position: relative;
  }
</style>
