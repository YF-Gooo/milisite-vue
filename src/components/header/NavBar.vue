<template>
  <el-menu class="top-bar" mode="horizontal" router>
      <div class="logo">
        <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
          <div style="text-align:center;line-height:50px;">
              <span style="color:#FF9933;font-size:30px;font-weight:bold;">M</span>
              <span style="font-size:30px;font-size:30px;">i</span>
              <span style="color:#999999;font-size:30px;">l</span>
              <span style="font-size:30px;">i</span>
              <span style="font-size:30px;">-</span>
              <span style="color:#8B7D6B;font-size:25px;">S</span>
              <span style="font-size:25px;">i</span>
              <span style="font-size:25px;">t</span>
              <span style="font-size:25px;">e</span>
          </div>
      </el-col>
    </div>
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/postimage">投放照片</el-menu-item>
    <el-menu-item index="/about">关于喵站</el-menu-item>
    <el-menu-item v-if="!user" index="/signin">登录</el-menu-item>
    <el-menu-item v-if="!user" index="/signup">注册</el-menu-item>
    <el-menu-item v-if="user">
      <el-dropdown>
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
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      user:"爱吃大番薯",
      text:"",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.top-bar {
  margin:0 20%;
  margin-bottom: 20px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #8B7D6B;
  font-size: 18px;
}
.el-icon-arrow-down {
  font-size: 18px;
}
</style>
