<template>
  <el-row class="navbar">
    <el-col :span="2" class="logo">
      <span style="color:#FF9933;font-size:30px;font-weight:bold;">M</span>
      <span style="font-size:30px;font-size:30px;">i</span>
      <span style="color:#999999;font-size:30px;">l</span>
      <span style="font-size:30px;">i</span>
    </el-col>
    <el-col :span="16">
        <el-link type="info" href="/">首页</el-link>
        <el-link type="info" href="/postimage">投放照片</el-link>
        <el-link type="info" href="/about">关于喵站</el-link>
    </el-col>
    <el-col :span="6">
        <el-link v-if="!user" type="info" href="/signin">登录</el-link>
        <el-link v-if="!user" type="info" href="/signup">注册</el-link>
        <el-dropdown v-if="user">
          <span class="el-dropdown-link">
            {{user}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'NavBar',
  data() {
    return {
      user:"",
      text:"",
    };
  },
};
</script>
<style>
.logo{
  height:60px;
  text-align:center;
  line-height:60px;
}
.navbar .el-link{
  height:60px;
  margin:0 0.5em;
}
.navbar .el-dropdown{
  margin-top:18px;
}
.navbar .el-dropdown-link {
  cursor: pointer;
  color: #8B7D6B;
  font-size: 15px;
}
.navbar .el-icon-arrow-down {
  font-size: 15px;
}
</style>