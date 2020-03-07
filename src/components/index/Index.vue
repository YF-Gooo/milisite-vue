<template>
  <div class="main-wrapper">
  <el-container>
    <el-header>
      <router-view name="header"></router-view>
    </el-header>
    <el-main><router-view name="content"></router-view></el-main>
    <el-footer><router-view name="footer"></router-view></el-footer>
  </el-container>
  </div>
</template>

<script>
</script>

<style>
  .main-wrapper{
    background-color:#fffL;
    width:100%;
    margin:0 auto;
  }
</style>