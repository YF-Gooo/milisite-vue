<template>
  <div id="signup_wrap">
    <h1>用户注册</h1>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="用户名">
        <el-input v-model="user_name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="nickname" placeholder="请输入昵称"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password" placeholder="请输入密码" type="password"></el-input>
      </el-form-item>
      <el-form-item label="核对密码">
        <el-input v-model="password_confirm" placeholder="请再次输入密码" type="password"></el-input>
      </el-form-item>
      <el-form-item
        prop="email"
        label="邮箱"
        :rules="[
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]"
      >
        <el-input v-model="email"></el-input>
      </el-form-item>
    </el-form>
    <el-button style="margin-top:17px;" @click="signup">注册</el-button>
  </div>
</template>

<script>
import * as API from "@/api/user/";
export default {
  name: "signup",
  data() {
    return {
      nickname:"",
      user_name: "",
      password: "",
      password_confirm:"",
      email: '',
      labelPosition: 'right',
    };
  },
  methods: {
    signup: function() {
      let _this = this;
      if (this.nickname.length < 3) {
        this.$message.error("用户名不能为空或小于三个字符");
        return;
      }

      if (this.user_name.length < 6) {
        this.$message.error("用户名不能为空或小于六个字符");
        return;
      }

      if (this.password.length < 8) {
        this.$message.error("密码不能为空或小于八个字符");
        return;
      }

      if (this.password !=this.password_confirm) {
        this.$message.error("两次输入密码不一样");
        return;
      }
      let obj = {
        nickname:_this.nickname,
        user_name: _this.user_name,
        password: _this.password,
        password_confirm:_this.password_confirm,
      };
      API.signUp(obj
        )
        .then(
          response => {
            console.log(response)
            _this.$message({
              message: "注册成功",
              type: "success"
            });
            _this.$router.push("/signin");
          },
          response => console.log("注册失败" + response)
        );
    }
  }
}
</script>

<style>
#signup_wrap {
  width: 300px;
  margin: 0 auto;
  margin-top:150px;
}

#signup_wrap .el-form-item{
  height:25px
}
#signup_wrap h1 {
  color: #383a42;
  padding: 10px;
}

#signup_wrap div {
  padding-bottom: 3px;
}
</style>