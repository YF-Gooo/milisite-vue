<template>
  <div class="post-photo">
    <h2>欢迎投稿：</h2>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>

      <el-form-item label="描述">
        <el-input type="textarea"  :rows="7" v-model="form.info"></el-input>
      </el-form-item>

      <el-form-item label="图片">
        <el-upload
          class="image-uploader"
          label="描述"
          action=""
          ref="upload"
          :before-upload="fnBeforeUpload"
          :http-request="fnUploadRequest"
          :show-file-list="false">
          <img v-if="photoUrl" :src="photoUrl" class="image">
          <i v-else class="el-icon-plus image-uploader-icon" style="line-height: 163px;"></i>
          <div class="el-upload__tip" slot="tip">只能上传png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit" :loading="uploading">立即创建</el-button>
      </el-form-item>

    </el-form>
    
  </div>
</template>

<script>
import * as API from '@/api/photo/';
import uplpadAPI from '@/api/upload/';

export default {
  name: 'PostPhoto',
  data() {
    return {
      photoUrl: '',
      dialogPhotoUrl: '',
      dialogVisible: false,
      uploading:false,
      form: {
        title: '',
        info: '',
        url: '',
        image: '',
      },
    };
  },
  methods: {
    fnBeforeUpload(file) {
      const isPhoto = (file.type === 'image/png' || file.type === 'image/jpeg');
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isPhoto) {
        this.$message.error('上传头像图片只能是图片!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isPhoto && isLt2M;
    },
    fnUploadRequest(option) {
      uplpadAPI(option.file.name).then((res) => {
        const oReq = new XMLHttpRequest();
        oReq.open('PUT', res.data.put, true);
        oReq.send(option.file);
        oReq.onload = () => {
          this.photoUrl = res.data.get;
          this.form.image = res.data.key;
        };
      }).catch((error) => {
        this.$notify.error({
          title: '网路错误，或者服务器宕机',
          message: error,
        });
      });
    },
    onSubmit() {
      let _this = this;
      _this.uploading=true
      API.postPhoto(this.form).then((res) => {
        if (res.status > 0) {
          this.$notify.error({
            title: '投稿失败',
            message: res.msg,
          });
        } else {
          this.$notify({
            title: '投稿成功',
            message: `您投稿的ID为${res.data.id}`,
            type: 'success',
          });
          _this.uploading=false,
          _this.$router.push("/photo/"+res.data.id)
        }
      }).catch((error) => {
        this.$notify.error({
          title: '网路错误，或者服务器宕机',
          message: error,
        });
        _this.uploading=false
      });
    },
  },
  components: {
  },
};
</script>

<style>
  .post-photo{
    margin:5% 20%;
  }
  .image-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .image-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .image-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .image {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
