<template>
  <div id="app" class="main-contianer">
    <el-container>
      <el-header>
        <NarBar></NarBar>
      </el-header>
      <el-main>
        <router-view name="content"></router-view>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import NarBar from '@/components/header/NavBar.vue'
import Footer from '@/components/footer/Footer'
export default {
  name: 'app',
  components: {
    NarBar,
    Footer
  },
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
